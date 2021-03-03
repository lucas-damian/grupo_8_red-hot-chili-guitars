const fs = require("fs");
const Db_productsKits = "./data/productos_kits.json";
const Db_products = "./data/productos.json";
const productos = JSON.parse(fs.readFileSync(Db_products,"utf-8"));
module.exports = {
    index: (req,res) =>{

       let kits = JSON.parse(fs.readFileSync(Db_products,"utf-8"));


        res.render("index", {
            title: "home",
            kits
        });
    },
    detailProduct : (req, res) => {
         
        let producto = productos.find( producto => producto.id === +req.params.id);


        res.render("detalleProducto", {
            title: "+ Info del producto",
            producto
        })
    },
    carrito: (req, res) => {
        let producto = productos.find( producto => producto.id === +req.params.id);

        res.render("carrito", {
            title: "tu carrito",
            producto
        })
    },
    categoria : (req, res) => {

        let producto = productos.filter( producto => producto.categoria === req.params.instrumento);

        switch(true){
            case req.url == "/categoria/cuerdas":
                producto
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    producto
                })
            break;
            case req.url == "/categoria/pianos":
                producto                
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    producto
                })
            break;
            case req.url == "/categoria/baterias":
                producto 
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    producto
                })
            break;
            case req.url == "/categoria/vientos":
                producto
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    producto
                })
            break;
            case req.url == "/categoria/accesorios":
                producto 
                res.render('produCategorias',{
                    title:"estos son los instrumenos en stock",
                    producto
                })
            break;

        }
    },
    listar : (req, res) => {
        res.render('listProducts',{
            title: 'productos',
            productos: productos,
            msg: 'Estos son tus instrumentos'
        })
    },
   
   

     

}
