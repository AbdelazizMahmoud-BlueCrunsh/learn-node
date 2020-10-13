require('express-group-routes');
var express = require('express');
var app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


const db = require("./api/models");
db.sequelize.sync({alter: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/learnRoute'); //importing route
var authRouter = require('./api/routes/authRoute'); //importing route
var middlewares = require('./api/middleware/authMiddleware');
authRouter(app)
app.group(function (router) {
    router.use(middlewares.auth)
    routes(router)
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);