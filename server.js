var express = require('express');

var PORT = process.env.PORT || 7000;
var server = express();

server.use(express.static('public'));

server.listen(PORT, function(err) {
  if(err) {
    throw err;
  }

  console.log('Server listening on http://localhost:' + PORT);
})