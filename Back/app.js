let express = require('express');
let bodyParser = require('body-parser');
var path = require('path');

let app = express();

let router = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/', router);

module.exports = app;