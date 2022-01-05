const Humidity = ({ data }: any) => {
  return <p className='metar-p'>{data.percent} % humidity</p>;
};

export default Humidity;
