import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className='container'>
      <div className=''>
        <div className='flex-column'>
          <About />
          <Skills/>
          <Experiences />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
