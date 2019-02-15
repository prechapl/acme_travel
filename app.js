const express = require('express');
const app = express();
const { moeStays } = require('./db')
const renderPage = require('./renderPage')
const moe =  moeStays()

app.get('/', async (req, res, next) => {

    await moeStays()
    .then( stays => {console.log(stays)
    res.send(renderPage(stays))})
      .catch(next)
    // res.send(await renderPage(moe))
  // } catch (err){
  //   next(err)
  // }
});

module.exports = app;
