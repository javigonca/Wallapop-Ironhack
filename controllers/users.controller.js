const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports.create = (req, res) => {
    res.render("users/new");
}

module.exports.doCreate = (req, res, next) => {
    User.create(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch(next)   
    };