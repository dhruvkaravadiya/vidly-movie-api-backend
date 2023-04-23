//file system module
const fs = require('fs')
//fs is object
//here we used synchroneous mothod .readdirSync , but always async method
const files = fs.readdirSync('/');

console.log(files);

fs.readdir('./',function(err,files){
    if(err == true){
        console.log("Error : "+err)
    }
    else{
        console.log("Files : "+files)
    }
})