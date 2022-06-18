const express = require('express');
const router = express.Router();
const msgController = require('../controllers/msgController');

//router to handle a get request

router.get('/chat', msgController.getMessages, (req, res) =>
  res.status(200).json(res.locals.body)
);

router.post('/chat', msgController.postMessages, (req, res) =>
  res.status(200).json('msg submitted successfully')
);

module.exports = router;
