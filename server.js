"use strict";

const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const moment = require('moment');

app.use(express.static('/'));
app.get('/', function (req, res) {
   fs.readFile(__dirname + '/views/index.html', 'utf8', function(err, text){
      res.send(text);
    });
})
app.set('port', (process.env.PORT || 8081));
app.get('/:date', (req,res) => {
  let time = moment(req.params.date, 'MMMM DD, YYYY', true);
  if (!time.isValid())
    time = moment.unix(req.params.date);
  if (!time.isValid()) {
    res.json({
      'unix': null,
      'natural': null
    });
  }
  res.json({
    'unix': time.format('X'),
    'natural': time.format('MMMM DD, YYYY')
  });
});
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
