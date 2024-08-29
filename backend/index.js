// library
const express = require("express");
const app = express()
const cors = require("cors")
const PORT = 3000
const mainRouter = require("./routes/index")
// Middlewares
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use(express.json())

// Routers 
app.use("/api/v1", mainRouter)

app.listen(PORT, () => {
    console.log(`the app is running at  localhost :${PORT}`)
})
