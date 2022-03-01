const Registry = require("../models/registry")

exports.getIndex = (req, res) => {
    res.render("index")
}

exports.getRegister = (req, res) => {
    res.render("register")
    const register = Registry.getAll()
}

exports.postRegister = (req,res) => {
    // console.log(req.body)
    const registry = new Registry()
    registry.username = req.body.username
    registry.email = req.body.email
    registry.password = req.body.password
    registry.repassword = req.body.repassword

    registry.save()
    Registry.getAll()
    .then(()=>{
        res.redirect("/register")
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
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