import express from "express";
import bodyParser from "body-parser";

import productsRoutes from './routes/products.js'
import merchantsRoutes from './routes/merchants.js'



const app = express();
const PORT = 5000;

app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("Welcome to the Dashboard API!")
});

app.use('/products',productsRoutes)
app.use('/merchants',merchantsRoutes)



app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));