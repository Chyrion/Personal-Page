const Conditions = ({ data }: any) => {
  return (
    <div className='metar-display__data'>
      <h3>Conditions</h3>
      <p className='metar-p'>{data[0].text}</p>
    </div>
  );
};

export default Conditions;
