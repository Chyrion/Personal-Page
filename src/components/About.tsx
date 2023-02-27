import pic_of_me from '../media/photo_of_me.jpg';

interface WorkExperienceProps {
  name: string;
  from: Date;
  to?: Date;
  description: string;
}

const WorkExperience = ({
  name,
  from,
  to,
  description,
}: WorkExperienceProps) => {
  return (
    <div className='workExperienceEntry'>
      <h4>{name}</h4>
      <p style={{ color: 'rgb(255,255,255,0.75)' }}>
        {String(from.getMonth()).padStart(2, '0')}.{from.getFullYear()} -{' '}
        {String(to!.getMonth()).padStart(2, '0')}.{to!.getFullYear()}
      </p>
      <p>{description}</p>
      <p></p>
    </div>
  );
};

const About = () => {
  return (
    <div
      className='about-main'
      style={{
        gridArea: 'cont-mid',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h1>About me</h1>
      <div>
        <p>
          <img
            className='me-picture'
            src={pic_of_me}
            alt=''
            style={{
              maxWidth: '35%',
              maxHeight: '35%',
              minHeight: '10em',
              minWidth: '8em',
              borderRadius: '50%',
              float: 'left',
              padding: '0 1em',
            }}
          />
          I am a first year Computer Science student at the University of
          Helsinki. My primary programming focus is towards web development
          using TypeScript and React, but I also have experience in languages
          such as Python, C# and Lua. I am looking to build a career around
          web/software development or cybersecurity.
        </p>

        <p>
          <a href='https://www.dropbox.com/s/pzib5eczwomyf22/ViliLaine_Resume.pdf?dl=0'>
            Download my resume!
          </a>
        </p>
      </div>
      <div>
        <h2>Education</h2>
        {/* I know, WorkExperience used for education // it works, so I don't care to rename it */}
        <WorkExperience
          name='University of Helsinki'
          from={new Date(2022, 7)}
          to={new Date(2025, 5)}
          description='Bachelor of Science in Computer Science. GPA: 4.2, 31/180 credits (ongoing)'
        />
        <WorkExperience
          name='Kannaksen Lukio'
          from={new Date(2016, 8)}
          to={new Date(2021, 2)}
          description='International Baccalaureate diploma. 27 points total.'
        />
      </div>
      <div>
        <h2>Work experience</h2>
        <WorkExperience
          name='Lahden Aluetaksi'
          from={new Date(2019, 11)}
          to={new Date(2020, 8)}
          description='Worked as a driver for several taxis under Lahden Aluetaksi in Heinola on a per-shift basis,
           primarily as a substitute. Did a 1-month full-time period in June 2022.'
        />
        <WorkExperience
          name='Sector Alarm Oy'
          from={new Date(2019, 9)}
          to={new Date(2019, 9)}
          description='Door-to-door sales.'
        />
        <WorkExperience
          name='Hotelli Kumpeli Oy'
          from={new Date(2018, 6)}
          to={new Date(2018, 7)}
          description='Summer job: Property maintenance including cleaning, painting and managing incoming deliveries.
          Worked in reception for over-night shifts.'
        />
        <WorkExperience
          name='Päijät-Hämeen Sähkö ja Data'
          from={new Date(2015, 10)}
          to={new Date(2015, 10)}
          description='Trainee: Maintenance and updates for computers and related devices alongside office duties.'
        />
        <WorkExperience
          name='Jyränkölän Mediapaja'
          from={new Date(2015, 5)}
          to={new Date(2015, 5)}
          description='Trainee: Basic photography, simple computer duties.'
        />
      </div>
    </div>
  );
};

export default About;
