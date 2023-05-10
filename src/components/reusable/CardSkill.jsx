import React from "react";

function CardSkill({ title, items, keyprop }) {
  return (
    <div
      className="card-skill border border-primary-dark dark:border-primary-light rounded mx-4"
      key={keyprop}
    >
      <h1 className="border-b border-primary-dark dark:border-primary-light p-2 dark:text-white">
        _{title}
      </h1>
      <div className="p-2 grid grid-cols-3 w-full gap-2">
        {items.map((item) => (
          <div
          
            className="relative border flex flex-col gap-1 shadow-sm shadow-slate-300 dark:shadow-slate-700  items-center justify-center w-full h-24 hover:bg-ternary-dark hover:shadow-md"
            key={item.name}
          >
            <img className="w-10 " src={item.icon} alt={item.name} />
            <div className="text-center text-[11px] dark:text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSkill;
