import './AmiiboNew.scss';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import creationSound from '../../mixkit-completion-of-a-level-2063.wav';

const API = process.env.REACT_APP_API_URL;
const amiiboAPI = 'https://www.amiiboapi.com/api/amiibo/';

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
  const [amiiboData, setAmiiboData] = useState([]);
  const [display, setDisplay] = useState(false);

  const fetchAmiiboData = () => {
    fetch(amiiboAPI)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.amiibo);
        setAmiiboData(data.amiibo);
      })
      .catch((err) => console.log(err));
  };

  const handleAmiiboFetchButton = (e) => {
    e.preventDefault();
    fetchAmiiboData();
    setDisplay(!display);
  };

  const playAudio = () => {
    new Audio(creationSound).play();
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
      .post(`${API}/amiibos/new`, amiibo)
      .then(() => {
        playAudio();
        notify();
      })
      .catch((err) => {
        setError(err);
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
      'Amiibo has been Added to your Collection! \n You will be redirected in 2 seconds.',
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

  const amiiboImageFillForm = (e) => {
    e.preventDefault();
    setAmiibo({
      ...amiibo,
      image: e.target.src,
    });
  };

  const amiiboNameFillForm = (e) => {
    e.preventDefault();
    //console.log(e.target.innerHTML);
    setAmiibo({
      ...amiibo,
      name: e.target.innerHTML,
    });
  };

  const amiiboSeriesFillForm = (e) => {
    e.preventDefault();
    setAmiibo({
      ...amiibo,
      series: e.target.innerHTML,
    });
  };

  let amiiboCards = amiiboData.map((amiiboItem, idx) => {
    return (
      <div key={idx} className="rosterCard">
        <h5 onClick={amiiboNameFillForm} className="rosterName">
          {amiiboItem.name}
        </h5>
        <h5 onClick={amiiboSeriesFillForm} className="rosterSeries">
          {amiiboItem.amiiboSeries}
        </h5>
        <img
          onClick={amiiboImageFillForm}
          src={amiiboItem.image}
          alt={amiiboItem.name}
        />
      </div>
    );
  });

  return (
    <div className="addNewPage">
      <section className="newAmiiboFormSection">
        <h1>Add Amiibo</h1>
        <Form onSubmit={handleSubmit} className="newForm">
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              value={amiibo.name}
              onChange={handleTextChange}
              placeholder="Amiibo name.."
              required
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
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="is_boxed">Boxed?</Form.Label>
            <Form.Check
              id="is_boxed"
              type="switch"
              value={amiibo.is_boxed}
              onChange={toggleSwitch}
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
        <br />
        <Button className="gobackbtn" variant="primary">
          <Link to="/amiibos">Go Back</Link>
        </Button>
        <br></br>
      </section>
      <div className="rosterPlay">
        <Button onClick={handleAmiiboFetchButton}>
          {display ? 'Hide Amiiboo Roster' : 'Show Amiibo Roster'}
        </Button>
        {error && <p>{error}</p>}
        {display ? (
          <div>
            <br />
            <h3 className="clickInstructions">
              Auto-Fill the form by clicking on an amiibos name, series, and
              Image!
            </h3>
            <br />
            <div className="amiiboImageCard">{amiiboCards}</div>
          </div>
        ) : null}
      </div>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
}

export default NewAmiibo;
