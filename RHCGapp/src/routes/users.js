var express = require('express');
var router = express.Router();


const {processRegister,logIn,processLogin,profile,fatality} = require("../controllers/logInController");
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const userCheck = require("../middlewares/userCheck");



router.post('/log-in',loginValidation,processLogin);

router.post('/register',registerValidation, processRegister);

router.get('/logout', fatality);

router.get('/', logIn);





module.exports = router;
