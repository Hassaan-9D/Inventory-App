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
    console.log("Connected!");
  });


router.get('/:id?', (req, res) => {
    let query = null;
    const id = req.params.id;
    if(id)
        query = `SELECT amount,unit FROM product_variations where product_id = ${id}`;
    else
        query = `SELECT distinct name FROM products`;
    con.query(query, function (err, productList, fields){
        if (err) throw err;
        res.send(productList);
        console.log('Variations here');
        console.log(productList);
        });

});


export default router;