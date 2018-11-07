let Usuario = require('./../Models/Usuario');

let CtlPersona = {
    show(req, res){
        Usuario.find({})
        .then( docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        });
    },
    create(req, res){
        Usuario.create({
            nombreUsuario: req.body.nombreUsuario,
            contrasena: req.body.contrasena,
            personaId: req.body.personaId
        })
        .then( docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        });
    },
    update(req, res){
        Usuario.update({
            _id: req.params.id
        },{
            nombreUsuario: req.body.nombreUsuario,
            contrasena: req.body.contrasena,
            personaId: req.body.personaId
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    },
    delete(req, res){
        Usuario.deleteOne({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    },
    buscar(req, res){
        Usuario.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    }
};

module.exports = CtlPersona;