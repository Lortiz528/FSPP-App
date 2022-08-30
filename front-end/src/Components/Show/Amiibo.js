import './AmiiboShow.scss';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import deleteSound from '/Users/lortiz/Documents/dev/FSPP-App/front-end/src/mixkit-player-losing-or-failing-2042.wav'

const API = process.env.REACT_APP_API_URL;

const Amiibo = () => {
  const [amiibo, setAmiibo] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/amiibos/${id}`)
      .then((res) => setAmiibo(res.data))
      .catch((err) => setError(err));
  }, [id]);

  const playAudio = () => {
    new Audio(deleteSound).play();
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/amiibos/${id}`)
      .then((res) => {
         playAudio();
        navigate('/amiibos')
      })
      .catch((err) => setError(err));
  };

  return (
    <article className="showamiiboDetails">
      {error && <p className="error">{error}</p>}

      <div className="amiiboStats">
        <h2>{amiibo.name}</h2>
        <img src={amiibo.image} alt={amiibo.name} />
        <h5>Series: {amiibo.series}</h5>
        <h5>Boxed? {amiibo.is_boxed ? 'True' : 'False'}</h5>
        <h5>Quantity: {amiibo.quantity}</h5>
      </div>

      <div className="nav">
        <Link to="/amiibos">
          <Button variant="primary">Back</Button>
        </Link>
        <Link to={`/amiibos/${id}/edit`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <div>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Amiibo;
