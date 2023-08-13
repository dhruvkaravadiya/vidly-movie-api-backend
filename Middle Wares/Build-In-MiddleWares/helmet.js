const express = require("express")
const helmet = require("helmet")
const app = express()

// enabling the Helmet middleware
app.use(helmet())

// initializing a basic API that
// returns the "Hello, World!" message
app.get("/", (req, res) => {
    res.json("Hello, World!")
})

//port
const PORT = process.env.PORT || 3000
// running the server
app.listen(PORT, () => {
    console.log(`Starting Express server on http://localhost:${PORT}`)
})