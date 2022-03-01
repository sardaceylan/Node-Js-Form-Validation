// app.get("/", (req, res) => {
//     res.render("index")
// })
const data = [
    {
        name: null,
        email: null,
        pass: null,
        repass: null
    }
]
exports.getIndex = (req, res) => {
    res.render("index")
}

exports.getRegister = (req, res) => {
    res.render("register")
}

exports.postRegister = (req,res) => {
    // console.log(req.body)
    data.push({
        name: req.body.username,
        email: req.body.email,
        pass: req.body.password,
        repass: req.body.repassword
    })
    console.log(data);
    res.redirect("/register")
}

// exports.postRegister = (req, res) => {
//     console.log(req.body);
//     data.push({
//         name: req.body.username,
//         email: req.body.email,
//         pass: req.body.password,
//         repass: req.body.repassword
//     })
//     res.redirect("/register")
    
// }


// app.get("/register", (req, res) => {
//     res.render("register")
// })

// app.post("/register", urlencoded, (req, res) => {
//     // res.json(req.body)
//     console.log(req.body);
// })