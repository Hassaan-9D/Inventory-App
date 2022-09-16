import Table from 'react-bootstrap/Table';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function MerchantsList() {

  const [merchant, setMerchant] = useState([]);

  useEffect( ()=>{
    const getMerchant = async()=> {
      const req= await fetch("http://localhost:5000/merchants");
      const getres= await req.json();
      console.log(req);
      setMerchant(await getres);
  }
  getMerchant();
  },[]);

  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>location </th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
          {
          merchant.map( (merchant) =>(
          <tr>
              <td>{merchant.id}</td>
              <td>{merchant.name}</td>
              <td>{merchant.location}</td>
              <td>{merchant.phone}</td>
          </tr>
            ))}
        
       
       
      </tbody>
    </Table>
  );
}

