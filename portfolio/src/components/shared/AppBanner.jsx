import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import {FaReact,FaLaravel, FaFigma} from "react-icons/fa"

import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-2/4 text-left">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium my-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          Hi, My name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
        >
          {"<"}Soufiane KORCHI {"/>"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Full-Stack Developer & Design Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            download="Stoman-Resume.pdf"
            href="/files/Stoman-Resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full relative sm:w-2/4 text-right float-right mt-8 sm:mt-0"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M43.6,-64.8C52.5,-53.6,52.7,-35.4,59.8,-18.3C66.8,-1.2,80.7,14.7,81.3,30.6C81.9,46.4,69.2,62.1,53.4,68.2C37.7,74.3,18.8,70.8,2.8,66.9C-13.1,63,-26.3,58.6,-37.3,51C-48.4,43.4,-57.4,32.5,-62.9,19.5C-68.4,6.5,-70.4,-8.5,-67.2,-22.9C-63.9,-37.2,-55.4,-50.9,-43.3,-61C-31.3,-71.1,-15.6,-77.7,0.9,-79C17.4,-80.2,34.8,-76,43.6,-64.8Z"
            transform="translate(100 100)"
          />
        </svg>
          <div className="absolute top-24 left-20 w-20 h-20 z-10 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            <span className="absolute text-3xl left-0 top-0 text-purple-800">
              "
            </span>
	    <FaReact size={40}/>
          </div>
          <div className="absolute top-24 right-20 w-20 h-20 z-10 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            <span className="absolute text-3xl left-0 top-0 text-purple-800">
              "
            </span>
	    <FaLaravel size={40}/>
          </div>
          <div className="absolute bottom-24 left-20 w-20 h-20 z-10 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            <span className="absolute text-3xl left-0 top-0 text-purple-800">
              "
            </span>
	    <FaFigma size={40}/>
          </div>
        
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
