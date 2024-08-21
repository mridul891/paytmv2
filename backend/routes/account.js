const express = require('express')
const { Account, History } = require('../db')
const { authMiddleware } = require('../middleware/middleware')
const router = express.Router()
const mongoose = require('mongoose')

// To fetch The balance of the user 
router.get("/balance", authMiddleware, async (req, res) => {

    const account = await Account.findOne({ userId: req.userId })

    res.json({ balance: account.balance })
})

// To transfer the Money to other 

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession()

    session.startTransaction()
    // Retrive the amount and the reciever addreses 
    const { amount, to } = req.body

    // Finds the account of sender 
    const account = await Account.findOne({ userId: req.userId }).session(session);

    // Checks if the account is present and with the balance greater than amount
    if (!account || account.balance < amount) {
        await session.abortTransaction()
        return res.status(411).json({ message: "Insufficient Balance" })
    }

    // Finding recievers account
    const toAccount = await Account.findOne({ userId: to }).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        return res.status(411).json({ messge: "Reciever Not found" })
    }

    // Performing the transaction 
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session)
    await Account.updateOne({ userId: to }, { $inc: { balance: +amount } }).session(session)
    await History.create({ sender: req.userId, amount: amount, reciever: to })
    await session.commitTransaction()

    res.json({
        message: "Transfer successful"
    })
})

module.exports = router