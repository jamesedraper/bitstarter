var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  var htmlfile = "index.html";
  response.send(html);
});

app.get('/contact', function(request, response) {
  var html = 'Contact Page';
  response.send(html);
});

app.use("/public", express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
