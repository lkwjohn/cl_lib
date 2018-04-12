const express 		= require('express')
const bodyParser 	= require('body-parser')

const app 			= express()
var testimonial_api 		= require('./controllers/testimonial_r')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.disable('x-powered-by')


app.use('/testimonial', testimonial_api);

// Status 404 (Error) 
app.use('*', function(req, res){
  res.status(404).send('Invalid url')
});

app.listen(1337, function(){
	console.log('hello')
});

module.exports = app;