"use strict";

const express = require('express');
const app = express();

const http = require('http').Server(app);
const path = require('path');

const moment = require('moment');

app.set('port', (process.env.PORT || 8081));

app.get('/', function (req, res) {
   res.send('Test App!');
})

if (queryDate !== "Invalid Data") {
  var unixDate = moment.unix(queryDate);
  var humanDate = moment(queryDate);

  res.json ({
      "unix": unixDate, "human": humanDate
  })

}

http.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example App Listening on *:" + port);

})
