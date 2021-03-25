const fs = require("fs");
const db = require("../database/models")

module.exports = {
    
    index: (req,res) =>{

      /*  let kits = JSON.parse(fs.readFileSync(Db_products,"utf-8"));*/
        res.render("index", {
            title: "Red Hot Chilli Guitars",
            /* kits */
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


