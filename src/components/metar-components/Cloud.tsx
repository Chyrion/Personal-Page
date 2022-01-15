import React from 'react';

const Cloud = ({ data, unit }: any) => {
  return (
    <>
      <p className='metar-p'>
        {data.text} at {unit ? data.feet + ' ft' : data.meters + ' m'}
      </p>
    </>
  );
};

const Clouds = ({ data, unit }: any) => {
  return (
    <div className='metar-display__data'>
      <h3>Clouds</h3>
      <div className='metar-display__cloud'>
        {data[0].code !== 'CLR' && data[0].code !== 'CAVOK'
          ? data.map((elem: any, index: number) => (
              <Cloud data={elem} unit={unit} key={index} />
            ))
          : 'Clear skies'}
      </div>
    </div>
  );
};

export default Clouds;
