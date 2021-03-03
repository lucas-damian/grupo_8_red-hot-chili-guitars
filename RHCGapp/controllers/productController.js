const fs = require("fs");
const Db_products = "./data/productos.json";
const path = require("path");
const productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));

module.exports = {
    cargaProduc:(req,res) =>{
        res.render("admin/cargaProducto", {
            title: "cargando instrumento"
           
        });
    },

    listar: (req,res) => {
       res.render("admin/adminProducts",{
           title:"productos",
           productos:productos,
           msg: "Estos son tus instrumentos"
       });
    },

   

    store: (req,res) => {
        const {tipo,modelo,marca,instrumento,categoria,valor,color} = req.body;
        const img = req.files[0].filename; 

/*         let img;
        if(categoria.length !== 0){
            img = categoria + req.files[0].filename;

        } else {
            img = req.files[0].filename; 
        } */

        let lastId = 0;
        
        productos.forEach( product => {
            if(product.id> lastId){
                lastId = product.id;
            }
        })

        const newProduct = {
            id: +lastId + 1,
            tipo,
            marca,
            instrumento,
            categoria,
            modelo,
            valor,
            color,
            img
        }

        productos.push(newProduct);
        fs.writeFileSync(path.join(Db_products), JSON.stringify(productos,null,2));


        res.redirect("products/admin/list")
    },


    produEdit: (req,res) => {

        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("admin/editProduct", {
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

       res.redirect("/products/list");
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
            msg: "Resultados de la búsqueda"

        });
     },
     detailProduct : (req, res) => {
         
        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("detalleProducto", {
            title: "+ Info del producto",
            producto
        })
     }
}