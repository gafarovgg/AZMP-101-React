const express = require("express");
const app = express();
const port = 3000;

app.get("/api/products", (req, res) => {});
app.get("/api/products/:id", (req, res) => {});
app.post("/api/products", (req, res) => {});
app.delete("/api/products/:id", (req, res) => {});
app.put("/api/products/:id", (req, res) => {});
app.potch("/api/products/:id", (req, res) => {});
app.listen(port, () => {});
