// library
const express = require("express");
const cors = require("cors")
const PORT = 3000
// Middlewares
app.use(cors())
app.use(express.json())

// Routers 
const mainRouter = require("./routes/index")

app.use("/api/v1", mainRouter)

app.listen(PORT, () => {
    console.log(`the app is running at  localhost :${port}`)
})
