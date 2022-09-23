import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import productsRoutes from './routes/products.js';
import merchantsRoutes from './routes/merchants.js';
import buyRequests from './routes/buy_requests.js'
import history from './routes/purchase_history.js'
import sumTable from './routes/sum_table.js'
import add_products from './routes/add_product.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));


app.get("/", (req, res) => {
    res.send("Welcome to the Dashboard API!")
});

app.use('/products',productsRoutes)
app.use('/merchants',merchantsRoutes)
app.use('/buy',buyRequests)
app.use('/history', history)
app.use('/sum', sumTable)
app.use('/add', add_products)



app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));