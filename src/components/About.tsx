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
          I am a third year Computer Science student at the University of
          Jyväskylä. I enjoy dabbling around in small projects using various
          languages, especially with <b>Python</b> for short scripts and
          challenges, and <b>GDScript</b> in Godot for game projects. However, I
          feel the most comfortable in web development using{' '}
          <b>TypeScript and React</b>, and derive the most amount of enjoyment
          from it as well. I also have varying levels of experience from several
          languages. In order of experience:{' '}
          <b>JavaScript, Java, C#, Lua, Haskell.</b> I am looking to build a
          career around web/software development or cybersecurity.
          <br /> <br />
          In my free time, I enjoy playing video games, mountain biking and
          following various motorsports series (rally and endurance racing in
          particular). I have a great deal of interest in all things automotive
          and aviation, both of which I love to experience through simulators!
          I've been sim racing for 12+ years, and have taken it up to an eSports
          level. I've competed both as an individual, as well as a team manager.
          Nowadays it just merely a fun pastime, though! I also am very curious
          about Japan and Japanese culture, and in university I picked up
          studying Japanese. It has been incredibly rewarding, and I currently
          have a long-term goal of visiting and staying in Japan for an extended
          period of time.
        </p>

        <p>
          <a href='https://www.dropbox.com/scl/fi/sorl0emmvblsseqew8ob8/Vili-Laine-Resume.pdf?rlkey=38fvg5vwerzbre1f7oyeh4ed6&st=on6acia0&dl=0'>
            Download my resume!
          </a>
        </p>

        <p>
          <h3>Contact me!</h3>
          <b>Email</b>: laine.vili@gmail.com <br />
          <b>Telegram</b>: @Chyrion
        </p>
      </div>
      <div>
        <h2>Education</h2>
        {/* I know, WorkExperience used for education // it works, so I don't care to rename it */}
        <WorkExperience
          name='University of Jyväskylä'
          from={new Date(2023, 8)}
          to={new Date(2026, 5)}
          description='Bachelor of Science in Computer Science. GPA: 3,56, 86/180 credits.'
        />
        <WorkExperience
          name='University of Helsinki'
          from={new Date(2022, 7)}
          to={new Date(2023, 5)}
          description='Bachelor of Science in Computer Science. Completed the first year before transferring.'
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
           primarily as a substitute. Did a 1-month full-time period in June 2020.'
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
