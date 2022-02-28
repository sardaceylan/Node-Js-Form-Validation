const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "pug");
app.set("views");

const routes = require("./routes/route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3000, () => {
    console.log("Hello World!");
})
