//Events Module

//here we get class EventEmitter
const EventEmitter = require('events');
//emitter is the object
const emitter = new EventEmitter();

//register a listener function before the emit function 
emitter.on('message Logged' , function(){
    console.log('Listener Function called'); // callback function
});
//raised the event , arguement is the Event Name ,
//emitter emits events / makes events , and calls listener function synchroneously
emitter.emit('message Logged')

//Here listener has to be before the emitter , and listener's first arguement/Event Name
//must be same as the emitter's Event Name/message

//Above emitter and listener had no argument

//now we will pass argument to emitter and listener ,
//which are called Event arguement
emitter.on('message Logged' , function(eventArg){ // e , arg ,eventArg
    console.log('Event Argument Object',eventArg);
});
//Not preferable
//emitter.emit('message Logged',1,'http://github.com')
//Preferable to pass a object
emitter.emit('message Logged' , {id:1,url:'http://github.com'})