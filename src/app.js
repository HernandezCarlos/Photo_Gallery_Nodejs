const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const usersRoutes = require('../src/routes/users')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/rest-api-example',{
    useMongoClient: true
}).then(db => console.log('db esta conectada'))
  .catch(err => console.log(err))

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', usersRoutes)

//staticfiles

//error handlers

//start server
app.listen(app.get('port'),() => {
    console.log(`Escuchando en el puerto ${app.get('port')}`)
});