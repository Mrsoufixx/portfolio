import { motion } from "framer-motion";

import LineHead from "../../components/reusable/LineHead";
import { Link } from "react-router-dom";
import { user } from "../../assets";
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
          className="mx-auto container"
        >
          <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
              <img
                src={user}
                className="rounded-lg w-96 bg-slate-600"
                alt="soufiane_image2"
              />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
              <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                Je suis Soufiane Korchi, un développeur web full-stack freelance
                avec plus de deux ans d'expérience dans le domaine. Fort de mon
                expertise en développement, collaboration et responsabilité, je
                suis dynamique, fiable et rigoureux. Passionné par mon métier...
              </p>
              <div className="flex justify-end gap-2">
                <a
                  download="SoufianeKorchi_Cv.pdf"
                  href="/file/SoufianeKorchi_Cv.pdf"
                  className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                  <span className="text-sm sm:text-lg font-general-medium duration-100">
                    _Telecharger_CV
                  </span>
                </a>

                <Link
                  to="/about"
                  className="text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 px-4 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 flex items-center justify-center sm:w-48 mt-12 mb-6 sm:mb-0"
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
