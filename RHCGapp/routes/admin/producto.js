var express = require('express');
var router = express.Router();
let uploadImages = require("../../middlewares/uploadImages")
const {cargaProduc,listar,crear,store,produEdit,prodUpdate,borrar,search}= require('../../controllers/productController');
const adminCheck = require('../../middlewares/adminCheck') 
const uploadCheck = require("../../validations/uploadValidation");




router.get('/', cargaProduc);
router.post('/store',uploadImages.any(), uploadCheck,store);


router.get('/admin/list', listar);


router.get("/edit/:id", adminCheck , produEdit);
router.put("/update/:id",uploadImages.any(), prodUpdate);

router.delete('/delete/:id',borrar);


router.get('/admin/search' , adminCheck, search);




/* router.get('/:id', produDetalle);
router.get('/:id/edit',produEdit); 

router.put('/:id/edit',produEdit);
router.delete('/:id/edit',borrar);

 */




module.exports = router;