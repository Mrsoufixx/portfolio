import { textVariant } from "../../utils/motion";
import {motion} from "framer-motion"

function LineHead({ title }) {
  return (
    <motion.div variants={textVariant()}>
      <div className="container inline-flex items-center justify-start w-full">
        <hr className="w-2/3 h-0.5 my-8 bg-primary-dark dark:bg-primary-green  border-0 rounded translate-x-20" />
        <div className="absolute px-4 text-2xl -translate-x-1/2 dark:text-primary-green ">
          {title}
        </div>
      </div>
    </motion.div>
  );
}

export default LineHead;
