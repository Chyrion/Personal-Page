import { useState } from 'react';
import { Stack, Box } from '@mui/material/';
import type {} from '@mui/lab/themeAugmentation';
import Search from './metar-components/Search';
import Temperature from './metar-components/Temperature';
import Humidity from './metar-components/Humidity';
import Barometer from './metar-components/Barometer';
import Clouds from './metar-components/Cloud';
import Wind from './metar-components/Wind';
import { blueGrey } from '@mui/material/colors';

const Metar = () => {
  const [info, setInfo] = useState<any>([]);
  const [unit, setUnit] = useState({
    temp: false,
    alt: false,
    baro: false,
  });
  const [reqStatus, setReqStatus] = useState(1);

  const getData = (apt: any) => {
    if (apt.icao.length === 4) {
      const getInfo = async (apt: any) => {
        const infoFetched = await fetchInfo(apt);
        if (infoFetched.results === 1) {
          setInfo(infoFetched.data[0]);
          setReqStatus(1);
        } else {
          setReqStatus(0);
        }
      };
      getInfo(apt);
    }
  };

  const fetchInfo = async (apt: any) => {
    let url = 'https://chyrion-backend.herokuapp.com/metar/' + apt.icao;
    const data = await fetch(url).then((response) => {
      return response.json();
    });
    return data;
  };

  const handleUnits = (u: any) => {
    if (u.u === 'temp') {
      setUnit({ ...unit, temp: !unit.temp });
    } else if (u.u === 'alt') {
      setUnit({ ...unit, alt: !unit.alt });
    } else if (u.u === 'baro') {
      setUnit({ ...unit, baro: !unit.baro });
    }
  };

  return (
    <div className='metar'>
      <div className='metar-top'>
        <h1>METAR Lookup</h1>
      </div>
      <div className='metar-container'>
        <div className='metar-search'>
          <Search
            onSearch={getData}
            unitChange={handleUnits}
            status={reqStatus}
          />
        </div>
        <Box
          className='metar-display'
          sx={{
            backgroundColor: blueGrey[900],
            borderRadius: '1em',
            boxShadow: '0px 0.5em 0px rgba(0, 0, 0, 0.5)',
          }}>
          {info !== undefined && info.length !== 0 ? (
            <Stack sx={{ marginLeft: '1em', marginRight: '1em' }}>
              <h1>
                {info.icao} - {info.station.name}
              </h1>
              <Temperature
                temperature={info.temperature}
                dew={info.dewpoint}
                unit={unit.temp}
              />
              <Wind data={info.wind} />
              <Clouds data={info.clouds} unit={unit.alt} />
              <Humidity data={info.humidity} />
              <Barometer data={info.barometer} unit={unit.baro} />
            </Stack>
          ) : (
            <></>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Metar;
