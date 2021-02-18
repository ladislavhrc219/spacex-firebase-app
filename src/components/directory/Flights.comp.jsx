
import React from 'react';
import Flight from "./Flight.comp.jsx";

const Flights = ({flights}) => {
    return (
        <>
            <div className="title">
            <h2> Spaxe X Past Flights</h2>
           
            {flights.map(flight => (
                <Flight key={flight.id} {...flight} />
            ))}

            </div>
        </>
    );
};

export default Flights;