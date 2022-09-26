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

router.get('/', (req, res) => {
  con.query("SELECT DATE_FORMAT(purchase_date, '%Y-%m-%d') as DATE, SUM(`price`) as  Total FROM purchase_history GROUP BY  DATE(purchase_date)", function (err, purchaseHistory) {
    if (err) throw err;
    res.send(purchaseHistory);
  });
});


export default router;