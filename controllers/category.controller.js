const Cars = require("../models/car.model");
const Fashions = require("../models/fashion.model");
const Audios = require("../models/tv-audio.model");
const mongoose = require("mongoose");

module.exports.carList = (req, res, next) =>{
    Cars.find()
    .then((cars) => {
        res.render('category/cars/list', { cars });
    })
    .catch(next)   
}

module.exports.carDetail = (req, res, next) =>{
    res.render('category/cars/detail')
}

module.exports.fashionList = (req, res, next) =>{
    Fashions.find()
    .then((fashions) => {
        res.render('category/fashion/list', { fashions });
    })
    .catch(next)   
}

module.exports.fashionDetail = (req, res, next) =>{
    res.render('category/fashion/detail')
}

module.exports.tvList = (req, res, next) =>{
    Audios.find()
    .then((audios) => {
        res.render('category/tv-audio/list', { audios });
    })
    .catch(next)   
}

module.exports.tvDetail = (req, res, next) =>{
    res.render('category/tv-audio/detail')
}