"use strict";

const express = require('express');
const app = express();
// app.use(express.static('../public')); // path to your public directory

app.use(express.static('/'));

// app.use(express.static(__dirname + "/index.html"));

const http = require('http').Server(app);
const path = require('path');

app.set('port', (process.env.PORT || 8081));

const moment = require('moment');

// app.use(express.static(__dirname + '/index.html'));
// app.use(express.static(__dirname));

// app.use(express.static(__dirname + "/index.html"));

/*
app.get('/',function(req,res) {
  res.render('index.html', {});
});
*/

/*
app.get('/', function (req, res) {
  res.render('index', {});
});
*/

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
