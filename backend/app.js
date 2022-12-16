require("dotenv").config();

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", (req, res) => {
    res.send("This is TODO App back end")
})

module.exports = app;