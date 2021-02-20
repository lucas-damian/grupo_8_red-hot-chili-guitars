var express = require('express');
var router = express.Router();
const {cargaProduc,listar,formDirect,crear,produEdit,produDetalle}= require("../controllers/productController");


router.get('/', cargaProduc);

router.get('/create', listar);


/*router.post('/create',crear);

router.get('/:id', produDetalle);
router.get('/:id/edit',produEdit); 

router.put('/:id/edit',produEdit);
router.delete('/:id/edit',borrar); */






module.exports = router;