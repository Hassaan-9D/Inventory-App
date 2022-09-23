
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

export default function AddProducts(){
  const [product_name, setProductName] = useState("");

  const onProductChange = (e) => setProductName(e.target.value);

  const [inputList, setinputList]= useState([{amount:0, unit:"", sale_price : 0, last_price : 0 }]);
  
  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    console.log('name :', name)
    console.log('value :', value)

  }
  
   
  const submitRequest = (name, inputList)=>{
    const data = { name, inputList};
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:5000/add", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  }

  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {amount:0, unit:"", sale_price : 0, last_price : 0 }]);
  }
  return (
    <>
    <Form  >
       <h2 style = {{paddingLeft: 100, maxWidth: 300}} className="mt-3 mb-4 fw-bold">Add Product</h2>
      <Form.Group  style = {{paddingLeft: 100, maxWidth: 300}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" onChange={e=>onProductChange(e)} />
      </Form.Group>

      <Container style = {{paddingLeft: 60}}  className="content">
        <div className="row">
          <div className="col-sm-12">
          <h5 className="mt-3 mb-4 fw-bold">Add Variations</h5>
          
          { 
          inputList.map( (x,i)=>{
            return(
            <div className="row mb-3">
                <div class="form-group col-md-4">
                  <label >Amount</label>
                  <input type="Number"  name="amount" class="form-control"  placeholder="Enter Amount" onChange={ e=>handleinputchange(e,i)} />
                </div>
              
              <div class="form-group col-md-4">
              <label >Unit</label>
                <input type="text"  name="unit" class="form-control"   placeholder="Enter Unit" onChange={ e=>handleinputchange(e,i) }/>
              </div>

              <br></br>
              <br></br>

             
              <div class="form-group col-md-4">
                <label >Sale Price</label>
                <input type="Number"  name="sale_price" class="form-control"  placeholder="Enter Sale Price" onChange={ e=>handleinputchange(e,i)} />
              </div>

              
            
              <div class="form-group col-md-4">
                <label >Last Price</label>
                <input type="Number"  name="last_price" class="form-control"  placeholder="Enter Last Price" onChange={ e=>handleinputchange(e,i)} />
              </div>
              
              <div class="form-group col-md-2 mt-4">
              {
                inputList.length!==1 &&
                <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
              }
              { inputList.length-1===i &&
              <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
              }
              </div>
          </div>
            );
            } )
            } 
          </div>
        </div>
      </Container>


    <Button onClick = {() =>submitRequest(product_name,inputList)}  variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    
</>
  );
};