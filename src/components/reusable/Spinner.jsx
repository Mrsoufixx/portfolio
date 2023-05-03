import { motion } from "framer-motion";

const Spinner = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    start: {
      opacity: 0,
      y: "50%",
    },
    end: {
      opacity: 1,
      y: "0%",
    },
  };

  const name = "Soufiane";

  return (
    <div className="flex justify-center items-center h-screen dark:bg-primary-dark bg-primary-light">
      <motion.div
        className="text-5xl text-primary-dark dark:text-primary-green font-bold"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Spinner;
