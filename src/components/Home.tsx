import pic_of_me from '../media/photo_of_me.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='content cont-mid'>
      <div className='home-img'>
        <div className='home-img__img'>
          <img src={pic_of_me} alt='me' />
        </div>
        <div className='home-img__gradient' />
        <div className='home-img__text'>
          <Link to={'/About'}>
            <h1>Howdy</h1>
          </Link>
        </div>
      </div>
      <div className='bottom'>
        <h1>Hello!</h1>
        <p>
          I am Vili, a 24-year-old Computer Science student at the University of
          Jyväskylä. Click my forehead to learn more about me!
          <br /> <br />
          You can also browse through some of my projects on the{' '}
          <Link to={'/Projects'}>projects page!</Link>
        </p>
        <h6>not a visual designer btw</h6>
      </div>
    </div>
  );
};

export default Home;
