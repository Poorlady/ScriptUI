const express = require("express");

const server = express();

const PORT = 5000;

const api = require("./api/products");

server.get("/api/products", api.getProducts);

server.listen(PORT, () => {
  console.log("server runs in port 5000");
});
