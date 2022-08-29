import './ConsoleShow.scss';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import deleteSound from '/Users/lortiz/Documents/dev/FSPP-App/front-end/src/Sounds/mixkit-player-losing-or-failing-2042.wav';

const API = process.env.REACT_APP_API_URL;

const Console = () => {
  const [console, setConsole] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/consoles/${id}`)
      .then((res) => setConsole(res.data))
      .catch((err) => setError(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/consoles/${id}`)
      .then((res) => {
        playAudio();
        navigate('/consoles');
      })
      .catch((err) => setError(err));
  };

  const playAudio = () => {
    new Audio(deleteSound).play();
  };

  return (
    <article className="showconsoleDetails">
      {error && <p className="error">{error}</p>}

      <div className="consolestats">
        <h2>
          {console.brand} {console.name}
        </h2>
        <img src={console.image} alt={console.name} />
        <h5>Color: {console.color}</h5>
        <h5>Quantity in collection: {console.quantity}</h5>
        <h5>Has Box? {console.has_box ? 'True' : 'False'}</h5>
        <h5>Factory Sealed? {console.is_sealed ? 'True' : 'False'}</h5>
      </div>

      <div className="consoleNav">
        <Link to="/consoles">
          <Button variant="primary">Back</Button>
        </Link>
        <Link to={`/consoles/${id}/edit`}>
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

export default Console;
