let mongoose = require('mongoose');
let app = require('./app');
let port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/eam')
.then(() => {
    console.log('Conexión correcta con mongodb');
    app.listen(port, () => console.log('app corriendo en el puerto '+port));
})
.catch(err => console.log(err));