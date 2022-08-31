import './amiiboIndex.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

function Amiibos() {
  // const API = process.env.REACT_APP_API_URL;

  const [amiibos, setAmiibos] = useState([]);
  //const [sortedAmiibos, setSortedAmiibos] = useState([]);

  useEffect(() => {
    axios.get(`${API}/amiibos`).then((res) => {
      //setSortedAmiibos(res.data);
      setAmiibos(res.data)
    });
  }, []);

  //sort by amiibo.name and ammiibo.series

  // const sortName = (data, type) => {
  //   let sortedArr = data.sort((a, b) => {
  //     // console.log(a[type])
  //     if (a[type].toLowerCase() > b[type].toLowerCase()) return 1;
  //     if (a[type].toLowerCase() < b[type].toLowerCase()) return -1;
  //     return 0;
  //   });
  //   setSortedAmiibos(sortedArr);
  //   // console.log(sortedArr)
  // };

  return (
    <div className="amiibos">
      {/* <div className="sort-buttons">
        <button onClick={() => sortName(sortedAmiibos, 'name')}>
          Sort by Amiibo Name
        </button>
        <button onClick={() => sortName(sortedAmiibos, 'series')}>
          Sort by Amiibo Series
        </button>
      </div> */}
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
