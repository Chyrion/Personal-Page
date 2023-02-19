import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Home';
import Metar from './components/Metar';
import About from './components/About';
import Projects from './components/Projects';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
  },
});

const App = () => {
  const menuItems = {
    menu1: ['METAR', 'Testbench'],
    menu2: ['Placeholder1', 'Placeholder2'],
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <div className='logo top'>
          <h1>Chyrion</h1>
        </div>
        <Router>
          <div className='nav-menu top'>
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
              to='/About'>
              About
            </Button>
            <Button
              className='nav-btn'
              size='large'
              component={NavLink}
              to='/Projects'>
              Projects
            </Button>
          </div>
          <Routes>
            <Route path='/Metar' element={<Metar />} />
            <Route path='/Personal-Page' element={<Home />} />
            <Route
              path='/'
              element={<Navigate to='/Personal-Page' replace={true} />}
            />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </Router>
        <div className='footer'>
          <p className='footer-text'>&#xa9; Vili Laine 2022</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
