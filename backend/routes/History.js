const express = require('express')
const { authMiddleware } = require('../middleware/middleware');
const { History, User } = require('../db');
const router = express.Router()

router.get("/history", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const response = await History.find({ sender: userId })
    res.json({ "response": response })
})

module.exports = router 