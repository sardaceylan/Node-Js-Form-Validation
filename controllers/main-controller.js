exports.getForm = (req, res, next) => {
    res.render("index", {
        title: "Homepage"
    });
    res.redirect("/");
};

exports.postForm = (req, res) => {
    console.log(req);
}