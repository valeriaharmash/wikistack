const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/add', (req, res) => {
  res.send(addPage());
});

wikiRouter.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

wikiRouter.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

//require the addPage module from the views folder
const { addPage } = require('../views');

module.exports = wikiRouter;
