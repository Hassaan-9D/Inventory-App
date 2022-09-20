import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';


export default function PurchaseHistory() {

  const [history, setHistory] = useState([]);

  useEffect( ()=>{
    const getHistory = async()=> {
      const req= await fetch("http://localhost:5000/history");
      const getres= await req.json();
      console.log(req);
      setHistory(await getres);
  }
  getHistory();
},[]);



  return (
    <Table >
      <thead>
        <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Variation</th>
          <th>Price</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
          {
          history.map( (history) =>(
          <tr>
              <td>{history.id}</td>
              <td>{history.product}</td>
              <td>{history.variation}</td>
              <td>{history.price}</td>
              <td>{history.purchase_date}</td>
          </tr>
            ))}
      </tbody>
    </Table>
  );
}
