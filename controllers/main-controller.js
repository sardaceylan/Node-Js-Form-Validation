const Registry = require("../models/registry")

exports.getIndex = (req, res) => {
    res.render("index")
}

exports.getRegister = (req, res) => {
    res.render("register")
}

exports.postRegister = (req,res) => {
    // console.log(req.body)
    const registry = new Registry()
    registry.name = req.body.username
    registry.email = req.body.email
    registry.pass = req.body.pass
    registry.repass = req.body.repass

    registry.save()
    console.log(Registry.getAll());
    
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