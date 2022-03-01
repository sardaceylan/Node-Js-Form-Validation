const express = require("express")
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator")

const app = express()

app.set("view engine", "ejs")

const urlencoded = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", urlencoded, (req, res) => {
    // res.json(req.body)
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Hello World!");
})