const express = require('express');
const app = express();
const ejs = require('ejs')
const { Stay } = require('./db')

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', async (req, res, next) => {
  await Stay.findAll()
  .then( stays => res.render('index', { stays }))
  .catch(next)

});

module.exports = app;
