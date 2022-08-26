import './ConsoleEdit.scss';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
//import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function EditConsole() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [console, setconsole] = useState({
    name: '',
    brand: '',
    quantity: 0,
    color: '',
    has_box: false,
    is_sealed: false,
    image: '',
  });

  useEffect(() => {
    axios
      .get(`${API}/consoles/${id}`)
      .then((res) => {
        setconsole(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  const handleTextChange = (event) => {
    setconsole({
      ...console,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckbox = () => {
    setconsole({ ...console, has_box: !console.has_box });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/consoles/${id}`, console)
      .then((res) => {
        navigate('/consoles');
        // toast.success("Snack updated successfully!");
      })
      .catch((err) => {
        // toast.error("Error updating snack!");
      });
  };

  return (
    <section>
      {/* <ToastContainer /> */}
      <h1>Edit console</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={console.name}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={console.brand}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={console.quantity}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={console.image}
            onChange={handleTextChange}
          />
        </Form.Group>

        {console.has_box ? (
          <Form.Group>
            <Form.Label htmlFor="has_box">No longer have the Box?</Form.Label>
            <Form.Check
              id="has_box"
              type="checkbox"
              value={console.has_box}
              onChange={handleCheckbox}
            ></Form.Check>
          </Form.Group>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="has_box">Acquire a Box?</Form.Label>
            <Form.Check
              id="has_box"
              type="checkbox"
              value={console.has_box}
              onChange={handleCheckbox}
            ></Form.Check>
          </Form.Group>
        )}
        <br />

        {console.is_sealed ? (
          <Form.Group>
            <Form.Label htmlFor="is_sealed">
              No longer factory sealed?
            </Form.Label>
            <Form.Check
              id="is_sealed"
              type="checkbox"
              value={console.is_sealed}
              onChange={handleCheckbox}
            ></Form.Check>
          </Form.Group>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="has_box">Factory Sealed?</Form.Label>
            <Form.Check
              id="is_sealed"
              type="checkbox"
              value={console.is_sealed}
              onChange={handleCheckbox}
            ></Form.Check>
          </Form.Group>
        )}
        <img src={console.image} alt="console" />

        <br />
        <br />

        <Button variant="primary" type="submit">
          Update console
        </Button>
      </Form>
      <br />
      <Link to={`/consoles/${id}`}>
        <Button> Cancel</Button>
      </Link>
      {error && <p>{error}</p>}
    </section>
  );
}

export default EditConsole;
