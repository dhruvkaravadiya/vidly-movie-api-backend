function admin(req,res,next){
    // this middleware will be executed after auth middleware
    if(!req.user.isAdmin){
        console.log(req.user);
        return res.status(403).send(req.user.isAdmin);
    }
    next();
}
module.exports = admin;