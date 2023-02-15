const express = require("express");

const common = require("../controllers/common.controller");
const category = require("../controllers/category.controller");
const users = require("../controllers/users.controller");

const router = express.Router();


router.get("/", common.home),

router.get("/users/new", users.create);
router.post("/users", users.doCreate);

router.get("/login", users.login);


router.get("/category/cars/list", category.list),
router.get("/category/fashion/list", category.list),
router.get("/category/tv-audio/list", category.list),

module.exports = router;