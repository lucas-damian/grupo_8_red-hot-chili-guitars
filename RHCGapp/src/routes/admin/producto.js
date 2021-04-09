var express = require('express');
var router = express.Router();
let uploadImages = require("../../middlewares/uploadImages")
const {cargaProduc,listar,store,produEdit,prodUpdate,borrar,search,detailProduct}= require('../../controllers/productController');
const adminCheck = require('../../middlewares/adminCheck');
const uploadCheck = require("../../validations/uploadValidation");
const masterCheck = require('../../middlewares/masterCheck');


/// /products

router.get('/',adminCheck,cargaProduc);
router.post('/store',uploadImages.any(), uploadCheck,store);


router.get('/admin/list', adminCheck, listar);
router.get('/detalle-del-producto/:id',detailProduct);


router.get("/edit/:id",adminCheck , produEdit);
router.put("/update/:id",uploadImages.any(), prodUpdate);

router.delete('/delete/:id',borrar);


router.get('/:busqueda' ,search);



module.exports = router;