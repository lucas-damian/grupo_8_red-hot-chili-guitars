module.exports = {
    cargaProduc:(req,res) =>{
        res.render("cargaProducto", {
            title: "Producto",
            css: "mobile.css",
            body: "style.css",
            detail: "detalleProducto.css"
        });
    }

}