const express = require("express");
const bodyParser = require("body-parser");
const Router = express.Router();
const productRoutes = require("./api/routes/products");
const app = express();

app.use(bodyParser.json());

app.use("/products",productRoutes);


app.listen(3000);