const express = require("express");
const app = express.Router();
const rotas = require("./rotas")

app.get("/", rotas.home);

module.exports = app;