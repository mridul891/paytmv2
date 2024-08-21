const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./account")
const HistoryRouter = require('./History')
const router = express.Router()

router.use("/user", userRouter)
router.use("/account", accountRouter)
router.use("/history", HistoryRouter)

module.exports = router