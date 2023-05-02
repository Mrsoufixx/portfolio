import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom"
import './leftSidebar.scss';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>

        <li className='left__linkItems'>
          <Link to='https://github.com/Mrsoufixx' className='left__links' target='_blank' rel='noreferrer'>
            <FaGithub className='left__icon dark:fill-slate-100 dark:hover:fill-primary-green' />
          </Link>
        </li>
        <li className='left__linkItems'>
          <Link to='https://www.instagram.com/soufianekor/' className='left__links' target='_blank' rel='noreferrer'>
            <FaInstagram className='left__icon dark:fill-slate-100 dark:hover:fill-primary-green' />
          </Link>
        </li>
        <li className='left__linkItems'>
          <Link to='https://www.linkedin.com/in/soufiane-korchi/' target='_blank' rel='noreferrer' className='left__links'>
            <FaLinkedin className='left__icon dark:fill-slate-100 dark:hover:fill-primary-green' />
          </Link>
        </li>
      </ul>
      <div className='left__line dark:bg-primary-light' />
    </main>
  </div>
);

export default LeftSideBar;