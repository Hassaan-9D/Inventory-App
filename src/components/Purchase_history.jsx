import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';


export default function PurchaseHistory() {

  // const [history, setHistory] = useState([]);
  const [sumTable, setSumTable] = useState([]);
  const [date, setDate] = useState(' ');
  const [day, setDay] =  useState([]);


//   useEffect( ()=>{
//     const getHistory = async()=> {
//       const req= await fetch("http://localhost:5000/history");
//       const getres= await req.json();
//       console.log(req);
//       setHistory(await getres);
//   }
//   getHistory();
// },[]);


useEffect( ()=>{

  const getSumTable = async ()=>{
  const resSumTable= await fetch(`http://localhost:5000/sum`);
  const getst= resSumTable.json();
  setSumTable(await getst);

  }
  getSumTable();
},[]);

const handleProducts=(event)=>{
  
  const getDate = event;
  setDate(getDate);
  console.log(date);
  
}

useEffect( ()=>{
  const getDay = async()=> {
    
      const req= await fetch(`http://localhost:5000/history/`+ date);
      const getres= await req.json();
      
      setDay(await getres);
    
  
}
getDay();
},[date]);
 


  return (<>
  <Table >
  <thead>
    <tr>
      <th>Date</th>
      <th>TOTAL AMOUNT</th>
    </tr>
  </thead>

  <tbody>
      {
      sumTable.map( (table) =>(
      <tr >
          <td>{table.DATE}</td>
          <td>{table.Total}</td>
          <button type="button" class="btn btn-outline-info  btn-sm" onClick = {() =>handleProducts(table.DATE)}>SEE MORE</button>
      </tr>
        ))}
  </tbody>
  </Table>

  <Table >
      <thead>
        <tr>
          <th>Product</th>
          <th>Variation</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {
          day.map( (day) =>(
          <tr>
              <td>{day.product}</td>
              <td>{day.variation}</td>
              <td>{day.price}</td>
          </tr>
            ))}
      </tbody>
  </Table>
  {/* <Table >
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
  </Table> */}

</>
  );
}
