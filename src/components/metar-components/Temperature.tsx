const Temperature = ({ temperature, dew, unit }: any) => {
  return (
    <div className='metar-display__data'>
      <h3>Temperature</h3>
      <p className='metar-p'>
        {unit
          ? temperature.fahrenheit +
            ' \xB0F, dewpoint ' +
            dew.fahrenheit +
            ' \xB0F'
          : temperature.celsius +
            ' \xB0C, dewpoint ' +
            dew.celsius +
            ' \xB0C'}{' '}
      </p>
    </div>
  );
};

export default Temperature;
