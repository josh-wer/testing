const express = require('express');
const fs = require('fs');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/home', (req, res) => {
    fs.readFile('home.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

app.listen(process.env.PORT || 8080);

