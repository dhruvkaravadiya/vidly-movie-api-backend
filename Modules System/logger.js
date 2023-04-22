//if var url not exported  , it will become private , 
//i.e. its scope is till this module logger.js
var url = "https://dhruvk-image-generator.netlify.com";
//module.exports.endPoint = url;

function log(message){
    console.log(message);
}
//exports the whole 'log' object
module.exports.log = log;

//exports only 'log' function
module.exports = log

//not necessary to export all things inside of a module , 
//but can export all if needed
//--------------------------------------------------------


