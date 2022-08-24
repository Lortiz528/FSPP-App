import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './Components/Home/Home';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Index from './Pages/Index';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';
import About from './Pages/About';

//components
import Navbar from './Components/Navbar/Navbar';
import Collections from './Components/Collections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/amiibos" element={<Index />} />
          <Route path="/amiibos/new" element={<New />} />
          <Route path="/amiibos/:id" element={<Show />} />
          <Route path="/amiibos/:id/edit" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
