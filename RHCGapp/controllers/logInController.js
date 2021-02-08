module.exports = {
    logForm: (req,res) =>{
        res.render("logeo", {
            title: "logeo",
            css: "mobile.css",
            body: "style.css",
            detail: "detalleProducto.css"
        });
    }
}