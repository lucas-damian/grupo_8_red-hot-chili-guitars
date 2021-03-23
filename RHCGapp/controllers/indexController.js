const fs = require("fs");
const Db_productsKits = "./data/productos_kits.json";
const Db_products = "./data/productos.json";
const productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));
const db = require("../database/models")

module.exports = {
    
    index: (req,res) =>{

       let kits = JSON.parse(fs.readFileSync(Db_products,"utf-8"));


        res.render("index", {
            title: "Red Hot Chilli Guitars",
            kits
        });
    },
    
    carrito: (req, res) => {
        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("carrito", {
            title: "tu carrito",
            producto
        })
    },
    
    categoria : (req, res) => {
        db.Category.findAll({
            include:[{association:"productos"}],
            where:{
                name: req.params.instrumento 
            }
        })
            .then(category => {
                /* res.send(req.params.instrumento) */
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    categoria: category
                })
            })
            .catch(error => res.send(error))
    },
    
    listar : (req, res) => {

        db.Product.findAll({
            include:[{association:"categorias"}]
        })
            .then( productos => {
                
                res.render('listProducts',{
                    title: 'productos',
                    productos: productos,
                    msg: 'Estos son tus instrumentos'
                    })
            
            })
            .catch(error => res.send(error))

       
    },
   
}