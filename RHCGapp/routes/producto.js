var express = require('express');
var router = express.Router();
let uploadImages = require("../middlewares/uploadImages")
const {cargaProduc,listar,formDirect,crear,produEdit,produDetalle,search}= require("../controllers/productController");


router.get('/', cargaProduc);

router.get('/create', listar);
router.get('/search', search);
router.post('/create',uploadImages.any(),crear);


/*

router.get('/:id', produDetalle);
router.get('/:id/edit',produEdit); 

router.put('/:id/edit',produEdit);
router.delete('/:id/edit',borrar); */






module.exports = router;