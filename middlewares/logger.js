const winston = require('winston');
const { createLogger, transports } = require('winston');
const { MongoDB } = require('winston-mongodb');
const pass = process.env.Dhruv_CLUSTER_PASSWORD;

const logger = createLogger({
    format: winston.format.json(),
   transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' }),
    new MongoDB({
      db: `mongodb+srv://Dhruv:${pass}@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority`,
      options: { useUnifiedTopology: true },
      level: 'error',
      collection: 'logs',
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exception.log' }),
    new MongoDB({
      db: `mongodb+srv://Dhruv:${pass}@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority`,
      options: { useUnifiedTopology: true },
      level: 'error',
      collection: 'uncaughtExceptions',
    }),
  ],
  rejectionHandlers:[
    new winston.transports.File({ filename: 'rejections.log' }),
    new MongoDB({
      db: `mongodb+srv://Dhruv:${pass}@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority`,
      options: { useUnifiedTopology: true },
      level: 'error',
      collection: 'uncaughtPromises',
    }),
  ],
});
// Separate handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception', error);
  // You can also perform any additional action here if needed
});
// Separate handler for unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection', reason);
  // You can also perform any additional action here if needed
});
module.exports = logger;