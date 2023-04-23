const EventEmitter = require('events');
var url = 'https://github.com';

class Logger extends EventEmitter {
  log(message) {
    console.log("Message",message);
    this.emit("message from Logger Class Emitter", { id: 1, url: "https://" });
  }
}
module.exports = Logger;