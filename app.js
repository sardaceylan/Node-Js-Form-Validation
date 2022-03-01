const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator")

app.set("view engine", "ejs")

const userRoutes = require('./routes/route');
// const urlencoded = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({extended: false}))
app.use(userRoutes)

app.listen(3000, () => {
    console.log("Hello World!");
})
