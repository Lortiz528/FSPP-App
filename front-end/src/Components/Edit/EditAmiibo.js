import './AmiiboEdit.scss';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import success from '../../mixkit-player-boost-recharging-2040.wav';

const API = process.env.REACT_APP_API_URL;

function EditAmiibo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [amiibo, setAmiibo] = useState({
    name: '',
    series: '',
    is_boxed: false,
    quantity: 0,
    image: '',
  });

  useEffect(() => {
    axios
      .get(`${API}/amiibos/${id}`)
      .then((res) => {
        setAmiibo(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  //sounds
  //https://stackoverflow.com/questions/54114171/how-to-play-an-mp3-once-onclick-in-react

  const playAudio = () => {
    new Audio(success).play();
  };

  const handleTextChange = (event) => {
    setAmiibo({
      ...amiibo,
      [event.target.id]: event.target.value,
    });
  };

  const toggleSwitch = () => {
    setAmiibo({ ...amiibo, is_boxed: !amiibo.is_boxed });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/amiibos/${id}`, amiibo)
      .then((res) => {
        playAudio();
        notify();
      })
      .catch((err) => {
        toast.error('Error updating Amiibo!', {
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
      'Amiibo has been Updated! \n You will be redirected in 2 seconds.',
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
      navigate('/amiibos');
    }, 3100);
  };

  return (
    <section className="editAmiiboForm">
      <h1>Edit Amiibo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={amiibo.name}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="series">
          <Form.Label>Series</Form.Label>
          <Form.Control
            type="text"
            name="series"
            value={amiibo.series}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        {amiibo.is_boxed ? (
          <Form.Group>
            <Form.Label htmlFor="is_boxed">
              Did You unbox this one? Hit the Switch
            </Form.Label>
            <Form.Check
              id="is_boxed"
              type="switch"
              value={amiibo.is_boxed}
              onChange={toggleSwitch}
            ></Form.Check>
          </Form.Group>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="is_boxed">
              Is it in Box? Hit the Switch
            </Form.Label>
            <Form.Check
              id="is_boxed"
              type="switch"
              value={amiibo.is_boxed}
              onChange={toggleSwitch}
            ></Form.Check>
          </Form.Group>
        )}

        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={amiibo.quantity}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={amiibo.image}
            onChange={handleTextChange}
          />
          <img src={amiibo.image} alt="amiibo" />
        </Form.Group>

        <br />

        <Button variant="primary" type="submit">
          Update Amiibo
        </Button>
      </Form>
      <button>
        <Link to="/amiibos">Go Back</Link>
      </button>
      {error && <p>{error}</p>}
      <ToastContainer autoClose={2000} theme="dark" />
    </section>
  );
}

export default EditAmiibo;
