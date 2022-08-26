import Consoles from '../Components/Index/Consoles';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ConsoleIndex() {
  return (
    <div>
      <h1>Console Collection</h1>
      <Button variant="outline-light">
        <Link to="/consoles/new">Add a Console</Link>
      </Button>
      <Consoles />
    </div>
  );
}

export default ConsoleIndex;
