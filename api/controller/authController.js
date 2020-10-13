'use strict';

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Users = require("../models/learnModel");
const valid = require("../Requests/userValidation")

exports.login = function (req, res) {
    if (!valid.loginValidation(req)) {
        res.status(400).send({
            message: "Content can not be empty !",
        });
        return;
    }
    Users.findOne({where: {email: req.body.email}}).then((data) => {
        if (data === null) {
            res.status(400).send({
                message: "wrong username or password",
            });
        } else {
            bcrypt.compare(req.body.password, data.password, function (err, result) {
                if (result) {
                    data.token = crypto.randomBytes(16).toString('hex');
                    Users.update(data, {
                        where: {email: req.body.email},
                    }).then((data) => {
                        res.send({
                            message: "Note was updated successfully",
                            user: data
                        });
                    });
                } else {
                    res.status(400).send({
                        message: "wrong username or password",
                    });
                }
            });
        }
    });
};