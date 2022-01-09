const Wind = ({ data }: any) => {
  let res = '';

  const windCheck = () => {
    console.log(data);
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
      <p className='metar-p'>{windCheck()}</p>
    </div>
  );
};

export default Wind;
