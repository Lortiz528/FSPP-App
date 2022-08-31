import Amiibos from '../Components/Index/Amiibos';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


function AmiiboIndex() {
  return (
    <div>
      <h1>Amiibos Collection</h1>
      <Button variant='light'>
        <Link to='/amiibos/new'>
         Add Amiibo to Your Collection
        </Link>
        </Button>
        
      
      <Amiibos />
    </div>
  );
}

export default AmiiboIndex;
