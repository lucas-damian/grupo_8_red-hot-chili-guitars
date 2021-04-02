const fs = require("fs");
const db = require("../database/models")

module.exports = {

    
    index: (req,res) =>{
        db.Products.findAll({
            where:{
                kit: "on"
            },
            include:[{association:"categorias"},
                       {association:"imagenes"}]
        })
           .then( kits => {
               
               /* res.send(kits) */
               res.render("index",{
                   title:"Red Hot Chili Guitars",
                   kits
               })
           })
           .catch(error => res.send(error))
    },
    
    carrito: (req, res) => {
        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("carrito", {
            title: "tu carrito",
            producto
        })
    },
    
    categoria : (req, res) => {
        
        db.Categories.findAll({
            where:{
                name:req.params.instrumento
            },
            include: [{association: 'productos',
                include: [{association: 'imagenes'}]
        }]
        })
            .then( categorias => {
                /* res.send(categorias) */
                res.render("produCategorias",{
                    title:"categorias",
                    categorias
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


