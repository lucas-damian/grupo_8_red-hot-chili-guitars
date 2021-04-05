module.exports = (req, res, next) => {
    
    /* res.send(req.session.user) */
if(req.session.user){
    if(req.session.user.rol == "master"){
        next();
    } else {

        res.redirect('/users');

    }
} else {
    res.redirect('/users');
}
    
        
}