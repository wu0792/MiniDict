/* global __dirname */
var express = require('express');
var bodyParser = require('body-parser');
var serverStatic = require('serve-static');
var mongoose = require('mongoose');
var _ = require('underscore');
var routes = require('./routes/route.js');
var port = 8888;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serverStatic('public'));
app.set('port', port);

app.listen(port);
console.log('app is running on port: ' + port);

app.use('/', routes);
app.use(function (req, res, next) {
    next();
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        })
    });
}