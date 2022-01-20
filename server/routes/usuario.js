const express = require('express');
const Usuario = require('../models/usuario')
const app = express();

/*Configurar los endpoint para usuario*/

app.get('/usuario', (req, res) => {
    /*Consultar datos*/
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    /*Crear nuevos registros*/
    //res.json('post Usuario');
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, UsuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: UsuarioDB
        });
    });
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
//exportar para que se pueda utilizar en otros modulos
module.exports = app;