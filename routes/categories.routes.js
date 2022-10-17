const { Router } = require("express");
const {
  getAllCategories,
  getCategoryById,
} = require("../controllers/category.controller");

const router = Router();

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

module.exports = router;
