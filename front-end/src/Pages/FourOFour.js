import './FourOFour.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FourOFour() {
  return <div className="fourfour">
    <h1>Error!! No page found!</h1>
    <Button>
      <Link to='/' >Go Home</Link>
    </Button>

    
    </div>;
}

export default FourOFour;
