// Test application saves a URL from user input into app.locals and then redirects to that address in one of the requests
// Method POST /url saves the URL to app.locals.url
// Method POST /next redirects to the saved URL

var express = require('express');
var app = express();

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));

app.post('/url',function(req, res){
  //store value from user input in app.locals
  app.locals.url = req.body.url;
  console.log(("/url: "+url));
  res.send('GET /url response');
});

app.get('/next', function(req, res){
  console.log("go to the next page "+app.locals.url);
  var url = app.locals.url;
  //redirect user to the value from app.locals, but prepend it with protocol and host
  console.log(("URL: "+url));
  res.redirect(302, 'https://' + req.hostname + '/' + url);
});

app.post('/next2', function(req, res){
  console.log("go to the next page "+app.locals.url);
  var _url = app.locals.url;
  //Diferent ways to concatenate
  var _redirectURL = req.protocol;
  _redirectURL += '' + req.hostname + '/';
  res.redirect(302, _redirectURL);
});

app.post('/next3', function(req, res){
  var _url = app.locals.url;
  //Using concat function
  var _redirectURL = 'https://'.concat(req.hostname,'/', url);
  console.log("go to the next page "+_redirectURL);  
  res.redirect(302, _redirectURL);
})

app.listen(3000);
console.log("Server running on port 3000");
