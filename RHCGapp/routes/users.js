var express = require('express');
var router = express.Router();


const {processRegister,logIn,processLogin} = require("../controllers/logInController");
const registerValidation = require('../validations/registerValidation');



router.post('/log-in',processLogin);

router.post('/register',registerValidation, processRegister);

router.get('/', logIn);



module.exports = router;
