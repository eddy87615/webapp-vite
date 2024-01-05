import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Star from './Star/Star';
import Home from './Home';
import Astronomy from './Astronomy/Astronomy';
import MarsRover from './MarsRover/MarsRover';
import Library from './Library/Library';

import './index.css';
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Star />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Astronomy" element={<Astronomy />} />
        <Route path="/MarsRover" element={<MarsRover />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  </>
);
