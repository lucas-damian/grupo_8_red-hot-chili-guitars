const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    cargaProduc:(req,res) =>{

        db.Categories.findAll()
            .then(categorias => res.render("admin/cargaProducto", {
                title: "cargando instrumento",
                categorias     
            }))
            .catch(error => res.send(error))
    },

    listar: (req,res) => {

       db.Products.findAll({
           include:[{association:"categorias"},
                    {association:"imagenes"}]
       })
        .then(productos => {
            /* res.send(productos) */
            res.render("admin/adminProducts",{
                title:"productos",
                productos:productos,
                msg: "Estos son tus instrumentos"
            })
        })
        .catch(error => res.send(error))

    },

        
    detailProduct : (req, res) => {

        db.Products.findOne({
            where:{
                id : req.params.id
            },
            include:[{association:"categorias"}]
            })
            .then( producto => {
           
                res.render("detalleProducto", {
                    title: "+ Info del producto",
                    producto
                })
            })
            .catch(error => res.send(error))

    },
   

    store: (req,res) => {

        const {tipo,modelo,marca,instrumento,categoria,valor,color} = req.body;

            db.Products.create({
                type:tipo,
                mark:marca,
                instrument:instrumento,
                id_category:categoria,
                model:modelo,
                price:valor,
                color:color
            })
            .then((newProduct) => {  
                db.Images.create({
                    name: (req.files[0]) ? req.files[0].filename : "default-image.png",
                    id_product: newProduct.id
                })
                .then(() => {
                    res.redirect("/products/admin/list")
                })
                .catch(error => res.send(error))

            })
            .catch(error => res.send(error))
       
    },


    produEdit: (req,res) => {

        let categorias = db.Categories.findAll();
        
        let producto = db.Products.findOne({
            where:{
                id: req.params.id
            }
        })

        Promise.all([categorias,producto])
            .then(([categorias,producto]) => {
                res.render("admin/editProducts",{
                    title: "editando instrumento",
                    producto,
                    categorias
                })
            })
    },

    prodUpdate: (req, res) => {

        const {tipo,modelo,marca,instrumento,categoria,valor,color} = req.body;

            db.Products.update({
                type:tipo.trim(),
                mark:marca.trim(),
                instrument:instrumento.trim(),
                id_category:categoria,
                model:modelo.trim(),
                price:valor.trim(),
                color:color.trim()
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(() => {
                res.redirect("/products/detalle-del-producto/"+req.params.id)
            })
            .catch(error => res.send(error))
            
    },

    
    borrar: (req,res) => {

        db.Images.destroy({
            where:{
                id_product:req.params.id
            }
        })
        .then( () => {
            
            db.Products.destroy({
                where:{
                    id:req.params.id
                }
            })
                .then(() => {
                    res.redirect("/products/admin/list")
                })
                .catch(error => res.send(error))
        })

        


    },
    
    
    
    
    search: (req,res) => {

        db.Products.findAll()
            .then()
            .catch(error => res.send(error))
      
    },
    
    
    listarUser: (req,res) => {
        res.render("userProducts",{
            title:"productos",
            productos:productos,
            msg: "Estos son tus instrumentos"
        });
    },
    
    searchUser: (req,res) => {
        const resultado = productos.filter( product => {
            return product.instrumento.toLowerCase().trim().includes(req.query.busqueda.toLowerCase().trim())
        });

        /* res.send(resultado); */
        res.render("userProducts",{
            title:"resultado de la búsqueda",
            productos:resultado,
        });
     }
     
}