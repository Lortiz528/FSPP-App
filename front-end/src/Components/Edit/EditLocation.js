import './EditLocation.scss';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import success from '../../mixkit-player-boost-recharging-2040.wav';

const API = process.env.REACT_APP_API_URL;

function EditLocation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [location, setLocation] = useState({
    store_name: '',
    address: '',
    website: '',
    googleMapLink: '',
    image: '',
  });

  useEffect(() => {
    axios
      .get(`${API}/locations/${id}`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  const playAudio = () => {
    new Audio(success).play();
  };

  const handleTextChange = (event) => {
    setLocation({
      ...location,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/locations/${id}`, location)
      .then((res) => {
        playAudio();
        navigate('/locations');
        // toast.success("Snack updated successfully!");
      })
      .catch((err) => {
        // toast.error("Error updating snack!");
      });
  };

  return (
    <section className="editlocationform">
      <h1>Edit Location</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="store_name">
          <Form.Label> Store Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="store_name"
            value={location.store_name}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Store Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={location.address}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="website">
          <Form.Label>Store Website</Form.Label>
          <Form.Control
            type="text"
            name="website"
            value={location.website}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="googleMapLink">
          <Form.Label>Google Map Link</Form.Label>
          <Form.Control
            type="text"
            name="googleMapLink"
            value={location.googlemaplink}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={location.image}
            onChange={handleTextChange}
          />
        </Form.Group>
        {location.image ? (
          <img src={location.image} alt="location" />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
            alt="nope"
          />
        )}

        <br />
        <Button variant="primary" type="submit">
          Update location
        </Button>
      </Form>
      <br />
      <Link to={`/locations/${id}`}>
        <Button> Cancel</Button>
      </Link>
      {error && <p>{error}</p>}
    </section>
  );
}

export default EditLocation;
