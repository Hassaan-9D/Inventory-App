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
    
    query = `SELECT products.name, product_variations.unit,product_variations.amount, product_price.last_price FROM product_variations JOIN product_price ON product_variations.id = product_price.variation_id LEFT JOIN products ON products.id = product_variations.product_id WHERE product_variations.product_id = ${id} GROUP BY product_price.variation_id;` ;
    
    con.query(query, function (err, JOIN, fields){
        if (err) throw err;
        res.send(JOIN);
        });

});

router.post('/', function(request, response){
   
    let product = request.body.table_name;
    let variation =request.body.table_amount.toString() + request.body.table_unit;    
    let price = request.body.table_price;
    let query = null;
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    console.log(today)
    query = `INSERT INTO purchase_history (product, variation, price, purchase_date) VALUES (?);`;
   
    let values =  [ product, variation, price, today];
    
    con.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Added to history!')
      });
});


export default router;