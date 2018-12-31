const express = require('express');

const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/home', (req, res) => {
  fs.readFile('home.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});


app.listen(process.env.PORT || 8080);
