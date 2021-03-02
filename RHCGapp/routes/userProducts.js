var express = require('express');
var router = express.Router();
const {listarUser,searchUser, detailProduct}= require('../controllers/productController');


router.get('/productos', listarUser)
router.get('/productos/:id', detailProduct)

router.get('/search' , searchUser);




module.exports = router;