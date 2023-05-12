import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineHead from "../../components/reusable/LineHead";
import ButtonLink from "../../components/reusable/ButtonLink";

const Contact = () => {
  return (
    <>
      <LineHead title="_Contact_me" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <section className="py-2 px-4 max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-12 dark:text-primary-light text-primary-dark">Collaborons ensemble</h1>
            <p className="text-lg mb-6 dark:text-primary-light text-primary-dark">
              Si vous avez un projet en tête, ou si vous cherchez un développeur web dependent ou independent pour
              travailler avec vous, n'hésitez pas à me contacter. Je suis ouvert
              à toute opportunité de collaboration. Remplissez simplement le
              formulaire ci-dessous avec vos informations et un bref message, et
              je vous répondrai dans les plus brefs délais. Si vous avez des
              questions ou si vous souhaitez simplement dire bonjour, n'hésitez
              pas non plus. Mon inbox est toujours ouvert ! Je suis impatient de
              travailler avec vous et de créer quelque chose d'exceptionnel
              ensemble.
            </p>
            <ButtonLink title="_Contacter_moi" link="./contact" />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
