var express = require('express');
var router = express.Router();
let uploadImages = require("/Users/gabkr/OneDrive/Escritorio/comision 04/final_proyect/grupo_8_red-hot-chili-guitars/RHCGapp/middlewares/uploadImages")
const {cargaProduc,listar,crear,store,produEdit,prodUpdate,borrar,search}= require("/Users/gabkr/OneDrive/Escritorio/comision 04/final_proyect/grupo_8_red-hot-chili-guitars/RHCGapp/controllers/productController");


router.get('/', cargaProduc);
router.post('/store',uploadImages.any(),store);


router.get('/admin/list', listar);


router.get("/edit/:id", produEdit);
router.put("/update/:id",uploadImages.any(), prodUpdate);

router.delete('/delete/:id',borrar);


router.get('/admin/search', search);


/*

router.get('/:id', produDetalle);
router.get('/:id/edit',produEdit); 

router.put('/:id/edit',produEdit);
router.delete('/:id/edit',borrar); */






module.exports = router;