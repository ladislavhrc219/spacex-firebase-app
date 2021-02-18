import React from 'react';
import {useState, useEffect} from 'react';
import Loading from './Loading.comp';
import Flights from './Flights.comp';
import Search from './Search.comp';
// import './App.css';

// const url = 'https://api.spacexdata.com/v3/history?title=${query}';


function App() {

  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState([]);
  //query part of the uplevel state: 
  const [query, setQuery] = useState('');



  const fetchFlights = async () => {
    setLoading(true)
    // start it with above setLoading(true, thats why loading... still there)
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/history?title=${query}`
        //putting a query into what we fetching
      ); //fetchng promise data
      const flights = await response.json();//flights props 
      setLoading(false);
      setFlights(flights); //setFlights to that data
    }catch(err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchFlights();
  },[query]);
  //add query as a dependency:
  //whenever the dependency is cahnged, useEffect gonn fire off again

  if(loading){
    return(
      <main>
      <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* passing the getQuery upp from the search!!!  */}
        <Search getQuery={(q)=>setQuery(q)}/>

        <Flights flights={flights} />
       
        
      </header>
    </div>
  );
}

export default App;