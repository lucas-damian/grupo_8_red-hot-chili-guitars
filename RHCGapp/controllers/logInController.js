const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator")
const userRout = "./data/users.json"
const bcrypt = require("bcrypt");
const { setUsers } = require("../data/users");
const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8"));

/* const {getUsers, setUsers} = require(path.join('..', 'data', 'users')) */

module.exports = {

    processRegister: (req,res) => {

        let errores = validationResult(req);

       
        if(!errores.isEmpty()){
            
           res.render("logeo",{
               title:"login page",
                errores: errores.errors
           })
       } else {
        
        const{userName,email,pass} = req.body;

       let lastID = 0;
       users_db.forEach(user => {
           if(user.id > lastID){
               lastID = user.id;
           }
       });

       let hashPass = bcrypt.hashSync(pass.Trim(),12);


       let newUser = {
           id: +lastID + 1,
           userName : username.Trim(),
           email,
           pass: hashPass
       }
  
      
       users_db.push(newUser);

       setUsers(users);

       res.redirect('/logeo')
       
       fs.writeFileSync(path.join("./data/users.json"), JSON.stringify(users_db,null,2),"utf-8");
 
       return res.redirect("/users");
    
    }

    },

    logIn:(req,res) => {
        res.render("logeo", {
            title: "ingresando"
        });
    },

    processLogin: (req,res) => {
        res.send(req.body);
    }
}