const jwt = require('jsonwebtoken');
const config = require('config');
function auth(req,res,next){
    //get token from the req.header() method and specify the header
    const token = req.header('x-auth-token');
    //if no token
    if(!token){
       return res.status(401).send('Access Denied. No Token Provided')
    }
    try{
        //if token exist, verify its a valid token using jwt module
        //.verify() will take first argument token , and second argument
        //will be the private key required to decode the json web token
        //as we stored private key in environment variable , so import config module too
        //decoded will get the decoded payload from jwt if verified successfull 
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch(ex){
        res.status(400).send('Invalid Token');
    }
}

module.exports = auth;