import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './Components/Home';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Index from './Pages/Index';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';

//components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amiibos" element={<Index />} />
          <Route path="/amiibos/new" element={<New />} />
          <Route path="/amiibos/:id" element={<Show />} />
          <Route path="/amiibos/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
