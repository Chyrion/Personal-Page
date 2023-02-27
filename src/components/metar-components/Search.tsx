import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
  Box,
  Tab,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
} from '@mui/material';
import airports from './IcaoList';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const Search = ({ onSearch, unitChange, status }: any) => {
  const [icao, setIcao] = useState('');
  const [units, setUnits] = useState({
    temp: false,
    alt: false,
    baro: false,
  });
  const [tabValue, setTabValue] = useState('1');
  const [selectValue, setSelectValue] = useState('');

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
    newValue === '2' ? setSelectValue('') : console.log();
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue !== '') {
      onSearch({ selectValue });
    }
  }, [selectValue]);

  return (
    <Box className='metar-box'>
      <form className='metar-search-form' onSubmit={onSubmit}>
        <div className='metar-searchbox'>
          <TabContext value={tabValue}>
            <TabList onChange={handleTabChange} textColor='primary'>
              <Tab label='Search' value='1' />
              <Tab label='Select' value='2' />
              <Tab label='About' value='3' />
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
            <TabPanel
              value='2'
              sx={{
                padding: 0,
                marginTop: '1em',
                marginBottom: '1em',
              }}>
              <FormControl fullWidth>
                <InputLabel id='icao-select-dropdown-label'>Airport</InputLabel>
                <Select
                  labelId='icao-select-dropdown-label'
                  id='icao-select-dropdown'
                  value={selectValue}
                  onChange={handleSelectChange}
                  label='Airport'
                  name='airport'
                  color='primary'>
                  <MenuItem value=''>None</MenuItem>
                  {airports.map((elem: any, index: number) => (
                    <MenuItem value={elem.icao} key={index}>
                      {elem.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TabPanel>
            <TabPanel value='3' sx={{ padding: 0 }}>
              <h3 style={{ marginTop: 16, marginBottom: 16 }}>What is this?</h3>
              <p>
                This little app fetches weather from any given airport, and
                returns it in an easy-to-read format. It works by supplying a
                4-letter{' '}
                <a href='https://en.wikipedia.org/wiki/ICAO_airport_code'>
                  ICAO code
                </a>{' '}
                to an <a href='https://www.checkwxapi.com/'>external API</a>,
                which then responds with the weather information. The data is
                then parsed and sent through to be displayed!
              </p>
            </TabPanel>
          </TabContext>
        </div>
        {tabValue !== '3' ? (
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
        ) : (
          <></>
        )}
      </form>
    </Box>
  );
};

export default Search;
