module.exports = function (app) {
    var auth = require('../controller/authController');

    // todoList Routes
    app.route('/login').post(auth.login);
};