import './ConsoleEdit.scss';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import success from '../../mixkit-player-boost-recharging-2040.wav';

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
        setError(err);
        navigate('/*');
      });
  }, [id, navigate]);

  const playAudio = () => {
    new Audio(success).play();
  };

  const handleTextChange = (event) => {
    setconsole({
      ...console,
      [event.target.id]: event.target.value,
    });
  };

  const toggleBoxedSwitch = () => {
    setconsole({
      ...console,
      has_box: !console.has_box,
    });
  };

  const toggleSealedSwitch = () => {
    setconsole({
      ...console,
      is_sealed: !console.is_sealed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/consoles/${id}`, console)
      .then((res) => {
        playAudio();
        notify();
      })
      .catch((err) => {
        toast.error('Error updating Console!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const notify = () => {
    toast.success(
      'Console has been Updated! \n You will be redirected in 2 seconds.',
      {
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      }
    );
    setTimeout(() => {
      navigate('/consoles');
    }, 4100);
  };

  return (
    <section className="editConsoleForm">
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
            required
          />
        </Form.Group>
        <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={console.color}
            onChange={handleTextChange}
            required
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
            <Form.Label htmlFor="has_box">
              No longer have the Box? Hit the switch!
            </Form.Label>
            <Form.Check
              id="has_box"
              type="switch"
              value={console.has_box}
              onChange={toggleBoxedSwitch}
            ></Form.Check>
          </Form.Group>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="has_box">
              Acquire a Box? Hit the Switch!
            </Form.Label>
            <Form.Check
              id="has_box"
              type="switch"
              value={console.has_box}
              onChange={toggleBoxedSwitch}
            ></Form.Check>
          </Form.Group>
        )}
        <br />

        {console.is_sealed ? (
          <Form.Group>
            <Form.Label htmlFor="is_sealed">
              No longer factory sealed? Switch it back!
            </Form.Label>
            <Form.Check
              id="is_sealed"
              type="switch"
              value={console.is_sealed}
              onChange={toggleSealedSwitch}
            ></Form.Check>
          </Form.Group>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="has_box">
              Factory Sealed? Hit the Switch!
            </Form.Label>
            <Form.Check
              id="is_sealed"
              type="switch"
              value={console.is_sealed}
              onChange={toggleSealedSwitch}
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
      <ToastContainer autoClose={2000} theme="dark" />
    </section>
  );
}

export default EditConsole;
