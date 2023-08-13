const logger = require('./logger');

function error(err,req, res, next) {
  logger.error(err.message, err);
  res.status(500).send('Something failed: Internal Server Error.');
}
module.exports = error;

