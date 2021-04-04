const {check, body} = require("express-validator");
const db = require("../database/models")

module.exports = [
    check("userName")
    .notEmpty().withMessage("debes ingresar un usuario"),


   check("email")
   .isEmail().withMessage("el email es requerido"),
   


   body("email") 
   .custom(value => {
      
        return db.Users.findOne({
            where: {
                email : value
            }
        })
        .then(user =>{
            if(user){
                return Promise.reject("el email ya esta registrado")
            }
        })
      
   }),

   check("pass")
    .notEmpty().withMessage("Es necesario una contraseña"),
    
    check("pass")
        .isLength({
            min: 3,
            max: 10,
        }).withMessage("Minimo 3 caracteres y máximo 6 caracteres"),
   

   body("pass2")
    .custom((value,{req}) => {
            if(value !== req.body.pass){
                return false
            }else{
                return true
            }
    }).withMessage("las contraseñas no coinciden"),

    ]