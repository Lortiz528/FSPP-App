import Amiibos from '../Components/Index/Amiibos';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


function AmiiboIndex() {
  return (
    <div>
      <h1>Amiibos Collection</h1>
      
        <Link to='/amiibos/new'>
        Create New Amiibo
        </Link>
      
      <Amiibos />
    </div>
  );
}

export default AmiiboIndex;
