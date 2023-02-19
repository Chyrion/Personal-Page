import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projects-main' style={{ gridArea: 'cont-mid' }}>
      <h1>My projects</h1>
      <ul>
        <li>
          <Link to={'/Metar'}>METAR Lookup</Link>
        </li>
        <li>
          <a href='https://github.com/Chyrion/Junction_nexiproject'>
            Junction 2022: NFC Payment Card Reader
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
