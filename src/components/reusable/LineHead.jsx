import { textVariant } from "../../utils/motion";
import {motion} from "framer-motion"

function LineHead({ title }) {
  return (
    <motion.div variants={textVariant()}>
      <div className="flex items-center justify-start w-full">
        <div className="px-4 text-2xl dark:text-primary-green ">
          {title}
        </div>
        <hr className="w-2/3 h-0.5 my-8 bg-primary-dark dark:bg-primary-green  border-0 rounded " />
      </div>
    </motion.div>
  );
}

export default LineHead;
