const { response, request } = require("express");
const pool = require("../database/config");

const getAllCategories = async (req = request, res = response) => {
  const categories = await pool.query("SELECT * FROM category");
  res.json(categories);
};

const getCategoryById = async (req = request, res = response) => {
  const category = await pool.query("SELECT * FROM category WHERE id = 1");
  res.json(category);
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
