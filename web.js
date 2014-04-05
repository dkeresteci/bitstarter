var fs = require('fs');
var express = require('express');
var app = express();
var html_file = 'index.html';

app.use(express.logger());


app.get('/', function(request, response) {
  var html = fs.readFileSync(html_file).toString();
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
