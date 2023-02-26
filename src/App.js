import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function FlightTable() {
  const [Flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async() => { try{
      const response = await axios.get('https://api.spacexdata.com/v3/launches');
      setFlights(response.data);
    }
    catch (error){
      console.log(error)
    }
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
          <th>Flight No.</th>
          <th>Mission Name</th>
          <th>Launch Year</th>
          <th>Rocket Name</th>
          <th>Launch Site</th>
          <th>Launch Success</th>
      </thead>
      <tbody>
        {Flights.map(launch => (
          <tr key={launch.flight_number}>
            <td>{launch.flight_number}</td>
            <td>{launch.launch_year}</td>
            <td>{launch.mission_name}</td>
            <td>{launch.rocket.rocket_name}</td>
            <td>{launch.launch_site.site_name_long}</td>
            <td>{launch.launch_success ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightTable;
