import express from "express";
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

con.connect(function (err) {
  if (err) throw err;
});


router.get('/:id?', (req, res) => {
  let query = null;
  const id = req.params.id;
  if (id)
    query = `SELECT amount,unit FROM product_variations where product_id = ${id}`;
  else
    query = `SELECT id,name FROM products`;
  con.query(query, function (err, productList, fields) {
    if (err) throw err;
    res.send(productList);
  });

});


export default router;