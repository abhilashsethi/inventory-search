export default function ResultsList({ results }) {
  if (results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <ul>
      {results.map(item => (
        <li key={item.id}>
          {item.productName} — {item.category} — ₹{item.price}
        </li>
      ))}
    </ul>
  );
}
