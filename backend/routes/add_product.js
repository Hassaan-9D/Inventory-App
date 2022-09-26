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

var productID;
var VARIATION_ID;
router.post('/', function (request, response) {

    let product = request.body.name;
    let org_id = request.body.org_id;
    let variation_list = request.body.inputList

    let query = null;
    query = `INSERT INTO products (name,created_by,org_id) VALUES (?);`;

    let values = [product, 1, org_id];


    con.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Added to products!')
    });

    let product_query = 'SELECT id from products ORDER BY id DESC LIMIT 1;'

    con.query(product_query, function (err, result) {
        if (err) throw err;
        productID = result[0].id;
    });

    for (let i = 0; i < variation_list.length; i += 1) {

        let product_query = 'SELECT id from products ORDER BY id DESC LIMIT 1;'

        con.query(product_query, function (err, result) {
            if (err) throw err;
            productID = result[0].id;


            let query2 = `INSERT INTO product_variations ( product_id, unit, amount) VALUES (?);`;
            let amount, unit, sale_price, last_price;
            amount = variation_list[i].amount;
            unit = variation_list[i].unit;
            sale_price = variation_list[i].sale_price;
            last_price = variation_list[i].last_price;


            let values2 = [productID, unit, amount];
            con.query(query2, [values2], function (err, result) {
                if (err) throw err;
                else {

                    console.log('Added to variations!')
                    let var_query = 'SELECT id from product_variations ORDER BY id DESC LIMIT 1;'
                    con.query(var_query, function (err, result) {
                        if (err) throw err;
                        VARIATION_ID = result[0].id;
                        console.log('VARIATION: ', VARIATION_ID)
                        let query3 = `INSERT INTO product_price (product_id,variation_id,sale_price, last_price, merchant_id) VALUES (?);`
                        console.log('NOW VARIATION: ', VARIATION_ID)
                        let values3 = [productID, VARIATION_ID, sale_price, last_price, 1];
                        con.query(query3, [values3], function (err, result) {
                            if (err) throw err;
                            console.log('Added to product_price!')
                        });
                    });

                }

            });
        });


    }


});


export default router;