import React from 'react';
import { Link } from 'react-router-dom';
import './rightSidebar.scss';

const RightSideBar = () => (
  <div className='right'>
    <main className='right__main'>
      <div className='right__line dark:bg-primary-light ' />
      <div><Link to='/contact' className='right__email dark:text-primary-light dark:hover:text-primary-green'>korchi.soufiane@gmail.com</Link></div>
    </main>
  </div>
);

export default RightSideBar;
