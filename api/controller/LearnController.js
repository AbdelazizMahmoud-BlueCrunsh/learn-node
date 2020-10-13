'use strict';


const Users = require("../models/learnModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const valid = require("../Requests/userValidation")

exports.print = function (req, res) {
    res.json("hello world");

};

exports.create = function (req, res) {
    if (!valid.insert(req)) {
        res.status(400).send({
            message: "Content can not be empty !",
        });
        return;
    }
    const user = {}
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = req.body.email
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        user.password = hash;
        user.token = crypto.randomBytes(16).toString('hex');
        Users.create(user)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while create the Notes",
                });
            });
    });

};

exports.index = function (req, res) {
    Users.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving Notes",
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Users.findByPk(id)
        .then((data) => {
            if (!data) {
                res.status(400).send({
                    message: "Not found this id=" + id,
                });
                return
            }
            res.send(data);

        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Notes with id=" + id,
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Users.update(req.body, {
        where: {id: id},
    }).then((data) => {
        if (data[0] !== 0) {
            console.log(data)
            res.send({
                message: "Note was updated successfully",
            });
        } else {
            res.send({
                message: `not found id= ${id}`,
            });
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Users.destroy({
        where: {id: id},
    }).then((data) => {
        if (data[0] !== 0) {
            res.send({
                message: "Note was delete successfully!",
            });
        } else {
            res.send({
                message: `Cannot delete Note with id=${id}`,
            });
        }
    });
};
