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

    formDirect: (req,res) => {

    },

    crear: (req,res) => {

    },

    produDetalle: (req,res) => {

    },

    produEdit: (req,res) => {

    },

    borrar: (req,res) => {

        let iDchosen = req.params.id;

 /*        let chosen =  */
    }




}