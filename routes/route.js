const bodyParser = require("../app")
const express = require("express")
const router = express.Router()

const mainController = require("../controllers/main-controller")

router.get("/", mainController.getIndex)

router.get("/register", mainController.getRegister)

router.post("/register", mainController.postRegister)

module.exports = router
