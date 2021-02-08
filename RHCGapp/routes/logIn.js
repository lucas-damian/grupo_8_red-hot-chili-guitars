var express = require('express');
var router = express.Router();


const logInController = require("../controllers/logInController");

router.get('/', logInController.logForm);

module.exports = router;