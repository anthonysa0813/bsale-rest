const { request, response } = require("express");
const pool = require("../database/config");

const getAllProducts = async (req = request, res = response) => {
  const query = req.query;
  const { name } = query;
  const products = await pool.query("SELECT * FROM product");
  try {
    if (name) {
      const productFilter = await pool.query(
        "SELECT * FROM product WHERE name LIKE ?",
        `%${name}%`
      );
      return res.json(productFilter[0]);
    }
    return res.json(products[0]);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

const getProductsByIdCategory = async (req = request, res = response) => {
  const { categoryId } = req.params;
  try {
    const products = await pool.query(
      `SELECT * FROM product  WHERE category = (?)`,
      [categoryId]
    );
    return res.json(products[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getAllProducts,
  getProductsByIdCategory,
};
