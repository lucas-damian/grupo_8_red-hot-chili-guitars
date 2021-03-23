const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({   
  
    destination: function(req, file, cb) { 
      /*   let categoria = req.body.categoria
        if(categoria.lenght !== 0){
            categoria = req.body.categoria
            cb(null, "public/img/instrumentos"+"/"+categoria); 
        } else { */
            
            
        cb(null, "public/img/instrumentos"); 
    
    }, filename: function (req, file, cb) { 
            cb(null , file.fieldname + "-" + Date.now() + path.extname(file.originalname));   
    }
    
});

const upload = multer({storage});

module.exports = upload;
