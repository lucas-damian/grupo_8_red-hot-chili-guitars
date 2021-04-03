var express = require('express');
var router = express.Router();
const adminCheck = require('../../middlewares/adminCheck');
const userCheck = require('../../middlewares/userCheck');
const {listar, user ,userEdit,userDelete, userSearch} = require("../../controllers/masterController");


router.get("/", listar);
router.get("/user-data/:id", user);
router.put("/user-data/:id", userEdit);
router.delete("/delete/:id", userDelete);
router.get('/:busqueda', userSearch);





module.exports = router;