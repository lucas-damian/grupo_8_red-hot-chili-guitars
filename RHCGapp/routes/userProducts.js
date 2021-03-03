var express = require('express');
var router = express.Router();
const {listarUser,searchUser}= require('../controllers/productController');


router.get('/productos', listarUser)

router.get('/search' , searchUser);





module.exports = router;