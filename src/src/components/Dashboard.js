import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export default function ComboBox() {

  const [product, setProduct] = useState([]);
  const [product_id, setProductid]= useState('');
  // const [variation, setVariation]= useState([]);
  const [table, setTable]= useState([]);

  useEffect( ()=>{
      const getProduct = async()=> {
        const req= await fetch("http://localhost:5000/products");
        const getres= await req.json();
        console.log(req);
        setProduct(await getres);
    }
    getProduct();
  },[]);

  const handleProducts=(event)=>{
    const getproductid= event.target.value;
    setProductid(getproductid);
    event.preventDefault();
  }

  
  const buyReq=(table_id, table_name, table_amount, table_unit, table_price)=>{
    // table_id.preventDefault();
    // table_name.preventDefault();
    // table_amount.preventDefault();
    // table_unit.preventDefault();
    // table_price.preventDefault();

    const data = { table_id, table_name, table_amount, table_unit, table_price };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:5000/buy", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  }



  // useEffect( ()=>{

  //   const getstate= async ()=>{
  //     const resvariation= await fetch(`http://localhost:5000/products/${product_id }`);
  //     const getst= resvariation.json();
  //     setVariation(await getst);

  //   }
  //   getstate();

  // },[product_id]);

  useEffect( ()=>{

    const getTable = async ()=>{
      const resTable= await fetch(`http://localhost:5000/buy/${product_id }`);
      const getst= resTable.json();
      setTable(await getst);

    }
    getTable();

  },[product_id]);


  return (
    <>
    <Container className="content">
     <div className="row">
       <div className="col-sm-12">
         <h5 className="mt-4 mb-4 fw-bold">Output  { }</h5>
           
             <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label className="mb-2">Products</label>
                 <select name="country" className="form-control" onChange={(e)=>handleProducts(e)}>
                   <option>--Select Products--</option>
                   {
                     product.map( (getcon)=>(
                   <option key={getcon.id} value={getcon.id }> { getcon.name}</option>
                     ))
                }
                 
                 </select>
               </div>
              {/* <div className="form-group col-md-4">
               <label className="mb-2">Variations</label>
               <select name="state" className="form-control">
                   <option>--Select Variation--</option>
                   {
                     variation.map( (vr,index)=>(                    
                   <option key={index} value={vr.id}>{ vr.amount}</option>
                     ))
                     }
                 </select>
               </div> */}
              </div>
               
       </div>
     </div>
    </Container>
    <br></br>
    <br></br>
    
    
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Unit</th>
          <th>Price</th>
          
         
        </tr>
      </thead>
      <tbody>
          {
          table.map( (table) =>(
          <tr>
              <td>{table.id}</td>
              <td>{table.name}</td>
              <td>{table.amount}</td>
              <td>{table.unit}</td>
              <td>{table.last_price}</td>
              <button type="button" class="btn btn-outline-info  btn-sm" onClick = {() =>buyReq(table.id,table.name, table.amount, table.unit, table.last_price)}>Buy</button>

          </tr>
            ))}
      </tbody>
    </Table>
    

    </>
  );
}




