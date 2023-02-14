const express = require("express");

const common = require("../controllers/common.controller");
const category = require("../controllers/category.controller");

const router = express.Router();


router.get("/", common.home),


router.get("/category/cars/list", category.list),
router.get("/category/fashion/list", category.list),
router.get("/category/tv-audio/list", category.list),

module.exports = router;