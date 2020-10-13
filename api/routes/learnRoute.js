module.exports = function (app) {
    var todoList = require('../controller/LearnController');

    // todoList Routes
    app.route('/').get(todoList.print);
    app.route('/users').post(todoList.create);
    app.route('/users').get(todoList.index);
    app.route('/users/:id').get(todoList.findOne);
    app.route('/users/:id').put(todoList.update);
    app.route('/users/:id').delete(todoList.delete);
};