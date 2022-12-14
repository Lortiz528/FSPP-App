import './collections.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Collections() {
  const API = process.env.REACT_APP_API_URL;
  const [collections, setCollection] = useState([]);

  useEffect(() => {
    axios.get(`${API}/collections`).then((res) => {
      setCollection(res.data);
    });
  }, [API]);

  const collectionCards = collections.map((collection) => {
    return (
      <div className='collectcard' key={collection.id}>
        <h2><strong>{collection.name}</strong></h2>
        <Link to={`/${collection.name}`} >
        <img src={collection.image} alt={collection.name} />
        </Link>
      </div>
    );
  });

  return <section className="collectionCards">{collectionCards}</section>;
}

export default Collections;
