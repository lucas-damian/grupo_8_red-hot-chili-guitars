const {check, body} = require("express-validator");
const fs = require("fs");

module.exports = [
    check("instrumento")
        .notEmpty().withMessage("debes seleccionar un instrumento"),

    check("categoria")
        .notEmpty().withMessage("debes seleccionar una categoria"),

    check("valor")
        .isLength({
            min: 3,
        }).withMessage("debes agregar un valor"),

   /*  body("file")
        .custom( value => {
            if(value.length === 0){
                return value = "default";
            }
        }) */
]