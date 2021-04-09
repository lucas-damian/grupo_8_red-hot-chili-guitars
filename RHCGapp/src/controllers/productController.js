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

           /*  const pageAsNumber = Number.parseInt(req.query.page)
            const sizeAsNumber = Number.parseInt(req.query.size)


            let page = 0
            if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
                page = pageAsNumber;
            }

            let size = 6;
            if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 6){
                size = sizeAsNumber
            } */
            
            db.Products.findAll({
                include:[{association:"categorias"},
                         {association:"imagenes"}],
                order:[["id","DESC"]],
             /*    limit:size,
                offset: page * size */
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
                include:[{association:"categorias"},
                         {association:"imagenes"}]
                })
                .then( producto => {
                    /* res.send(producto) */
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
                kit: kit ? "on" : null ,
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
                kit:kit != "on" ? "off" : "on",
                price:valor.trim(),
                color:color.trim()
            },{
                where:{
                    id:req.params.id
                }
            })
            .then((product) => {  

                db.Products.findOne({
                    where:{
                        id: req.params.id
                    },
                    include:[{association:"imagenes"}]
                })
                    .then(product => {
                        /* res.send(product) */
                        /* res.send(req.files) */
                        db.Images.update({
                            name: req.files[0] ? req.files[0].filename : product.imagenes[0].name,
                            id_product: product.id
                        },
                        {
                            where:{
                                id:req.params.id
                            }
                        })

                        .then(() => {
                    
                            res.redirect("/products/detalle-del-producto/"+req.params.id)
                        })
                        .catch(error => res.send(error))
                    })

            })
            .catch(error => res.send(error))
           
            /* .then((product) => {
                res.redirect("/products/detalle-del-producto/"+req.params.id)
            })
            .catch(error => res.send(error)) */
            
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
        let buscar = req.query.busqueda.toLowerCase().trim();

       
        let productos = db.Products.findAll({
            where:{
                [Op.or]:[
                    
                    {instrument:{[Op.like]:`%${buscar}%`}},
                    {mark:{[Op.like]:`%${buscar}%`}}
                    
                ]
            },
                include:[{association:"categorias"},
                         {association:"imagenes"}]
            })
            
        let categorias = db.Categories.findOne({
            where:{
                name:{[Op.like]:`%${buscar}%`}
            }
        })
            
            Promise.all([productos, categorias])
                .then(([productos, categorias]) => {

                    /* res.send(productos) */
                    
                    res.render("admin/adminProducts",{
                        title:"productos",
                        productos:productos,
                        categorias,
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
    }
     
}


/* 
agregar muchas imagenes

addImg: (req, res) => {
        let imagen;
        let imagenes = [];
        for (let i = 0; i < req.files.length; i++) {
            imagen = {
                archivo: req.files[i].filename,
                autoId: +req.params.id
            }
            imagenes.push(imagen)
        }
        db.Imagen.bulkCreate(imagenes, {validate : true})
            .then(() => res.redirect('/cars/show/' + req.params.id))
            .catch(error => res.send(error))
    },


*/