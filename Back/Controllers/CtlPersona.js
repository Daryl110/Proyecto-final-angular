let Persona = require('./../Models/Persona');

let CltPersona = {
    show(req, res){
        Persona.find({})
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
    },
    create(req, res){
        Persona.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        });
    },
    update(req, res){
        Persona.update({
            _id: req.params.id
        },{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    },
    delete(req, res){
        Persona.deleteOne({
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
        Persona.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    }
}

module.exports = CltPersona;