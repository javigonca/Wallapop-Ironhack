const express = require("express");

const common = require("../controllers/common.controller");
const products = require("../controllers/products.controller");
const users = require("../controllers/users.controller");

const router = express.Router();


router.get("/", common.home),
router.get("/category-search", common.search)

router.get("/users/new", users.create);
router.post("/users", users.doCreate);

router.get("/login", users.login);


router.get("/products", products.list),
router.get("/products/new", products.create),
router.post("/products", products.doCreate),
router.get("/products/:id/update", products.update),
router.post("/products/:id", products.doUpdate),
router.post("/products/:id/delete", products.delete);



module.exports = router;