import React from 'react';
import { FaYoutube, FaCodepen, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './leftSidebar.scss';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>
        <li className='left__linkItems'>
          <a href='https://www.youtube.com/channel/UCax8or2_bzQCHe0GdSLITOA' className='left__links' target='_blank' rel='noreferrer'>
            <FaYoutube className='left__icon' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://codepen.io/yashfalke77' className='left__links' target='_blank' rel='noreferrer'>
            <FaCodepen className='left__icon' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://github.com/yashfalke77' className='left__links' target='_blank' rel='noreferrer'>
            <FaGithub className='left__icon' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://www.instagram.com/yashfalke77/' className='left__links' target='_blank' rel='noreferrer'>
            <FaInstagram className='left__icon' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://www.linkedin.com/in/yashfalke77/' target='_blank' rel='noreferrer' className='left__links'>
            <FaLinkedin className='left__icon' />
          </a>
        </li>
      </ul>
      <div className='left__line' />
    </main>
  </div>
);

export default LeftSideBar;