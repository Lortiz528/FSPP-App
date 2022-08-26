import './consolesIndex.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Consoles() {
  const API = process.env.REACT_APP_API_URL;

  const [consoles, setconsoles] = useState([]);

  useEffect(() => {
    axios.get(`${API}/consoles`).then((res) => {
      setconsoles(res.data);
    });
  }, [API]);

  return (
    <div className="consoles">
      <section className="console">
        {consoles.map((console) => (
          <div key={console.id} className="consoleCard">
            <Link to={`/consoles/${console.id}`}>
              <img
                src={console.image}
                alt={console.name}
                className="consoleImage"
              />
              <h4>{console.name}</h4>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Consoles;
