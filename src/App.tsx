import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TripsList from './components/TripsList';
import './scss/app.scss';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <TripsList />
    </>
  );
}

export default App;
