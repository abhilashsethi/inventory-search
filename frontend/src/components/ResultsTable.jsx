export default function ResultsTable({ results }) {
  if (results.length === 0) {
    return <div className="card empty">No results found</div>;
  }

  return (
    <div className="card">
      <table width="100%" cellPadding="10">
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Product</th>
            <th>Category</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
