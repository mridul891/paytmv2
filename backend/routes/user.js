const express = require("express")
const router = express.Router()
const zod = require('zod')
const { User, Account } = require("../db")
const JWT_SECRET = require("../config")
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("../middleware/middleware")

// SignUp ROute
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
router.post('/signup', async (req, res) => {
    const body = req.body;
    // Checks for the inputs using zod
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(401).json({ message: "Email already taken / InCorrect input with ans" })
    }

    // Finding Existing Users
    const existingUser = await User.findOne({
        username: body.username
    })
    if (existingUser) {
        return res.status(401).json({ message: "User Already Exists" })
    }


    // New User

    const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const Token = jwt.sign({ userId: dbUser._id }, JWT_SECRET)

    // adding a random amount to the user 

    await Account.create({
        userId: dbUser._id,
        balance: 0
    })

    res.json({
        message: "User Created Successfully",
        token: Token
    })
})


// Sign In Route 
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body)
    if (!success) {
        return res.status(401).json({ message: "Error while logging in" })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET)
        return res.json({ token: token })
    }

    res.status(411).json({
        message: "Error while logging in after scanning"
    })
})


// User update information 
const updateSchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})

// Update Information 
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ message: "Error while updating" })
    }
    await User.updateOne({ _id: req.userId }, req.body)

    res.json({ message: "Updated Succesfully" })
})

// This api will return all the users if the filter value = h from the user database 
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || ""
    const users = await User.find({
        "$or": [{
            "firstName": {
                "$regex": new RegExp(filter, "i")
            }
        }, {
            "lastName": {
                "$regex": new RegExp(filter, "i")
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

// Add the balance 
router.post('/addbalance', authMiddleware, async (req, res) => {
    const { amount } = req.body
    const response = await Account.findOne({
        userId: req.userId
    })
    console.log(response.balance)
    await Account.updateOne({
        userId: req.userId,
        balance: response.balance + amount
    })
    res.json({ message: " Money added" })
})

router.get("/info", authMiddleware, async (req, res) => {

    const account = await User.findOne({ _id: req.userId })

    res.json({ account })
})

router.post("/recieveinfo", authMiddleware, async (req, res) => {
    const code = req.body.code
    
    const account = await User.findOne({ _id: code })

    res.json({ account })
})


module.exports = router