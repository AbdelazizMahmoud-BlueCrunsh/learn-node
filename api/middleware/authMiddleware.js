const Users = require("../models/learnModel");
var auth = function (req, res, next) {
    console.log(req.headers.token);
    Users.findOne({where: {token: req.headers.token}}).then((data) => {
        if (data === null) {
            res.status(401).send({
                message: "you are not auth",
            });
        }else {
            next();
        }
    });
}

module.exports.auth = auth;