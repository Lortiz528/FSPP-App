import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './Components/Home/Home';
import AmiiboNew from './Pages/AmiiboNew';
import AmiiboEdit from './Pages/AmiiboEdit';
import AmiiboIndex from './Pages/AmiiboIndex';
import AmiiboShow from './Pages/AmiiboShow';
import FourOFour from './Pages/FourOFour';
import About from './Pages/About';

import ConsoleIndex from './Pages/ConsoleIndex';
import ConsoleShow from './Pages/ConsoleShow';
import ConsoleNew from './Pages/ConsoleNew';
import ConsoleEdit from './Pages/ConsoleEdit';


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
          <Route path="/amiibos" element={<AmiiboIndex />} />
          <Route path="/amiibos/new" element={<AmiiboNew />} />
          <Route path="/amiibos/:id" element={<AmiiboShow />} />
          <Route path="/amiibos/:id/edit" element={<AmiiboEdit />} />
          <Route path="/consoles" element={<ConsoleIndex />} />
          <Route path="/consoles/:id" element={<ConsoleShow />} />
          <Route path="/consoles/new" element={<ConsoleNew />} />
          <Route path="/consoles/:id/edit" element={<ConsoleEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
