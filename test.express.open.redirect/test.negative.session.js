// Test application saves a URL from user input into app.locals and then redirects to that address in one of the requests
// Method GET /awesome saves the URL to req.session.lastPage
// Method GET /next redirects to the saved URL

var express = require('express');
var session = require('express-session')
var app = express();

app.disable('x-powered-by');
app.use(session({
  secret: 'some secrete code',
  resave: false,
  saveUninitialized: true
}));

app.get('/awesome', function(req, res) {
  req.session.lastPage = '/awesome';
  res.send('Your Awesome.');
});

app.get('/next', function(req, res){
  console.log("go to the next page "+ req.session.lastPage);//app.locals.url);   
  //redirect user to the value from req.session  
  res.redirect(302, req.session.lastPage);
});

app.listen(3000);
console.log("Server running on port 3000");
