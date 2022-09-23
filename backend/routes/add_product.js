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

var productID ;
router.post('/', function(request, response){
   
    let product = request.body.name;
    let variation_list = request.body.inputList
    let query = null;


    query  = `INSERT INTO products (name) VALUES (?);`;
   
    let values =  [product];
    var variation_id = 10;
    
    con.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Added to products!')
      });
    
    let product_query = 'SELECT id from products ORDER BY id DESC LIMIT 1;'
   
    con.query(product_query, function (err, result) {
        if (err) throw err;
        productID = result[0].id;
        console.log('product id: ', productID)
    });

    for (let i = 0; i < variation_list.length; i +=1){
        
        let product_query = 'SELECT id from products ORDER BY id DESC LIMIT 1;'
    
        con.query(product_query, function (err, result) {
            if (err) throw err;
            productID = result[0].id;
            console.log('product id: ', productID)

            let query2  = `INSERT INTO product_variations (id, product_id, unit, amount) VALUES (?);`;
            let amount,unit,sale_price, last_price;
            amount = variation_list[i].amount;
            unit = variation_list[i].unit;
            sale_price = variation_list[i].sale_price;
            last_price = variation_list[i].last_price;
            
            console.log('NOW PROD ID: ', productID)  

            let values2 =  [variation_id , productID, unit, amount];
            console.log('values: ', values2)
            console.log(values)
            con.query(query2, [values2], function (err, result) {
                if (err) throw err;
                else{
                
                    console.log('Added to variations!')

                    let query3 = `INSERT INTO product_price (product_id,variation_id,sale_price, last_price, merchant_id) VALUES (?);`
                    let values3 =  [productID, variation_id , sale_price, last_price, 1];
                    con.query(query3, [values3], function (err, result) {
                        if (err) throw err;
                        console.log('Added to product_price!')
                    });

                    variation_id += 1;
                }
           
        });
        });

        
    }   
    

});


export default router;