import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import TripsList from './components/TripsList';
import WeekWeatherBar from './components/WeekWeatherBar';
import './scss/app.scss';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <SearchBar />
        <TripsList />
        <WeekWeatherBar />
      </div>
      <SideBar />
    </>
  );
}

export default App;
