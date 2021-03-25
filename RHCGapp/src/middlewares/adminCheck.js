module.exports = (req, res, next) => {
    
    if(req.session.user.admin){
        next();
    }
        
    res.redirect('/')

}