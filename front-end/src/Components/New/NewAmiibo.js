import './AmiiboNew.scss';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

function NewAmiibo() {
  const navigate = useNavigate();
  const [amiibo, setAmiibo] = useState({
    name: '',
    series: '',
    is_boxed: false,
    quantity: 0,
    image: '',
  });

  const [error, setError] = useState('');

  const handleTextChange = (event) => {
    setAmiibo({
      ...amiibo,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckbox = () => {
    setAmiibo({ ...amiibo, is_boxed: !amiibo.is_boxed });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/amiibos/new`, amiibo)
      .then(() => navigate('/amiibos'))
      .catch((err) => setError(err));
  };

  return (
    <section>
      <h1>Create Amiibo below</h1>
      <Form onSubmit={handleSubmit} className="newForm">
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={amiibo.name}
            onChange={handleTextChange}
            placeholder="Amiibo name.."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="series">Series</Form.Label>
          <Form.Control
            id="series"
            type="text"
            value={amiibo.series}
            onChange={handleTextChange}
            placeholder="Animal crossing, Super Smash bros., Etc."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="is_boxed">Boxed?</Form.Label>
          <Form.Check
            id="is_boxed"
            type="checkbox"
            value={amiibo.is_boxed}
            onChange={handleCheckbox}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="quantity">Quantity</Form.Label>
          <Form.Control
            id="quantity"
            type="number"
            value={amiibo.quantity}
            onChange={handleTextChange}
            placeholder="1,2,3,etc..."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image Url</Form.Label>
          <Form.Control
            id="image"
            type="text"
            value={amiibo.image}
            onChange={handleTextChange}
            placeholder="https://image.com"
          ></Form.Control>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button>
        <Link to="/amiibos">Go Back</Link>
      </Button>
    </section>
  );
}

export default NewAmiibo;
