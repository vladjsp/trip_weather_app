import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import TripsList from './components/TripsList';
import WeekForecast from './components/weekForecast';

import './scss/app.scss';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <SearchBar />
        <TripsList />
        <WeekForecast />
      </div>
      <SideBar />
    </>
  );
}

export default App;
