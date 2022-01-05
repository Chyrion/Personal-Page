import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Search from './metar-components/Search';
import Temperature from './metar-components/Temperature';
import Humidity from './metar-components/Humidity';
import Barometer from './metar-components/Barometer';

const Metar = () => {
  const [info, setInfo] = useState<any>([]);
  const [unit, setUnit] = useState({
    temp: false,
    alt: false,
    baro: false,
  });
  const key = process.env.REACT_APP_METAR_KEY;

  const getData = (apt: any) => {
    if (apt.icao.length == 4) {
      const getInfo = async (apt: any) => {
        const infoFetched = await fetchInfo(apt);
        setInfo(infoFetched.data[0]);
      };
      getInfo(apt);
      console.log(info);
    } else {
      console.log('no');
    }
  };

  const fetchInfo = async (apt: any) => {
    let url =
      'https://api.checkwx.com/metar/' + apt.icao + '/decoded?x-api-key=' + key;
    //const resu = await fetch(url);
    //const data = await resu.json();
    const data = fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        const d = jsonResponse;
        return d;
      })
      .catch((error) => {
        console.log(error);
        console.log('wtf u do?');
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
          <Search onSearch={getData} unitChange={handleUnits} />
        </div>
        <div className='metar-display'>
          {info !== undefined && info.length !== 0 ? (
            <Stack>
              <h1>
                {info.icao} - {info.station.name}
              </h1>
              <Temperature
                temperature={info.temperature}
                dew={info.dewpoint}
                unit={unit.temp}
              />
              <Humidity data={info.humidity} />
              <Barometer data={info.barometer} unit={unit.baro} />
            </Stack>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metar;
