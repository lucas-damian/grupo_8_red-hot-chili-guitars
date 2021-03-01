const {check, body} = require("express-validator");
const fs = require("fs");
const userRout = "./data/users.json"
const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8"));


module.exports =[

    check("userName")
    .notEmpty().withMessage("debes ingresar un usuario"),

    check('email')
    .notEmpty()
    .withMessage('debes ingresar un email'),

    check('pass')
    .notEmpty()
    .withMessage('debes ingresar una contraseña')
]