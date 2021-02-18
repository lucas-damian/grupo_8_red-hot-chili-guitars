const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator")
const hash = require("bcrypt");

const users_db = JSON.parse(fs.readFileSync("./data/users.json","utf-8"));
module.exports = {

    processRegister: (req,res) => {

        let errores = validationResult(req);

        res.send(errores);

        const {userName,email,pass} = req.body;

        let lastID = 0;
        users_db.forEach( user => {
            if(user.id > lastID){
                lastID = user.id;
            }
        })

        let hashPass = hash.hashSync(pass,12);

        let newUser = {
            id : +lastID + 1,
            userName,
            email,
            pass: hashPass
        }

        users_db.push(newUser);

        fs.writeFileSync(path.join("./data/users.json"), JSON.stringify(users_db,null,2));
        res.redirect("users/log-in");
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