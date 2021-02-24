const fs = require("fs");
const Db_products = "./data/productos_kits.json";

module.exports = {
    index: (req,res) =>{

       let kits = JSON.parse(fs.readFileSync(Db_products,"utf-8"));


        res.render("index", {
            title: "home",
            kits
        });
    },
    detalleProducto: (req, res)=>{
        res.render("detalleProducto",{
            title: "detalle-del-producto",

        })
    }
}