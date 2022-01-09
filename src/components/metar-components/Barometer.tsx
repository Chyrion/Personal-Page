const Barometer = ({ data, unit }: any) => {
  return (
    <div className='metar-display__data'>
      <h3>Atmospheric Pressure</h3>
      <p className='metar-p'>{unit ? data.hg + ' inHg' : data.mb + ' mbar'}</p>
    </div>
  );
};

export default Barometer;
