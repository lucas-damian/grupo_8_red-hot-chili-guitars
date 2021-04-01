const multer = require("multer");
const path = require("path");
const db = require("../database/models");

const storage = multer.diskStorage({  
  
    destination: function(req, file, cb) { 

                
            cb(null, "../public/img/instrumentos/"); 
        
    
    }, filename: function (req, file, cb) { 
            
            cb(null , file.fieldname + "-" + Date.now() + path.extname(file.originalname));   
    }
    
});

const upload = multer({storage:storage})/* .array("files",3); */

module.exports = upload;
