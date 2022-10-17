const { request, response } = require("express");
const pool = require("../database/config");

const getAllProducts = async (req = request, res = response) => {
  // const query = req.query;
  // const { name } = query;
  const products = await pool.query("SELECT * FROM product");
  // if (name) {
  //   const regexFilter = new RegExp(`${name}`, "gi");
  //   const productsFilter = products.filter((p) => {
  //     if (regexFilter.test(p.name)) {
  //       console.log(p);
  //       return p;
  //     }
  //   });
  //   return res.json(productsFilter);
  // }
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
