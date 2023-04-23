const Logger = require('./logger')
const logger = new Logger();

logger.on('message Logged',(arg)=>{
    console.log('Listener Function Called',arg);
})

logger.log('Message')