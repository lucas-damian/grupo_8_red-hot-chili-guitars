const {check, body} = require("express-validator");
/* const fs = require("fs");
const userRout = "./data/users.json"
const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8"));
 */

module.exports =[

    check("userEmail")
    .isEmail().withMessage("credenciales inválidas"),

    check('password')
    .notEmpty()
    .withMessage('debes ingresar una contraseña'),
]