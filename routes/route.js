const express = require("express");
const router = express.Router();
const path = require("path");

const main = require("../controllers/main-controller");

router.get("/", main.getForm);
router.post("/api", main.postForm);
module.exports = router;