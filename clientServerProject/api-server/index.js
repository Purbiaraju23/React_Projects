require("dotenv").config();
const express = require("express");
const { port } = require("./config");
const router = require("./router");

const app = express();

// app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});
//the server sets the Access-Control-Allow-Origin header to http://localhost:5173 for all responses,
//allowing requests from that origin.

app.use("/api", router);

app.listen(port, () => {
  console.log("Server running on port : ", port);
});
