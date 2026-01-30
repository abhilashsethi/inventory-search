import { useEffect, useState } from 'react';
import { fetchInventory } from './api/searchApi';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultsTable';
import './styles/app.css';

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
    <div className="container">
      <Header />
      <SearchForm
        filters={filters}
        setFilters={setFilters}
        onSearch={search}
      />
      {error && <p className="error">{error}</p>}
      <ResultsTable results={results} />
    </div>
  );
}

export default App;
