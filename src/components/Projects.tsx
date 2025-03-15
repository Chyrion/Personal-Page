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
        <li>
          <a href='https://github.com/Chyrion/God-Gamer'>
            God Gamer: A simple Discord bot for figuring out when to game with
            your friends!
          </a>
        </li>
        <li>
          <a href='https://github.com/Chyrion/Advent-of-Code'>
            Advent of Code: Browse through my various Advent of Code solutions
            (I haven't been very active on them...)
          </a>
        </li>
        <li>
          <Link to={'/Configurator'}>
            Machine configurator: A quick proof-of-concept project
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
