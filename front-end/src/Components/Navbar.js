import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Navbar() {
  return (
    <nav>
      <h1 className="navSnackLink">
        <Link to="/">Go Home</Link>
      </h1>

      <h1 className="navSnackLink">
        <Link to="/amiibos">amiibos</Link>
      </h1>
      <h1>
        <Button variant="outline-light" className="newSnackButton">
          <Link to="/amiibos/new" className="navNewSnack">
            New Snack
          </Link>
        </Button>
      </h1>
    </nav>
  );
}

export default Navbar;
