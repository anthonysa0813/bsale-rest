const { request, response } = require("express");
const pool = require("../database/config");

const getAllProducts = async (req = request, res = response) => {
  const query = req.query;
  const { name } = query;
  const products = await pool.query("SELECT * FROM product");
  if (name) {
    const productFilter = await pool.query(
      "SELECT * FROM product WHERE name LIKE ?",
      `%${name}%`
    );
    return res.json(productFilter[0]);
  }
  res.json(products[0]);
};

const getProductsByIdCategory = async (req = request, res = response) => {
  const { categoryId } = req.params;
  console.log("categoryId", categoryId);
  const products = await pool.query(
    `SELECT * FROM product  WHERE category = (?)`,
    [categoryId]
  );
  res.json(products[0]);

  // res.json({
  //   categoryId,
  // });
};

module.exports = {
  getAllProducts,
  getProductsByIdCategory,
};
