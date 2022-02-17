import './App.scss';
import  Navbar from './components/Navbar';
import Cards from './components/Cards';
import destinations from './data.js';

export default function App() {
  const Destinations = destinations.map(destination => {

    return (
      <Cards
        key={destination.id}
        title={destination.title}
        location={destination.location.toUpperCase()}
        googleMapsUrl={destination.googleMapsUrl}
        startDate={destination.startDate}
        endDate={destination.endDate}
        description={destination.description}
        imageUrl={destination.imageUrl}
      />
    );
  })
  return (
    <div className="App">
      <Navbar />
      {Destinations}
    </div>
  );
}


