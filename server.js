var express = require('express');
var app = express();
var hello = require('./hello');
hello (app);
app.listen(3000);