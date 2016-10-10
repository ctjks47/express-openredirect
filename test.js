'use strict';

var express = require('express');
var app = express();

app.disable('X-Powered-By');

app.post('/', function(req, res){
console.log("go to the next page "+app.locals.url);
var url = app.locals.url;

//redirect user to the value from app.locals, but prepend it with protocol and host
console.log(("URL: "+url));
res.redirect(302, 'https://' + req.host + '/' + url);
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});