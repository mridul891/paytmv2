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
    firstname: zod.string(),
    lastname: zod.string()
})
router.post('/signup', async (req, res) => {
    const body = req.body;
    // Checks for the inputs using zod
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ message: "Email already taken / InCorrect input" })
    }

    // Finding Existing Users
    const existingUser = await User.findOne({
        username: body.username
    })
    if (existingUser._id) {
        return res.status(411).json({ message: "User Already Exists" })
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
        balance: 1 + Math.random() * 10000
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

router.post('/signup', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ message: "Error while logging in" })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({ userId: user_id }, JWT_SECRET)
        res.json({ token: token })
        return
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})


// User update information 
const updateSchema = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().optional()
})

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
        $or: [{
            firstname: {
                "$regrex": filter
            }
        }, {
            lastname: {
                "$regrex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router