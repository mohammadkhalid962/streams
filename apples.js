var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Mohammad Khalid!');
});

app.get('/hello', function(req, res) {
    res.send('My name is !');
});

app.listen(process.env.PORT, function () {
console.log('Example app listening on port 3000!');
});