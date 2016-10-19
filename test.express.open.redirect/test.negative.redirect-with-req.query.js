// Test application saves a URL from user input into app.locals and then redirects to that address in one of the requests
// Method POST /url saves the URL to app.locals.url
// Method POST /next redirects to the saved URL

var express = require('express');
var app = express();

app.disable('x-powered-by');

app.get('/next', function(req, res){
  console.log("go to the next page "+req.query.url);  
  //redirect user to the value from req.query.url
  console.log(("URL: "+req.query.url));
  res.redirect(req.query.url);
});

app.get('/new', function(req, res){
  console.log("This is the next page ");
  res.send("/new page");
});


app.listen(3000);
console.log("Server running on port 3000");
