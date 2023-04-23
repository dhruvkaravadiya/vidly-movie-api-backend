//OS Module
const os = require('os');
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log("Total Memory : "+totalMemory)
console.log("Free Memory : "+freeMemory)
//ECMAScript / ES6 / Template String
console.log(`Total Memory : ${totalMemory}`)
console.log(`Free Memory : ${freeMemory}`)