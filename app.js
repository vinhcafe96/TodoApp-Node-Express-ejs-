var express = require('express');

var todoController = require('./controllers/todoController');
var app = express();
//template engines
app.set('view engine','ejs')

//static file
app.use(express.static('./public'))


//fire todoController
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening on port 3000');