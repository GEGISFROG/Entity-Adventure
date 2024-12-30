const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8asd0')
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/entity.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'entity.js'));
});

app.get('/score.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'score.js'));
});

app.get('/score.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'score.png'));
});

app.get('/title.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'title.png'));
});