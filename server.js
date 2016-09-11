"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// app.set('port', (process.env.PORT || 8081));
// const port = process.env.PORT || 8081;

app.set('port', (process.env.PORT || 8081));

const moment = require('moment');

app.get('/:date', (req,res) => {

  let time = moment(req.params.date, 'MMMM DD, YYYY', true);

  if (!time.isValid())
    time = moment.unix(req.params.date);

  if (!time.isValid()) {
    res.json({
      'unix': null, 'natural': null
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
