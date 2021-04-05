var express = require('express');
var router = express.Router();
const masterCheck = require('../../middlewares/masterCheck');
const {listar, user,userDelete, userSearch, userUpdate} = require("../../controllers/masterController");


router.get("/",masterCheck,listar);

router.get("/edit/:id", masterCheck,user);
router.put("/update/:id", userUpdate);

router.delete("/delete/:id", userDelete);

/* router.get('/:busqueda', userSearch); */





module.exports = router;