import Amiibos from '../Components/Index/Amiibos';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


function AmiiboIndex() {
  return (
    <div>
      <h1>Amiibos Collection</h1>
      <Button variant="outline-light">
        <Link to='/amiibos/new'>
        Create New Amiibo
        </Link>
      </Button>
      <Amiibos />
    </div>
  );
}

export default AmiiboIndex;
