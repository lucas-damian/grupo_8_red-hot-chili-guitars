const { validationResult } = require("express-validator");
const db = require("../database/models");
const {Op} = require('sequelize');
const bcrypt = require("bcrypt");

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
    
    userEdit:(req,res) => {

        const {id, name, email,pass,rol} = req.body
        

        db.Users.update({
            id: id.trim(),
            name: name.trim(),
            email: email.trim(),
            pass: bcrypt.hashSync(pass, 12),
            rol:rol.trim(),

        },{
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