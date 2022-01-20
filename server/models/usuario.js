const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        requiered: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
        requiered: [true, 'El email es requerido']
    },
    password: {
        type: String,
        requiered: [true, 'El password es requerido']
    },
    img: {
        type: String,
        requiered: false
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);