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
            className="relative border flex flex-col items-center justify-center w-full h-24 hover:bg-ternary-light hover:shadow-md"
            key={item.name}
          >
            <img className="w-12" src={item.icon} alt={item.name} />
            <div className="text-center text-xs dark:text-white dark:hover:text-primary-dark">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSkill;
