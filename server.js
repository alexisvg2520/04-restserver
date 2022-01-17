require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./server/routes/usuario'));

/* Conexión con BDD*/
mongoose.connect('mongodb://localhost:27017/coffe', (err, res) => {
    if (err) {
        throw err;
    }
    console.log("Base de datos ON LINE!");
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});

module.exports = app;