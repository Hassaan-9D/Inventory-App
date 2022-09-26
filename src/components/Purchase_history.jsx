import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

export default function PurchaseHistory() {
  const [sumTable, setSumTable] = useState([]);
  const [date, setDate] = useState(" ");
  const [day, setDay] = useState([]);



  useEffect(() => {
    const getSumTable = async () => {
      const resSumTable = await fetch(`http://localhost:5000/sum`);
      const getst = resSumTable.json();
      setSumTable(await getst);
    };
    getSumTable();
  }, []);

  const handleProducts = (event) => {
    const getDate = event;
    setDate(getDate);
    console.log(date);
  };

  useEffect(() => {
    const getDay = async () => {
      console.log("DATE");
      console.log(date);
      const req = await fetch(`http://localhost:5000/history/` + String(date));
      console.log(`http://localhost:5000/history/` + String(date));
      const getres = await req.json();

      setDay(await getres);
    };
    getDay();
  }, [date]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>TOTAL AMOUNT</th>
          </tr>
        </thead>

        <tbody>
          {sumTable.map((table) => (
            <tr>
              <td>{table.DATE}</td>
              <td>{table.Total}</td>
              <button
                type="button"
                class="btn btn-outline-info  btn-sm"
                onClick={() => handleProducts(table.DATE)}
              >
                SEE MORE
              </button>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Variation</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {day.map((day) => (
            <tr>
              <td>{day.product}</td>
              <td>{day.variation}</td>
              <td>{day.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
