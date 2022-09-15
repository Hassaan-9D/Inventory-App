import Table from 'react-bootstrap/Table';

function merchantsList() {
  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>company</th>
          <th>location </th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>irfan</td>
          <td>pepsi</td>
          <td>hyderabad</td>
          <td>123</td>
        </tr>
        <tr>
        <td>2</td>
          <td>arif</td>
          <td>fanta</td>
          <td>peshawar</td>
          <td>3212</td>

        </tr>
        <tr>
        <td>3</td>
          <td>khan</td>
          <td>chips</td>
          <td>islamabad</td>
          <td>2312</td>
         
        </tr>
      </tbody>
    </Table>
  );
}

export default merchantsList;