import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './rightSidebar.scss';

const RightSideBar = () => {
  const sidebarVariants = {
    hidden: {
      y: '-100%',
      opacity: 0
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        type: 'spring',
        stiffness: 80
      }
    }
  };

  return (
    <motion.div
      className='right'
      variants={sidebarVariants}
      initial='hidden'
      animate='visible'
    >
      <main className='right__main'>
        <div className='right__line dark:bg-primary-light ' />
        <div>
          <Link to='/contact' className='right__email dark:text-primary-light dark:hover:text-primary-green'>
            korchi.soufiane@gmail.com
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default RightSideBar;
