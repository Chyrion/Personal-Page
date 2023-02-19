import img_lmao from '../media/istockphoto-140008012-612x612.jpg';
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
        <h3>bottom text</h3>
        <h5>that's a link on my forehead btw</h5>
        <h6>not a visual designer btw</h6>
      </div>
    </div>
  );
};

export default Home;
