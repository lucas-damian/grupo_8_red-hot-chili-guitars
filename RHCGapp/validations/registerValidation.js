const {check, body} = require("express-validator");

module.exports = [
   check("userName")
   .isEmpty().withMessage("el nombre de usuario es requerido"),

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
   }).withMessage("la contraseña debe tener mínimo 3 caracteres y maximo 6"),

   body("pass2")
   .custom((value,req) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
   }).withMessage("las contraseñas no coinciden"),

]