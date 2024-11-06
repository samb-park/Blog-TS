import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=''>
      <div className='h3'>
        <p className='h3 text-success '>
          <span>S</span>ANGBONG PARK
        </p>
        <p className='mt-3'>
          <span className='text-danger'>F</span>ULL STACK |{' '}
          <span className='text-danger'>.N</span>ET DEVELOPER
        </p>
        <p>
          Building robust, full-stack solutions with .NET and modern web
          technologies. Explore my portfolio of projects that showcase
          innovative development and seamless user experiences.
        </p>
        <div className='d-flex flex-sm-row flex-column '>
          <a
            href='mailto:Sangbong.park@outlook.com'
            className='btn btn-info font-italic'
          >
            <span className='text-danger'>G</span>
            et in touch
          </a>
          <Link to='resume' className='btn btn-info mt-2 mt-sm-0 ml-sm-2 font-italic'>
            <span className='text-danger'>V</span>iew resume
          </Link>
          <Link
            to='https://www.linkedin.com/in/sangbong-park/'
            className='btn btn-info font-italic mt-2 mt-sm-0 ml-sm-2 '
          >
            <span className='text-danger'>L</span>
            inkedin
          </Link>
          <Link
            to='https://github.com/samb-park'
            className='btn btn-info font-italic mt-2 mt-sm-0 ml-sm-2 '
          >
            <span className='text-danger'>G</span>
            itHub
          </Link>
          <Link
            to='https://www.instagram.com/king.sangbong/'
            className='btn btn-info font-italic mt-2 mt-sm-0  ml-sm-2'
          >
            <span className='text-danger'>I</span>
            nstagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
