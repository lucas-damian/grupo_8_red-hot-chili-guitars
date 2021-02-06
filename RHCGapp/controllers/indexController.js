module.exports = {
    index: (req,res) =>{
        res.render("index", {
            title: "home",
            css: "mobile.css",
            body: "style.css"
        });
    },
    detalleProducto: (req, res)=>{
        res.render("detalleProducto",{
            title: "detalle-del-producto",
            css: "mobile.css",
            body: "style.css",
            detail: "detalleProducto.css"
        })
    }
}