const Temperature = ({ temperature, dew, unit }: any) => {
  return (
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
  );
};

export default Temperature;
