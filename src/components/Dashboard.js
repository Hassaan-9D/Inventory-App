import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import ProductsList from './Products';

export default function ComboBox() {

  const [product, setProduct] = useState([]);
  const [product_id, setProductid]= useState('');
  const [variation, setVariation]= useState([]);

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

  useEffect( ()=>{

    const getstate= async ()=>{
      const resvariation= await fetch(`http://localhost:5000/products/${product_id }`);
      const getst= resvariation.json();
      setVariation(await getst);

    }
    getstate();

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
               <div className="form-group col-md-4">
               <label className="mb-2">Variations</label>
               <select name="state" className="form-control">
                   <option>--Select Variation--</option>
                   {
                     variation.map( (vr,index)=>(                    
                   <option key={index} value={vr.id}>{ vr.amount}</option>
                     ))
                     }
                 </select>
               </div>

               <div className="form-group col-md-2 mt-4">              
               <button className="btn btn-success mt-2" >Submit</button>               
               </div>
            </div>
               
       </div>
     </div>
    </Container>
    <br></br>
    <br></br>
    
    
    {<ProductsList/>}
    

    </>
  );
}




