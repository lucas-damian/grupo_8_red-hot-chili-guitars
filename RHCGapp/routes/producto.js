var express = require('express');
var router = express.Router();
let uploadImages = require("../middlewares/uploadImages")
const {cargaProduc,listar,crear,store,produEdit,prodUpdate,borrar,search}= require("../controllers/productController");


router.get('/', cargaProduc);
router.post('/store',uploadImages.any(),store);


router.get('/list', listar);


router.get("/edit/:id", produEdit);
router.put("/update/:id",uploadImages.any(), prodUpdate);

router.delete('/delete/:id',borrar);


router.get('/search', search);


/*

router.get('/:id', produDetalle);
router.get('/:id/edit',produEdit); 

router.put('/:id/edit',produEdit);
router.delete('/:id/edit',borrar); */






module.exports = router;