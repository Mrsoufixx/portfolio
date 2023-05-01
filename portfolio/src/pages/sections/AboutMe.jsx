import AboutMeBio from "../../components/about/AboutMeBio";
import AboutCounter from "../../components/about/AboutCounter";
import AboutClients from "../../components/about/AboutClients";
import { AboutMeProvider } from "../../context/AboutMeContext";
import { motion } from "framer-motion";
import Qualification from "./Educ_exp";

const About = () => {
  return (
    <AboutMeProvider>
      <div className="container inline-flex items-center justify-start w-full">
        <hr className="w-1/2 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 text-2xl -translate-x-1/2 bg-white  dark:bg-gray-900">
         _About_me
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <AboutMeBio />
      </motion.div>
	<Qualification/>
      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <AboutClients />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
