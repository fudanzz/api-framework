var express = require("express");
var app = express();

var config = require('./config/config');
var middleware = require("./middleware/middleware");
var api = require("./api/api");
var logger = require("../server/util/logger");

//set up data source
require('mongoose').connect(config.db.url);

//set up  middleware
middleware(app);
 
//set up api router
app.use('/api', api);

//set up error handling
app.use(function (err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
        return;
    }

    logger.error(err.stack);
    res.status(500).send('Oops');
})

module.exports = app;