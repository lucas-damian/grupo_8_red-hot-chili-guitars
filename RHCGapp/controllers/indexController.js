module.exports = {
    index: (req,res) =>{
        res.render("index", {
            title: "home",


        });
    },
    detalleProducto: (req, res)=>{
        res.render("detalleProducto",{
            title: "detalle-del-producto",

        })
    }
}