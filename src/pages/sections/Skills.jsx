import LineHead from "../../components/reusable/LineHead";
import { design, frontend, backend, outils } from "../../data/technologiesData";
import { textVariant } from "../../utils/motion";
import {motion} from "framer-motion"


function Skills() {
  return (
    <section>
      <LineHead title="_Skills"/>
      <div className="flex flex-wrap justify-center gap-2 items-center">
        <div className="border rounded w-1/2 ">
          <h1 className="border-b p-2 dark:text-white">_Backend</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {backend.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md" key={item.name}>
              <img className="w-16" src={item.icon} alt={item.name} />
              <div className="text-center text-sm dark:text-white hover:dark:text-black">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border rounded w-1/2 ">
          <h1 className="border-b p-2">_Frontend</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {frontend.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md" key={item.name}>
              <img className="" src={item.icon} alt={item.name} />
              <div className="text-center text-sm">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border rounded w-[22rem] ">
          <h1 className="border-b ">_Design</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {design.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md" key={item.name}>
              <img className="" src={item.icon} alt={item.name} />
              <div className="text-center text-sm">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border rounded w-[22rem] my-4">
          <h1 className="border-b ">_Outils</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {outils.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md" key={item.name}>
              <img className="" src={item.icon} alt={item.name} />
              <div className="text-center text-sm">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
