import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ProductsList from './Products';
export default function ComboBox() {
  return (
    <>
    <br></br>
    <div style={{display:'flex', justifyContent:'space-between'}}>
   
      <Autocomplete
          action = 'localhost:3000/products' method = 'GET'
          style={{paddingLeft: '40px'}}
          disablePortal
          id="products"
          options={products}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="products" />}
          />

      <br></br>
      <br></br>
      <Autocomplete
          style={{paddingLeft: '40px'}}
          disablePortal
          id="variations"
          options={variations}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Variations" />}
      />
      <br></br>
      <br></br>
    
    </div>
    <br></br>
    <br></br>
    
    
    {<ProductsList/>}
    

    </>
  );
}

const products = [
 
   
  { label: 'Product 1'},
  { label: 'Product 2' },
  { label: 'Product 3'},

  ];

const variations = [
 
    { label: 'variation 1'},
    { label: 'variation 2' },
    { label: 'variation 3'},
  
  ];


