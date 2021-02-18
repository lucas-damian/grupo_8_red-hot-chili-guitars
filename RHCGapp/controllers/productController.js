const fs = require("fs");
const Db_products = require("../data/productos.json");

module.exports = {
    cargaProduc:(req,res) =>{
        res.render("cargaProducto", {
            title: "Producto",
        });
    },

    listar: (req,res) => {
       
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