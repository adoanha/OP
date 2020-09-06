var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log("Server at http://localhost:" + port);
});