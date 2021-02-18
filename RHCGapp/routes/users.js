var express = require('express');
var router = express.Router();


const {processRegister,logIn,processLogin} = require("../controllers/logInController");
const registerValidation = require('../validations/registerValidation');

router.get('/', logIn);
router.post('/login',processLogin);


router.post('/register',registerValidation, processRegister);




module.exports = router;
