const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator")
const userRout = "./data/users.json"
const bcrypt = require("bcrypt");
const { setUsers } = require("../data/users");
/* const users_db = JSON.parse(fs.readFileSync(userRout,"utf-8")); */
const db = require("../database/models")
/* const {getUsers, setUsers} = require(path.join('..', 'data', 'users'))  */


module.exports = {

    logIn:(req,res) => {

        res.render("logeo", {
            title: "ingresando"
        });
    },

    processRegister: (req,res) => {

        let errores = validationResult(req);


        if(errores.isEmpty()){

            const {userName, email, pass} = req.body

            
           
            db.Users.create({
                name: userName.trim(),
                email,
                password : bcrypt.hashSync(pass, 12), 
            })
            .then(() =>res.redirect('/users'))
            .catch(error => res.send(error))
            
        }else{
                
                return res.render('logeo',{
                    title:"login page",
                    errores : errores.errors,
                    old : req.body
            })
        }
    },


    processLogin: (req,res) => {
        let errores = validationResult(req);
        
        if(errores.isEmpty()){
            const { email, password, recordar} = req.body;

            return db.Users.findOne({
                where : {
                    email
                }
            })
            .then(result => {
                
                if(result && bcrypt.compareSync(password, result.password)){
                  
                    req.session.user = {
                        id : result.id,
                        name : result.email,
                        rol: result.rol
                    }
                    if(recordar){
                        res.cookie('userStar', req.session.user, {
                            maxAge : 1000 * 60
                        })
                    }
                   
                    return res.redirect('/users/profile')
                
                }else {
                    res.render('logeo',{
                        title: "logueo",
                        errores: "contraseña inválida"
                    })
                }
            })
        } else {
            res.render('logeo',{
                title: "logueo",
                errores: errores.errors
            })
        }

    /* 
     let errores = validationResult(req);
  
        if(!errores.isEmpty()){
            res.render('logeo',{
                title: "logueo",
                errores: errores.errors
            })
        } else {
            
          const { userEmail, pass, recordar} = req.body;

          
           
            db.Users.findOne({
                where: {
                    userEmail
                }
            })
            .then(result => {
                if(bcrypt.compareSync(password.trim(), result.pass.trim())){

                    req.session.user = {
                        id : result.id,
                        email : result.userEmail,
                       /*  rol */
                    /*}
                    if(recordar){
                        res.cookie('userStar', req.session.user, {
                            maxAge : 1000 * 60
                        })
                    }   
                    res.send(req.body)
                    return res.redirect("/users/profile")

                }else{

                    res.render('logeo', {    
                        title: "logueo",                  
                        errores: "contraseña inválida",
                        
                    })
            
                }
            })
        } */ 

    }, 

    profile:(req,res) => {
        res.redirect("/");
    },
    
 
    fatality: (req, res) => {
        
        req.session.destroy();
        
        if(req.cookies.userStar){
            
            res.cookie('userStar','',{
                maxAge : -1
            })
        }
        
        res.redirect("/")
    }
} 