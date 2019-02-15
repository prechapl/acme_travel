const express = require('express');
const app = express();
const ejs = require('ejs')
// const bodyParser = require('body-parser');
const { moeStays, Stay, Hotel, User } = require('./db')

// app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', async (req, res, next) => {
  await Stay.findAll({where: { userId: 1 }})
  // .then( stays => console.log(stays))
  .then( stays => res.render('index', { stays }))
  .catch(next)

});

module.exports = app;
