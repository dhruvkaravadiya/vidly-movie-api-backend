var message = "Message From App.js";
//Cannot find global object's message variable as its not added to global 
//object in node,the variable message is only scoped till this module/file
console.log("Global Object message : "+global.message);
//this will work
console.log("Simple var print : "+message)
//print 'module' object
console.log(module)
//---------------------------------------------------------

//using log function from logger.js
//-require() function takes module path as argument 
//-and returns an object which is exported from the target module
var logger = require('./logger');
//logging logger object using console object
console.log(logger);
console.log("Message from console object")
//logging logger object using logger object
logger.log(logger);
logger.log("Message from logger object")
//-------------------------------------------------------------

//to print module warpper function 
//var c=;
//console.log(c) at the first line of .js file
//arguments of module wrapper function : exports,require,module,__filename,__dirname
console.log(__filename);
console.log(__dirname);
