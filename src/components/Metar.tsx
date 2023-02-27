import { useState } from 'react';
import { Stack, Box } from '@mui/material/';
import type {} from '@mui/lab/themeAugmentation';
import {
  Search,
  Temperature,
  Humidity,
  Barometer,
  Clouds,
  Wind,
} from './metar-components/MetarComponents';
import Conditions from './metar-components/Conditions';

const Metar = () => {
  const [info, setInfo] = useState<any>([]);
  const [unit, setUnit] = useState({
    temp: false,
    alt: false,
    baro: false,
  });
  const [reqStatus, setReqStatus] = useState(1);

  const getData = (apt: any) => {
    var _icao;
    apt.icao === undefined ? (_icao = apt.selectValue) : (_icao = apt.icao);
    if (_icao.length === 4) {
      const getInfo = async (icao: string) => {
        const infoFetched = await fetchInfo(icao);
        if (infoFetched.results === 1) {
          setInfo(infoFetched.data[0]);
          setReqStatus(1);
        } else {
          setReqStatus(0);
        }
      };
      getInfo(_icao);
    }
  };

  const fetchInfo = async (icao: string) => {
    console.log(icao);
    let url = 'https://metar-backend.ey.r.appspot.com/metar/' + icao;
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
        {info !== undefined && info.length !== 0 ? (
          <Box className='metar-display metar-box'>
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
              {info.conditions ? <Conditions data={info.conditions} /> : <></>}
              <Humidity data={info.humidity} />
              <Barometer data={info.barometer} unit={unit.baro} />
            </Stack>
          </Box>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Metar;
