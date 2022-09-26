import './locationIndex.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
        <Button className="addlocationbtn">
          <Link to="/locations/new" style={{ textDecoration: 'none' }}>
            Add a Location
          </Link>
        </Button>
      </header>
      <br />
      <section className="locationlist">
        {locations.map((location) => (
          <div key={location.id} className="locationCard">
            <h4>{location.store_name}</h4>
            <Link to={`/locations/${location.id}`}>
              {location.image ? (
                <img src={location.image} alt= {location.store_name} />
              ) : (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637" alt = 'blank' />
              )}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Locations;
