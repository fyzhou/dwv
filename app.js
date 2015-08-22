var express = require('express');
var app = express();
var port = process.env.PORT || 80;
/*
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/ext'));
app.use(express.static(__dirname + '/resources'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/viewers'));
app.use(express.static(__dirname + '/public'));
*/
app.use(express.static(__dirname));
app.listen(port);