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


router.get('/:id', (req, res) => {
  console.log(req.params.id)
  con.query(`SELECT product, variation, price FROM purchase_history WHERE purchase_date = '${req.params.id}' `, function (err, purchaseHistory) {
    if (err) throw err;
    res.send(purchaseHistory);
  });

});


export default router;