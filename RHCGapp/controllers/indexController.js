module.exports = {
    index: (req,res) =>{
        res.render("index", {
            title: "home",
            css: "mobile.css",
            body: "style.css"
        });
    }
}