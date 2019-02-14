const express = require('express');
const app = express();
const { syncAndSeed } = require('./db')

app.get('/', async (req, res, next) => {
  try {
    res.send(await syncAndSeed())
  } catch (err){
    next(err)
  }
})

module.exports = app
