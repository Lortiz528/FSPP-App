import './NewConsole.scss';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import creationSound from '/Users/lortiz/Documents/dev/FSPP-App/front-end/src/Sounds/mixkit-completion-of-a-level-2063.wav';

const API = process.env.REACT_APP_API_URL;

function NewConsole() {
  const navigate = useNavigate();
  const [console, setConsole] = useState({
    name: '',
    brand: '',
    quantity: 0,
    color: '',
    has_box: false,
    is_sealed: false,
    image: '',
  });

  const [error, setError] = useState('');

  const handleTextChange = (event) => {
    setConsole({
      ...console,
      [event.target.id]: event.target.value,
    });
  };

  const playAudio = () => {
    new Audio(creationSound).play();
  };

  const handleCheckbox = () => {
    setConsole({
      ...console,
      has_box: !console.has_box,
      is_sealed: !console.is_sealed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/consoles/new`, console)
      .then(() => {
        playAudio();
        navigate('/consoles');
      })
      .catch((err) => setError(err));
  };

  return (
    <section>
      <h1>Add Console</h1>
      <Form onSubmit={handleSubmit} className="newForm">
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={console.name}
            onChange={handleTextChange}
            placeholder="console name.."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="brand">brand</Form.Label>
          <Form.Control
            id="brand"
            type="text"
            value={console.brand}
            onChange={handleTextChange}
            placeholder="Nintendo, Sony, Microsoft, etc..."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="color">Color</Form.Label>
          <Form.Control
            id="color"
            type="text"
            value={console.color}
            onChange={handleTextChange}
            placeholder="Gray, Black, Green, Etc.."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="quantity">Quantity</Form.Label>
          <Form.Control
            id="quantity"
            type="number"
            value={console.quantity}
            onChange={handleTextChange}
            placeholder="1,2,3,etc..."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image Url</Form.Label>
          <Form.Control
            id="image"
            type="text"
            value={console.image}
            onChange={handleTextChange}
            placeholder="https://image.com"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="has_box">Has Box?</Form.Label>
          <Form.Check
            id="has_box"
            type="checkbox"
            value={console.has_box}
            onChange={handleCheckbox}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="is_sealed">Factory Sealed?</Form.Label>
          <Form.Check
            id="is-sealed"
            type="checkbox"
            value={console.is_sealed}
            onChange={handleCheckbox}
          ></Form.Check>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button>
        <Link to="/consoles">Go Back</Link>
      </Button>
    </section>
  );
}

export default NewConsole;
