const express = require("express");
const bodyParser = require("body-parser");
const Router = express.Router();
const productRoutes = require("./api/routes/products");

const app = express();

app.use(bodyParser.json());

app.use("/products",productRoutes);

Router.get('/', function(req, res) {
    res.json({ message: 'API is Online!' });   
});
app.use('/api', Router);
app.listen(4000);


console.log('Listening on port ' );
