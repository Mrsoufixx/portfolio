import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";

import { motion } from "framer-motion";
import CercleBanner from "../reusable/CercleBanner";
import { TypeAnimation } from "react-type-animation";

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
          className="font-general-medium  mb-4 text-md md:text-lg lg:text-lg xl:text-xl text-center sm:text-left leading-normale text-gray-500 dark:text-gray-200"
        >
          Bonjour et Bienvenue ! 
         
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium  my-4 text-md md:text-lg lg:text-lg xl:text-xl text-center sm:text-left leading-normale text-gray-500 dark:text-gray-200"
        >
          Je suis
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold font-semibold mb-5 text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-green"
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
        >

        <TypeAnimation
          sequence={[
            ">_ Développeur Full-Stack ",
            1000,
            ">_ Designer Ux/Ui ",
            1000,
            ">_ Formateur ",
            1000,
          ]}
          className="font-general-medium text-md md:text-lg lg:text-lg xl:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200  ml-6 sm:ml-0 lg:ml-0 xl:ml-0"
          speed={35}
          // style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
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

            href="#about"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 "

          >
            <span className="text-sm sm:text-lg font-general-medium duration-100">
            _Découvrez_plus
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
        <CercleBanner />
      </motion.div>
      {/* <div id="about"></div> */}
    </motion.section>
  );
};

export default AppBanner;
