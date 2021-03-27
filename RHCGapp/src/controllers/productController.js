const { validationResult } = require("express-validator");
const db = require("../database/models");
const {Op} = require('sequelize');

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
        const error = validationResult(req)
        
        if(error.isEmpty()){
            db.Products.findAll({
                include:[{association:"categorias"},
                         {association:"imagenes"}],
                order:[["id","DESC"]]
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
        }else{
            res.send(error)
        }
      

    },

        
    detailProduct : (req, res) => {

        const error = validationResult(req)

        if(error.isEmpty()){

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
        
        }else{
            res.send(error)
        }
    },
   

    store: (req,res) => {

        const {tipo,modelo,marca,instrumento,categoria,valor,color,kit,description} = req.body;
        const error = validationResult(req)
            
        if(error.isEmpty()){

            db.Products.create({
                type:tipo,
                mark:marca,
                instrument:instrumento,
                id_category:categoria,
                model:modelo,
                price:valor,
                description,
                kit: kit.length != 0 ? "on" : "off" ,
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
        
        }else{
            /* res.send(error) */
            res.render("partials/error-msg",{
                errores:error
            })
            /* res.send(error.msg) */
        }
       
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

        const {tipo,modelo,marca,instrumento,categoria,valor,color,kit,description} = req.body;

            /* res.send(req.body) */
            db.Products.update({
                type:tipo.trim(),
                mark:marca.trim(),
                instrument:instrumento.trim(),
                id_category:categoria,
                model:modelo.trim(),
                description: description.trim(),
                kit:kit,
                price:valor.trim(),
                color:color.trim()
            },{
                where:{
                    id:req.params.id
                }
            })
            .then((product) => {
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
        let buscar = req.query.busqueda.toLowerCase();

        db.Products.findAll({
            where:{
                instrument:{
                    [Op.substring]:buscar
                }},
            })
            .then(productos => {
                /* res.send(productos) */
                res.render("listProducts",{
                    title:"productos",
                    productos:productos,
                    msg: "Estos son tus instrumentos"
                })
            })
            .catch(error => res.send(error))
      
    },
    
    
    listarUser: (req,res) => {
        res.render("userProducts",{
            title:"productos",
            productos:productos,
            msg: "Estos son tus instrumentos"
        });
    }/* ,
    
    searchUser: (req,res) => {
        const resultado = productos.filter( product => {
            return product.instrumento.toLowerCase().trim().includes(req.query.busqueda.toLowerCase().trim())
        });

        res.send(resultado);
        res.render("userProducts",{
            title:"resultado de la búsqueda",
            productos:resultado,
        });
     } */

     
}