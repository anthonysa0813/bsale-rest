const { Router } = require("express");
const {
  getAllProducts,
  getProductsByIdCategory,
} = require("../controllers/products.controller");

const router = Router();

router.get("/", getAllProducts);

// get products by categoryId
router.get("/:categoryId", getProductsByIdCategory);

module.exports = router;
