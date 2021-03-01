var express = require('express');
var router = express.Router();


const {processRegister,logIn,processLogin} = require("../controllers/logInController");
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');



router.post('/log-in',loginValidation ,processLogin);

router.post('/register',registerValidation, processRegister);

router.post('/logout', )

router.get('/', logIn);



module.exports = router;
