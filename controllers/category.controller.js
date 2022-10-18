const { response, request } = require("express");
const pool = require("../database/config");

const getAllCategories = async (req = request, res = response) => {
  try {
    const categories = await pool.query("SELECT * FROM category");
    return res.json(categories[0]);
  } catch (error) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

const getCategoryById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const category = await pool.query(
      "SELECT * FROM category WHERE id = ?",
      id
    );
    return res.json(category[0]);
  } catch (error) {
    return res.status(500).json({
      messsage: "something goes wrong",
    });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
