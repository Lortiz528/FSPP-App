import './newlocation.scss'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import creationSound from '../../mixkit-completion-of-a-level-2063.wav';

const API = process.env.REACT_APP_API_URL;

function NewLocation() {
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    store_name: '',
    address: '',
    website: '',
    googleMapLink: '',
    image: '',
  });

  const [error, setError] = useState('');
  
  const playAudio = () => {
    new Audio(creationSound).play();
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
      .post(`${API}/locations/new`, location)
      .then(() => {
        playAudio();
        navigate('/locations');
      })
      .catch((err) => setError(err));
  };

  return (
    <div>
      <section className="newLocationFormSection">
        <h1>Add A Location</h1>
        <Form onSubmit={handleSubmit} className="newForm">
          <Form.Group>
            <Form.Label htmlFor="store_name">Store Name</Form.Label>
            <Form.Control
              id="store_name"
              type="text"
              value={location.store_name}
              onChange={handleTextChange}
              placeholder="gamestop..."
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control
              id="address"
              type="text"
              value={location.address}
              onChange={handleTextChange}
              placeholder="123 Main St. Brooklyn, NY 11234.."
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="googlemaplink">Google Map Link</Form.Label>
            <Form.Control
              id="googlemaplink"
              type="text"
              value={location.googleMapLink}
              onChange={handleTextChange}
              placeholder="https://maps.com..."
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="image">Image Url</Form.Label>
            <Form.Control
              id="image"
              type="text"
              value={location.image}
              onChange={handleTextChange}
              placeholder="https://image.com"
            ></Form.Control>
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <br />
      <Link to="/locations">Go Back</Link>
      <br />
      <br />
      {error && <p>{error}</p>}
    </div>
  );
}

export default NewLocation;
