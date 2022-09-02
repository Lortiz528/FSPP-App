// import '../Components/Index/amiiboIndex.scss'
import Amiibos from '../Components/Index/Amiibos';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


function AmiiboIndex() {
  return (
    <div>
      <h1>Amiibos Collection</h1>
      <Button className='addamiibobtn' variant='primary' >
        <Link to='/amiibos/new'>
         Add Amiibo to Your Collection
        </Link>
        </Button>
        <br/>
        <Button className='shopamiibobtn' variant='primary'>
          <a href='https://www.mercari.com/search/?keyword=amiibo' >Shop for More</a>
        </Button>
        
      
      <Amiibos />
    </div>
  );
}

export default AmiiboIndex;
