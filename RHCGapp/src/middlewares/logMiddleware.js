const fs = require("fs")

module.exports = (req, res, next) => {
    fs.writeFileSync("logs/userLogs.txt", "El usuario ingreso a la ruta: " + req.url);
    
    next();
}