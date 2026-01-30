import { useEffect, useState } from 'react';
import { fetchInventory } from './api/searchApi';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';

function App() {
  const [filters, setFilters] = useState({
    q: '',
    category: '',
    minPrice: '',
    maxPrice: ''
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const search = async () => {
    try {
      setError('');
      const data = await fetchInventory(filters);
      setResults(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Inventory Search</h2>

      <SearchForm
        filters={filters}
        setFilters={setFilters}
        onSearch={search}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ResultsList results={results} />
    </div>
  );
}

export default App;
