import { North } from '@mui/icons-material';

const Wind = ({ data }: any) => {
  let res = '';

  const windCheck = () => {
    res =
      data !== undefined
        ? (data.degrees === 0
            ? 'Variable direction at ' + data.speed_kts + ' kts'
            : data.degrees < 100
            ? '0' + data.degrees + '\xB0 at ' + data.speed_kts + ' kts'
            : data.degrees + '\xB0 at ' + data.speed_kts + ' kts') +
          (data.gust_kts !== undefined
            ? ', gusting ' + data.gust_kts + ' kts'
            : '')
        : 'Calm';
    return res;
  };

  return (
    <div className='metar-display__data'>
      <h3>Wind</h3>
      <div className='wind-box'>
        <div className='wind-lbox'>
          <p className='metar-p'>{windCheck()}</p>
        </div>
        <div className='wind-rbox'>
          <North
            className='wind-icon'
            style={{ transform: `rotate(${data.degrees}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Wind;
