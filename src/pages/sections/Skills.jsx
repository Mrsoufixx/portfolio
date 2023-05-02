import LineHead from "../../components/reusable/LineHead";
import { design, frontend, backend, outils } from "../../data/technologiesData";



function Skills() {
  return (
    <section>
      <LineHead title="__.Skills"/>
      <div className="flex flex-wrap justify-center gap-2 items-center">
        <div className="border border-primary-dark rounded w-1/2 ">
          <h1 className="border-b border-primary-dark p-2 dark:text-white">_Backend</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {backend.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md " key={item.name}>
              <img className="w-16" src={item.icon} alt={item.name} />
              <div className="text-center text-sm dark:text-white dark:hover:text-primary-dark">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border rounded w-1/2 ">
          <h1 className="border-b p-2 dark:text-white">_Frontend</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {frontend.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md " key={item.name}>
              <img className="w-16" src={item.icon} alt={item.name} />
              <div className="text-center text-sm dark:text-white dark:hover:text-primary-dark">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border rounded w-1/2 ">
          <h1 className="border-b p-2 dark:text-white">_Design</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {design.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md " key={item.name}>
              <img className="w-16" src={item.icon} alt={item.name} />
              <div className="text-center text-sm dark:text-white dark:hover:text-primary-dark">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
        <div className="border-primary-dark rounded w-1/2 ">
          <h1 className="border-b p-2 dark:text-white">_Outils</h1>
          <div className="p-2 grid grid-cols-4 gap-2">

          {outils.map((item) => (
            <div className="flex flex-col items-center justify-center border h-32 hover:bg-gray-200 hover:shadow-md " key={item.name}>
              <img className="w-16" src={item.icon} alt={item.name} />
              <div className="text-center text-sm dark:text-white dark:hover:text-primary-dark">{item.name}</div>
            </div>
          ))}
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Skills;
