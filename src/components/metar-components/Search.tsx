import React, { useState } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  Box,
  Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { blueGrey } from '@mui/material/colors';

const Search = ({ onSearch, unitChange, status }: any) => {
  const [icao, setIcao] = useState('');
  const [units, setUnits] = useState({
    temp: false,
    alt: false,
    baro: false,
  });
  const [tabValue, setTabValue] = useState('1');

  const onSubmit = (e: any) => {
    e.preventDefault();
    onSearch({ icao });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var u = event.target.name;
    unitChange({ u });
    u === 'temp'
      ? setUnits({ ...units, temp: !units.temp })
      : u === 'alt'
      ? setUnits({ ...units, alt: !units.alt })
      : u === 'baro'
      ? setUnits({ ...units, baro: !units.baro })
      : console.log('erroor');
  };

  const handleTabChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: blueGrey[900],
        borderRadius: '1em',
        boxShadow: '0px 0.5em 0px rgba(0, 0, 0, 0.5)',
      }}>
      <form className='metar-search-form' onSubmit={onSubmit}>
        <div className='metar-searchbox'>
          <TabContext value={tabValue}>
            <TabList onChange={handleTabChange}>
              <Tab label='Search' value='1' />
              <Tab label='Select' value='2' />
            </TabList>
            <TabPanel
              value='1'
              sx={{
                padding: 0,
              }}>
              <ul>
                <TextField
                  error={status === 0}
                  id='icao-in'
                  className='icao-text'
                  type='text'
                  label='ICAO'
                  variant='outlined'
                  sx={{
                    color: 'primary',
                  }}
                  inputProps={{
                    maxLength: 4,
                  }}
                  helperText={status === 0 ? 'Invalid ICAO or no data' : ''}
                  onChange={(e) => setIcao(e.target.value)}
                />
                <Button onClick={onSubmit} sx={{ color: 'primary' }}>
                  Search
                </Button>
              </ul>
            </TabPanel>
            <TabPanel value='2'>
              <p>yo</p>
            </TabPanel>
          </TabContext>
        </div>
        <FormGroup className='metar-unit'>
          <h3>Temperature</h3>
          <FormControlLabel
            control={<Switch onChange={handleChange} name='temp' />}
            label={units.temp ? 'Fahrenheit' : 'Celsius'}
          />
          <h3>Altitude</h3>
          <FormControlLabel
            control={<Switch onChange={handleChange} name='alt' />}
            label={units.alt ? 'Feet' : 'Meters'}
          />
          <h3>Pressure</h3>
          <FormControlLabel
            control={<Switch onChange={handleChange} name='baro' />}
            label={units.baro ? 'inHg' : 'mBar'}
          />
        </FormGroup>
      </form>
    </Box>
  );
};

export default Search;
