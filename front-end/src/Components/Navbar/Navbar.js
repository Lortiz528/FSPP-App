import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Navbar() {
  return (
    <nav>
      <h1 className="navSnackLink">
        <Link to="/">Go Home</Link>
      </h1>

      <h1 className="navSnackLink">
        <Link to="/amiibos">Amiibos</Link>
      </h1>
      <h1>
        <Button variant="outline-light" className="newAmiiboButton">
          <Link to="/amiibos/new" className="navNewAmiibo">
            New Amiibo
          </Link>
        </Button>
      </h1>
      <Link to='/about' >About</Link>
    </nav>
  );
}

export default Navbar;
