const fs = require("fs");
const Db_products = "./data/productos.json";

module.exports = {
    cargaProduc:(req,res) =>{
        res.render("cargaProducto", {
            title: "cargando instrumento",
        });
    },

    listar: (req,res) => {
       let productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));
     
       res.render("adminProducts",{
           title:"productos",
           productos:productos
       });
    },
    
    crear: (req,res) => {

        res.send(req.body);



        res.redirect("/products/create")
    },

    produEdit: (req,res) => {

    },

    borrar: (req,res) => {

        let iDchosen = req.params.id;

 /*        let chosen =  */
    }




}