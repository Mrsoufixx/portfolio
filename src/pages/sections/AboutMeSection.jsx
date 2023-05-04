import { motion } from "framer-motion";

import LineHead from "../../components/reusable/LineHead";
import { Link } from "react-router-dom";
import { user } from "../../assets";
import {FiArrowRightCircle} from "react-icons/fi"

const About = () => {
  return (
    <>
      <LineHead title="_About_me" />
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
              suis dynamique, fiable et rigoureux. Passionné par mon métier, je
              suis constamment à l'affût des dernières tendances et technologies
              pour offrir le meilleur service à mes clients. Je suis
              enthousiaste et curieux, avec un esprit d'équipe développé et une
              grande capacité d'écoute pour répondre aux besoins spécifiques de
              chaque projet.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            to="/about"
            className="text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 flex items-center justify-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0"
          >
            <span className="mr-2">_Explore_more</span>
            <FiArrowRightCircle/>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default About;