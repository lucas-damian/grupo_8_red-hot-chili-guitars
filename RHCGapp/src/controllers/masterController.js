const { validationResult } = require("express-validator");
const db = require("../database/models");
const {Op} = require('sequelize');
const bcrypt = require("bcrypt");


/* 

MASTER 

email: master@gmail.com
pass: master123


*/


module.exports = {
    listar:(req,res) => {
        db.Users.findAll()
            .then( users => {
                /* res.send(users) */
                res.render("admin/masterUsers", {
                    title:"users",
                    msg:"lista de usuarios",
                    users
                })
            })
            .catch(error => res.send(error))
    }, 
    
    user:(req,res) =>{
        db.Users.findOne({
            where:{
                id: req.params.id
            }
        })
            .then( user => {
                /* res.send(user) */
                res.render("admin/masterEdit",{
                    title: "editando usuarios",
                    user
                })
            })
            .catch(error => res.send(error))
    },

    
    userUpdate:(req,res) => {

        
        const {userName, email,pass,rol} = req.body;
        
        /* res.send(req.body) */
        
        db.Users.update({
            
            name: userName.trim(),
            email: email.trim(),
            pass: bcrypt.hashSync(pass, 12),
            rol:rol == "on" ? "admin" : "user",

        },
        {
            where:{
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect("/master")
            })
            .catch(error => res.send(error))

    },

    userDelete: (req,res) =>{
        db.Users.destroy({
            where:{
                id: req.params.id
            }
        })
            .then( user => {
                res.redirect("/master")
            })
            .catch(error => res.send(error))

    }, 

    userSearch: (req,res) =>{

    }
}