const express = require("express");
const pool = require("../database/config");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.PORT = 3306;
    // this.connectDB();
    this.paths = {
      products: "/api/products",
      category: "/api/category",
    };
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
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
