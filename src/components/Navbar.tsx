import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-light sticky-top'>
      <div className='container'>
        <div className=' d-flex flex-row justify-content-between text-white'>
          <Link to='/' className='navbar-brand'>
          SANGBONG
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
Navbar;
