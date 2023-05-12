import { motion } from "framer-motion";

import LineHead from "../../components/reusable/LineHead";
import { Link } from "react-router-dom";
import { me2 } from "../../assets";
import { FiArrowDownCircle, FiArrowRightCircle } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div id="about"></div>
      <section className="about_me mt-24">
        <LineHead title="_À_propos_de_moi" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 2 }}
          exit={{ opacity: 0 }}
          className="mx-auto "
        >
          <div className="block md:flex md:justify-center sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-full md:w-1/2 lg:w-4/12 mb-7 sm:mb-8 duration-600">
              <img
                src={me2}
                className="rounded-lg w-[100%]"
                alt="soufiane_image2"
              />
            </div>

            <div className="font-general-regular w-full  md:w-full text-left">
              <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                Je suis Soufiane Korchi, un développeur web full-stack freelance
                avec plus de deux ans d'expérience dans le domaine. Fort de mon
                expertise en développement, collaboration et responsabilité, je
                suis dynamique, fiable et rigoureux. Passionné par mon métier, je suis constamment à l'affût des dernières tendances et technologies pour offrir le meilleur service à mes clients. Je suis enthousiaste et curieux, avec un esprit d'équipe développé et une grande capacité d'écoute pour répondre aux besoins spécifiques de chaque projet.
              </p>
              <div className="flex flex-col sm:flex-col md:flex-row justify-start md:gap-8 gap-4 mt-10 mb-10 sm:mb-8  ">
                <a
                  download="SoufianeKorchi_Cv.pdf"
                  href="/file/SoufianeKorchi_Cv.pdf"
                  className="font-general-medium flex justify-center items-center p-3   text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-primary-green focus:ring-1 focus:ring-indigo-900 hover:bg-teal-300 text-gray-500 hover:text-gray-600 duration-500 "
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                  <span className="text-sm sm:text-lg font-general-medium duration-100">
                    _Telecharger_CV
                  </span>
                </a>

                <Link
                  to="/about"
                  className="text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 px-4 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 flex items-center justify-center"
                >
                  <span className="text-sm sm:text-lg font-general-medium duration-100">_Explorez_plus</span>
                  <FiArrowRightCircle className="ml-2 sm:ml-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"/>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
