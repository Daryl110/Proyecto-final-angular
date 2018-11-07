let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Persona = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true}
},{
    timestamp: true,
    versionKey: false
});

module.exports = mongoose.model('Persona', Persona);