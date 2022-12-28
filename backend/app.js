require("dotenv").config();

const express = require("express")
const app = express()
const UserRoutes = require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", UserRoutes)

module.exports = app;