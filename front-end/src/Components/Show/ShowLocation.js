import './showlocation.scss';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import deleteSound from '../../mixkit-player-losing-or-failing-2042.wav';

const API = process.env.REACT_APP_API_URL;

const ShowLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/locations/${id}`)
      .then((res) => setLocation(res.data))
      .catch((err) => {
        setError(err);
        navigate('/*');
      });
  }, [id, navigate]);

  const playAudio = () => {
    new Audio(deleteSound).play();
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/locations/${id}`)
      .then((res) => {
        playAudio();
        navigate('/locations');
      })
      .catch((err) => setError(err));
  };

  return (
    <article className="showlocationDetails">
      {error && <p className="error">{error}</p>}

      <div className="locationStats">
        <h2>{location.store_name}</h2>

        {location.image ? (
          <img src={location.image} alt={location.store_name} />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
            alt="none found"
          />
        )}
        <h5>Address: {location.address}</h5>
        {location.website ? (
          <h5>
            <a href={location.website} style={{ textDecoration: 'none' }}>
              Store Website
            </a>
          </h5>
        ) : (
          <p>no website entered yet!</p>
        )}
        {location.googlemaplink ? (
          <h5>
            <a href={location.googlemaplink} style={{ textDecoration: 'none' }}>
              Google Map It!
            </a>
          </h5>
        ) : (
          <p>No google map link entered yet!</p>
        )}
      </div>

      <Link to="/locations">
        <Button variant="primary">Back</Button>
      </Link>
      <Link to={`/locations/${id}/edit`}>
        <Button variant="warning">Edit</Button>
      </Link>
      <div>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </article>
  );
};

export default ShowLocation;
