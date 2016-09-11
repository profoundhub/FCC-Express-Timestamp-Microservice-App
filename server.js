"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
// app.set('port', (process.env.PORT || 8081));
const port = process.env.PORT || 8081;
const moment = require('moment');

app.get('/:date', function (req, res) {
   // res.send('Test App!');
   var queryDate = new Date(req.params.date);
   console.log(queryDate);

if (queryDate !== "Invalid Date") {
  var unixDate = moment.unix(queryDate);
  var humanDate = moment(queryDate);

    res.json ({
        "unix": unixDate, "human": humanDate
    })
  }
  else {
    res.send('Not Feeling Well ...');
  }
})

http.listen(port, function () {
/*
  var host = server.address().address
  var port = server.address().port
*/
  console.log("TimeStamp API App Listening on *:" + port);

})
