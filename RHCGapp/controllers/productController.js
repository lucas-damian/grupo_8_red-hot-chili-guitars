const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    cargaProduc:(req,res) =>{

        db.Category.findAll()
            .then(categorias => res.render("admin/cargaProducto", {
                title: "cargando instrumento",
                categorias     
            }))
            .catch(error => res.send(error))
    },

    listar: (req,res) => {

       db.Product.findAll({
           include:[{association:"categorias"}]
       })
        .then(productos => {
            
            res.render("admin/adminProducts",{
                title:"productos",
                productos:productos,
                msg: "Estos son tus instrumentos"
            })
        })
        .catch(error => res.send(error))

    },

        
    detailProduct : (req, res) => {

        db.Product.findOne({
            where:{
                id : req.params.id
            },
            include:[{association:"categorias"}]
            })
            .then( producto => {
           
                res.render("/products/detalleProducto", {
                    title: "+ Info del producto",
                    producto
                })
            })
            .catch(error => res.send(error))

    },
   

    store: (req,res) => {

        const {tipo,modelo,marca,instrumento,categoria,valor,color} = req.body;
        const img = req.files[0].filename; 

            db.Product.create({
                type:tipo,
                mark:marca,
                instrument:instrumento,
                id_category:categoria,
                model:modelo,
                price:valor,
                color:color
            })
            .then(() => res.redirect("/")) 
       
    },


    produEdit: (req,res) => {

        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("admin/editProducts", {
            title: "editando instrumento",
            producto
        })
        
    },

    prodUpdate: (req, res) => {
        
        const {tipo, marca,instrumento,categoria, modelo, color, valor, file} = req.body

       productos.forEach( producto => {
        
        if(producto.id === +req.params.id){
           
            producto.id = Number(req.params.id);
            producto.tipo = tipo;
            producto.marca = marca;
            producto.categoria = categoria;
            producto.instrumento = instrumento;
            producto.modelo = modelo;
            producto.color = color;
            producto.valor = valor;
            producto.file = file;

         }
       });
        
       fs.writeFileSync(path.join(Db_products), JSON.stringify(productos,null,2));

       res.redirect("/products/admin/list");
    },

    
    borrar: (req,res) => {

        productos.forEach( producto => {
            if(producto.id === +req.params.id){
                let aEliminar = productos.indexOf(producto);
                productos.splice(aEliminar,1);
            }
        })
        
        fs.writeFileSync(path.join(Db_products), JSON.stringify(productos,null,2));

       res.redirect("/products/admin/list");
    },
    
    
    
    
    search: (req,res) => {
        const resultado = productos.filter( product => {
            return product.instrumento.toLowerCase().trim().includes(req.query.busqueda.toLowerCase().trim())
        });

        /* res.send(resultado); */
        res.render("admin/adminProducts",{
            title:"resultado de la búsqueda",
            productos:resultado,
            msg: "Resultados de la búsqueda"

        });
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