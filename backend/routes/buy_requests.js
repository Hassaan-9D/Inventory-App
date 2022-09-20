import express  from "express";
const router = express.Router();
import mysql from 'mysql';


var con = mysql.createConnection({
    host: "localhost",
    typeCast: 'mysql',
    port: 3306,
    user: "root",
    password: "",
    database: 'purchase_app'
  });
  
  con.connect(function(err) {
    if (err) throw err;
  });


router.get('/:id', (req, res) => {
    let query = null;
    const id = req.params.id;
    
    query = `SELECT products.id, products.name , product_variations.amount ,product_variations.unit, product_price.last_price
            FROM products 
            JOIN product_variations
            ON products.id = product_variations.product_id 
            JOIN product_price
            ON products.id = product_price.product_id AND  products.id = ${id}
            GROUP BY product_price.product_id, product_price.variation_id` ;
    
    con.query(query, function (err, JOIN, fields){
        if (err) throw err;
        res.send(JOIN);
        });

});

var count = 1;

router.post('/', function(request, response){
   
    let product = request.body.table_name;
    let variation =request.body.table_amount.toString() + request.body.table_unit;    
    let price = request.body.table_price;
    let query = null;
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    query = `INSERT INTO purchase_history (product, variation, price, purchase_date) VALUES (?);`;
   
    let values =  [ product, variation, price, current_date.toString()];
    
    con.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Added to history!')
      });
});


export default router;