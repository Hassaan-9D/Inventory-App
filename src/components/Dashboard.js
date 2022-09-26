import * as React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

export default function ComboBox() {
  const [products, setProducts] = useState([]);
  const [product_id, setProductid] = useState("");
  const [table, setTable] = useState([]);

  // GETTING/SETTING PRODUCTS
  useEffect(() => {
    const getProduct = async () => {
      const req = await fetch("http://localhost:5000/products");
      const getres = await req.json();
      console.log(getres);
      setProducts(getres);
    };
    getProduct();
  }, []);

  // SETTING ID WHEN AUTOCOMPLETE IS SELECTED
  const handleAutocomplete = (event, value) => {
    console.log("values: ", value);
    const getproductid = value;
    setProductid(getproductid);
    event.preventDefault();
  };

  const buyReq = (
    table_id,
    table_name,
    table_amount,
    table_unit,
    table_price
  ) => {
    const data = {
      table_id,
      table_name,
      table_amount,
      table_unit,
      table_price,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/buy", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  // SETTING TABLE
  useEffect(() => {
    const getTable = async () => {
      const resTable = await fetch(`http://localhost:5000/buy/${product_id}`);
      const getst = resTable.json();
      setTable(await getst);
    };
    getTable();
  }, [product_id]);

  return (
    <>
      <div style={{ paddingLeft: 100, paddingTop: 50 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(product) => product.name}
          options={products}
          onChange={(e, product) => handleAutocomplete(e, product.id)}
          sx={{ width: 300, height: 50 }}
          renderOption={(props, product) => (
            <Box component="li" {...props} key={product.id}>
              {product.name}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Products" />}
        />
      </div>

      <br></br>
      <br></br>

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {table.map((table) => (
            <tr>
              <td>{table.name}</td>
              <td>{table.amount}</td>
              <td>{table.unit}</td>
              <td>{table.last_price}</td>
              <button
                type="button"
                class="btn btn-outline-info  btn-sm"
                onClick={() =>
                  buyReq(
                    table.id,
                    table.name,
                    table.amount,
                    table.unit,
                    table.last_price
                  )
                }
              >
                Buy
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
