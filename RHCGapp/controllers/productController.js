const fs = require("fs");
const Db_products = "./data/productos.json";
const productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));

module.exports = {
    cargaProduc:(req,res) =>{
        res.render("cargaProducto", {
            title: "cargando instrumento",
           
        });
    },

    listar: (req,res) => {
       res.render("adminProducts",{
           title:"productos",
           productos:productos,
           msg: "Estos son tus instrumentos"
       });
    },

    search: (req,res) => {
        const resultado = productos.filter( product => {
            return product.nombre.includes(req.query.busqueda)
        });

        /* res.send(resultado); */
        res.render("adminProducts",{
            title:"resultado de la búsqueda",
            productos:resultado,
            msg: "Resultados de la búsqueda"

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