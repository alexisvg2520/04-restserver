const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
    /*Consultar datos*/
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    /*Crear nuevos registros*/
    res.json('post Usuario');
});

app.put('/usuario/:id', (req, res) => {
    /*Actualizar Registros*/
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            mensaje: "El nombre es necesario"
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.delete('/usuario', (req, res) => {
    /*Eliminar registros (cambiar a inactivo)*/
    res.json('delete Usuario');
});