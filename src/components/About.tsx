import pic_of_me from '../media/photo_of_me.jpg';

const About = () => {
  return (
    <div className='about-main' style={{ gridArea: 'cont-mid' }}>
      <h1>About me</h1>
      <p>
        <img
          className='me-picture'
          src={pic_of_me}
          style={{
            maxWidth: '35%',
            borderRadius: '50%',
            float: 'left',
          }}
        />
        I am a first year Computer Science student at the University of
        Helsinki. My primary programming focus is towards web development using
        TypeScript and React, but I also have experience in languages such as
        Python, C# and Lua. I am looking to build a career around web/software
        development or cybersecurity.
      </p>
      <p></p>
    </div>
  );
};

export default About;
