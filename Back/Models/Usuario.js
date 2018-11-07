let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Usuario = Schema({
    nombreUsuario: {type: String, required: true},
    contrasena: {type: String, required: true},
    personaId: {type: Schema.Types.ObjectId, required: true, ref: 'personas'}
},
{
    timestamp: true,
    versionKey: false
});

module.exports = mongoose.model('Usuario', Usuario);