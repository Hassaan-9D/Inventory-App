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

 router.get('/', (req, res) => {
     con.query("SELECT id, name, location, phone FROM merchants", function (err, merchantsList){
         if (err) throw err;
         res.send(merchantsList);
         console.log('merchantsList here');
         console.log(merchantsList);
         });
});


export default router;