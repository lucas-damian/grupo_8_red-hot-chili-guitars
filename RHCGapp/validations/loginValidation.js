const {check, body} = require("express-validator");
const fs = require("fs");
const userRout = "./data/users.json"
const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8"));


module.exports =[
    
]