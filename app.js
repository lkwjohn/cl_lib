const express 		      = require('express')
const bodyParser 	      = require('body-parser')
const cors 			        = require('cors')

const app 			        = express()
var testimonial_api 		= require('./controllers/testimonial_r')



//enables cors
app.all('*', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
  });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.disable('x-powered-by')


app.use('/testimonial', testimonial_api);

// Status 404 (Error) 
app.use('*', function(req, res){
  res.status(404).send('Invalid url')
});

var port = process.argv[2]
port =  ( port == undefined) ? 1337 : 1338; //1337 for production, 1338 for testing
app.listen(port, function(){
 console.log('Server Started on port ' + port)
});

module.exports = app;