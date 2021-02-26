const {check, body} = require("express-validator");
const fs = require("fs");
const userRout = "./data/users.json"
const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8"));

module.exports = [
    body("userName")
    .isLength({
        min:1
    }).withMessage("debes ingresar un usuario"),

   check("email")
   .isEmail().withMessage("el email es requerido"),


   body("email")
   .custom(value => {
       let result = users_db.find( user => {
            return user.email === value;
       });

       if(result){
           return false
       } else {
           return true
       }
   }).withMessage("el email, ya se encuentra registrado"),


   check("pass")
   .isLength({
       min: 3,
       max: 6
   }).withMessage("la contraseña debe tener, mínimo 3 y maximo 6 caracteres "),

   body("pass2")
   .custom((value,{req}) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
   }).withMessage("las contraseñas no coinciden"),

]