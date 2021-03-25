var express = require('express');
const { cookie } = require('express-validator');
var router = express.Router();

let {index, detailProduct, categoria} = require("../controllers/indexController");
const cookieCheck = require("../middlewares/cookieCheck");
const userCheck = require("../middlewares/userCheck");



/* GET home page. */
router.get('/', cookieCheck ,index);
router.get('/categoria/:instrumento', categoria)


module.exports = router;
