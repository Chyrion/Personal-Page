const Humidity = ({ data }: any) => {
  return (
    <div className='metar-display__data'>
      <h3>Humidity</h3>
      <p className='metar-p'>{data.percent} % humidity</p>
    </div>
  );
};

export default Humidity;
