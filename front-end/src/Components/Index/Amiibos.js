import './index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';

function Amiibos() {
  const API = process.env.REACT_APP_API_URL;

  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    axios.get(`${API}/amiibos`).then((res) => {
      setAmiibos(res.data);
    });
  }, [API]);

  return (
    <div className="amiibos">
      <section className="amiibo">
        {amiibos.map((amiibo) => (
          <div key={amiibo.id} className="amiiboCard">
            <Link to={`/amiibos/${amiibo.id}`}>
              <img
                src={amiibo.image}
                alt={amiibo.name}
                className="amiiboImage"
              />
            </Link>
            <h4>{amiibo.name}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Amiibos;
