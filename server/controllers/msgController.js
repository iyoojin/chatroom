const pool = require('../models/pgModels');

const msgController = {};

msgController.getMessages = (req, res, next) => {
  const sqlString = `SELECT users.id AS userid, users.name, messages.id AS messageID, messages.message FROM messages LEFT JOIN users ON messages.user_id = users.id`;

  pool
    .query(sqlString)
    .then((data) => {
      res.locals.body = data.rows;
      console.log('this is the data', data);
      console.log('this is the rows', data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred in msgController.getMessages' },
      });
    });
};

msgController.postMessages = (req, res, next) => {
  const { message, user_Id } = req.body;
  const values = [message, user_Id];
  const sqlString = `INSERT INTO "messages" (message, user_id) VALUES ($1, $2)`;
  pool
    .query(sqlString, values)
    .then((data) => {
      res.locals.body = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred in msgController.postMessages' },
      });
    });
};

module.exports = msgController;
