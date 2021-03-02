const fs = require("fs");
const Db_products = "./data/productos_kits.json";
const productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));
module.exports = {
    index: (req,res) =>{

       let kits = JSON.parse(fs.readFileSync(Db_products,"utf-8"));


        res.render("index", {
            title: "home",
            kits
        });
    },
    detailProduct : (req, res) => {
         
        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("detalleProducto", {
            title: "+ Info del producto",
            producto
        })
     }
}