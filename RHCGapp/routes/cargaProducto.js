var express = require('express');
var router = express.Router();

const cargaProductoController = require("../controllers/cargaProductoController");
router.get('/', cargaProductoController.cargaProduc);
module.exports = router;