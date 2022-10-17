const express = require("express");
const pool = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5050;
    this.connectDB();
    this.paths = {
      products: "/api/products",
      category: "/api/category",
    };
  }
  async connectDB() {
    const products = await pool.query("SELECT * FROM category");
    console.log("products", products);
  }

  routes() {
    this.app.use(this.paths.products, require("../routes/products.routes"));
    this.app.use(this.paths.category, require("../routes/categories.routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`the application listening on ${this.PORT}`);
    });
  }
}

module.exports = Server;
