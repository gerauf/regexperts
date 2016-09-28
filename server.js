var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.use(express.static('./app'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
