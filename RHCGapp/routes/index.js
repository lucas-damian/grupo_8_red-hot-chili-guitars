var express = require('express');
const { cookie } = require('express-validator');
var router = express.Router();

let indexController = require("../controllers/indexController");
const cookieCheck = require("../middlewares/cookieCheck");

/* GET home page. */
router.get('/', cookieCheck ,indexController.index);
/* router.get('/detalle-del-producto', indexController.detalleProducto); */
router.get('/detalle-del-producto/:id', indexController.detailProduct);
router.get('/categoria/:instrumento', indexController.categoria)


module.exports = router;
