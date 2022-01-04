import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';

import Home from './components/Home';
import Metar from './components/Metar';

const App = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <h1>Hello</h1>
      </div>
      <Router>
        <div className='menu'>
          <Button component={NavLink} to='/'>
            Home
          </Button>
          <Button component={NavLink} to='/Metar'>
            METAR
          </Button>
        </div>
        <Routes>
          <Route path='/Metar' element={<Metar />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
