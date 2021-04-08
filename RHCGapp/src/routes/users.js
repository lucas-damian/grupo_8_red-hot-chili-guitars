var express = require('express');
var router = express.Router();


const {processRegister,logIn,processLogin,profile,fatality} = require("../controllers/logInController");
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const userCheck = require("../middlewares/userCheck");
const cookieCheck = require("../middlewares/cookieCheck");


router.post('/log-in',loginValidation,cookieCheck,processLogin);

router.post('/register',registerValidation, processRegister);

router.get('/logout', fatality);

router.get('/', logIn);





module.exports = router;
