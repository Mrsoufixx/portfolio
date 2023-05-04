import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineHead from "../../components/reusable/LineHead";

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
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Get in touch
            </h1>
            <p className="text-lg mb-6">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <Link to="/contact" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300">
              _Contact _me
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
