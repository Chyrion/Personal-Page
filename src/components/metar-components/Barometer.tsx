const Barometer = ({ data, unit }: any) => {
  return (
    <p className='metar-p'>{unit ? data.hg + ' inHg' : data.mb + ' mbar'}</p>
  );
};

export default Barometer;
