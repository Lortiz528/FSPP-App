import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`${API}/locations`).then((res) => {
      setLocations(res.data);
    });
  }, []);

  return (
    <div>
      <header className="locationHeader">
        <h1>*Find your Treasure at These Spots*</h1>
        <h2>
          <Link to="/locations/new" style={{ textDecoration: 'none' }}>Add a Location</Link>
        </h2>
      </header>
      <br />
      <section>
        {locations.map((location) => (
          <div key={location.id} className="locationCard">
            <h4>{location.store_name}</h4>
            <Link to={`/locations/${location.id}`}>
              <img src={location.image} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Locations;
