module.exports = (req,res,next) => {
    if(req.cookies.userStar){
        req.session.user = req.cookies.userStar
    }
    next();
}