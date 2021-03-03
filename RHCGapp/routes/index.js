var express = require('express');
var router = express.Router();

let indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.index);
/* router.get('/detalle-del-producto', indexController.detalleProducto); */
router.get('/detalle-del-producto/:id', indexController.detailProduct);
router.get('/categoria/:instrumento', indexController.categoria)


module.exports = router;
