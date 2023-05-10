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
          className="font-general-medium my-4 text-md md:text-lg lg:text-lg xl:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
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
          className="font-general-semibold mb-8 text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-green"
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
            ">_ Full-Stack Developer",
            1500,
            ">_ Ux/Ui Designer",
            1500,
          ]}
          className="font-general-medium text-md md:text-lg lg:text-lg xl:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
          speed={30}
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
            download="SoufianeKorchi_Cv.pdf"
            href="/file/SoufianeKorchi_Cv.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 "
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              _Download_CV
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
    </motion.section>
  );
};

export default AppBanner;
