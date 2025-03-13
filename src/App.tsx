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
import Configurator from './components/Configurator';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        {window.matchMedia('(orientation:landscape)').matches ? (
          <div className='logo top'>
            <h1>Chyrion</h1>
          </div>
        ) : (
          <div className='top'></div>
        )}
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
            <Route path='/Configurator' element={<Configurator />} />
          </Routes>
        </Router>
        <div className='nav-end top'></div>
        <div className='footer'>
          <p className='footer-text'>Vili Laine 2025</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
