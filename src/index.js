"use strict";
var express = require('express');
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
var port = 9000;
app.use(cors());
app.use(bodyParser());
app.post('/test', function (req, res) {
    setTimeout(function () {
        res.send(req.body);
    }, 400);
});
app.get('/test-get-body', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
app.listen(port, function () {
    return console.log("Example app listening on port " + port + "!");
});
