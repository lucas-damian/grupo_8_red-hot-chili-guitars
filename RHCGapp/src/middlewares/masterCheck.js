module.exports = (req, res, next) => {
    
    if(req.session.user == 'master'){
        next();
    }
        
    res.redirect('/users')

}