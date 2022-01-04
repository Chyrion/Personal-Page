import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';

import Home from './components/Home';
import Metar from './components/Metar';

const App = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <h1>Chyrion</h1>
      </div>
      <Router>
        <div className='nav-menu'>
          <Button
            className='nav-btn'
            size='large'
            component={NavLink}
            to='/Personal-Page'>
            Home
          </Button>
          <Button
            className='nav-btn'
            size='large'
            component={NavLink}
            to='/Metar'>
            METAR
          </Button>
        </div>
        <Routes>
          <Route path='/Metar' element={<Metar />} />
          <Route path='/Personal-Page' element={<Home />} />
          <Route
            path='/'
            element={<Navigate to='/Personal-Page' replace={true} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
