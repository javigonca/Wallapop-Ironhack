const Products = require("../models/product.model");
const mongoose = require("mongoose");

module.exports.list = (req, res, next) => {    
   Products.find()
   .then((products) => {
    res.render("products/list", { products });
   })
   .catch(next)
};

module.exports.create = (req, res, next) => {
  res.render ("products/new");
};

module.exports.doCreate = (req, res, next) => {
    Products.create(req.body)
    .then((product) => {
        res.redirect("/products");
    })
    .catch()
}

module.exports.update = (req, res, next) => {
    Products.findById(req.params.id)
    .then((product) => {
        res.render("products/update", { product });
    })
    .catch(next);
}

module.exports.doUpdate = (req, res, next) => {
    Products.findByIdAndUpdate(req.params.id, req.body, )
    .then((product) => {
        res.redirect("/products");
    })
    .catch(next);
}

module.exports.delete = (req, res, next) => {
    Products.findByIdAndDelete(req.params.id)
    .then((product) => {
        res.redirect("/products")
    })
    .catch(next);
}