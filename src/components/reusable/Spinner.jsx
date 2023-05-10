import { motion } from "framer-motion";

const Spinner = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
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
  const animationDuration = 2; // Durée de l'animation en secondes

  return (
    <div className="flex justify-center items-center h-screen dark:bg-primary-dark bg-primary-light">
      <motion.div
        className="text-5xl text-primary-dark dark:text-primary-green font-bold"
        variants={containerVariants}
        initial="start"
        animate="end"
        transition={{ duration: animationDuration }}
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Spinner;
