import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  Box,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const Search = ({ onSearch, unitChange }: any) => {
  const [icao, setIcao] = useState('');
  const [units, setUnits] = useState({
    temp: false,
    alt: false,
    baro: false,
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    onSearch({ icao });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var u = event.target.name;
    unitChange({ u });
    u == 'temp'
      ? setUnits({ ...units, temp: !units.temp })
      : u == 'alt'
      ? setUnits({ ...units, alt: !units.alt })
      : u == 'baro'
      ? setUnits({ ...units, baro: !units.baro })
      : console.log('erroor');
  };

  //useEffect(() => {
  //  unitChange({ units });
  //}, [units]);
  return (
    <Box
      sx={{
        backgroundColor: blueGrey[900],
        borderRadius: '1em',
        boxShadow: '0px 0.5em 0px rgba(0, 0, 0, 0.5)',
      }}>
      <form className='metar-search-form' onSubmit={onSubmit}>
        <div className='metar-searchbox'>
          <ul>
            <TextField
              id='icao-in'
              type='text'
              label='ICAO'
              variant='standard'
              inputProps={{
                maxLength: 4,
              }}
              onChange={(e) => setIcao(e.target.value)}
            />
            <Button onClick={onSubmit}>Search</Button>
          </ul>
        </div>
        <FormGroup>
          <h3 className='metar-unit-h3'>Temperature</h3>
          <FormControlLabel
            control={<Switch onChange={handleChange} name='temp' />}
            label={units.temp ? 'Fahrenheit' : 'Celsius'}
          />
          <h3 className='metar-unit-h3'>Altitude</h3>
          <FormControlLabel
            control={<Switch onChange={handleChange} name='alt' />}
            label={units.alt ? 'Feet' : 'Meters'}
          />
          <h3 className='metar-unit-h3'>Pressure</h3>
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
