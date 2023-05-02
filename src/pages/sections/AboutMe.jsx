import AboutMeBio from "../../components/about/AboutMeBio";
// import AboutCounter from "../../components/about/AboutCounter";
// import AboutClients from "../../components/about/AboutClients";
import { AboutMeProvider } from "../../context/AboutMeContext";
import { motion } from "framer-motion";
import Qualification from "./Educ_exp";
import LineHead from "../../components/reusable/LineHead";

const About = () => {
  return (
    <AboutMeProvider>
      <LineHead title="_About_me"/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 2 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <AboutMeBio />
      </motion.div>
	<Qualification/>
      {/** Counter without paddings */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <AboutClients />
      </motion.div> */}
    </AboutMeProvider>
  );
};

export default About;
