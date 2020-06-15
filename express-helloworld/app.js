var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! test!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Marsssh8888888!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

