let express = require('express');


let router = express.Router();

/*  Principal */
router.get('/', (req, res) => {
    res.render('./../views/index');
});

/*  Persona Services */
let CtlPersona = require('./../Controllers/CtlPersona');
// Listar
router.get('/Persona', CtlPersona.show);
// Crear
router.post('/Persona', CtlPersona.create);
// Buscar
router.get('/Persona/:id', CtlPersona.buscar);
// Actualizar
router.put('/Persona/:id', CtlPersona.update);
// Eliminar
router.delete('/Persona/:id', CtlPersona.delete);

/*  Usuario Services */
let CtlUsuario = require('./../Controllers/CtlUsuario');
// Listar
router.get('/Usuario', CtlUsuario.show);
// Crear
router.post('/Usuario', CtlUsuario.create);
// Buscar
router.get('/Usuario/:id', CtlUsuario.buscar);
// Actualizar
router.put('/Usuario/:id', CtlUsuario.update);
// Eliminar
router.delete('/Usuario/:id', CtlUsuario.delete);

module.exports = router;