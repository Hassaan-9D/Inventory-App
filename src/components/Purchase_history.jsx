import Table from 'react-bootstrap/Table';

function purchaseHistory() {
  return (
    <Table >
      <thead>
        <tr>
          <th>product</th>
          <th>variation</th>
          <th>seller</th>
          <th>company </th>
          <th>Price</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>can</td>
          <td>250ml</td>
          <td>irfan</td>
          <td>pepsi</td>
          <td>50RS</td>
          <td>2/2/2022</td>
        </tr>

        <tr>
          <td>can</td>
          <td>250ml</td>
          <td>irfan</td>
          <td>pepsi</td>
          <td>50RS</td>
          <td>2/2/2022</td>
        </tr>

        <tr>
        <td>can</td>
          <td>250ml</td>
          <td>irfan</td>
          <td>pepsi</td>
          <td>50RS</td>
          <td>2/2/2022</td>
         
        </tr>
      </tbody>
    </Table>
  );
}

export default purchaseHistory;