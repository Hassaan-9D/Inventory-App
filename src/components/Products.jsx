import Table from 'react-bootstrap/Table';

function ProductsList() {
  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Variation</th>
          <th>Company</th>
          <th>Price</th>
          
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Chips</td>
          <td>small</td>
          <td>Lays</td>
          <td>20</td>
          <button type="button" class="btn btn-outline-info  btn-sm" style={{}}>Buy</button>
        </tr>
        <tr>
        <td>1</td>
          <td>Chips</td>
          <td>small</td>
          <td>Lays</td>
          <td>20</td>
          <button type="button" class="btn btn-outline-info btn-sm" style={{}}>Buy</button>
        </tr>
        <tr>
        <td>1</td>
          <td>Chips</td>
          <td>small</td>
          <td>Lays</td>
          <td>20</td>
          <button type="button" class="btn btn-outline-info btn-sm" style={{}}>Buy</button>
        </tr>
      </tbody>
    </Table>
  );
}

export default ProductsList;