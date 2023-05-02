import React from "react";
import {reactjs,figma,laravel} from "../../assets"

function CercleBanner( ) {
  return (
      <>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#64ffdb7c"
            d="M43.6,-64.8C52.5,-53.6,52.7,-35.4,59.8,-18.3C66.8,-1.2,80.7,14.7,81.3,30.6C81.9,46.4,69.2,62.1,53.4,68.2C37.7,74.3,18.8,70.8,2.8,66.9C-13.1,63,-26.3,58.6,-37.3,51C-48.4,43.4,-57.4,32.5,-62.9,19.5C-68.4,6.5,-70.4,-8.5,-67.2,-22.9C-63.9,-37.2,-55.4,-50.9,-43.3,-61C-31.3,-71.1,-15.6,-77.7,0.9,-79C17.4,-80.2,34.8,-76,43.6,-64.8Z"
            transform="translate(100 100)"
          />
        </svg>
      <div className="absolute top-24 left-20 w-20 h-20 z-10 bg-secondary-light dark:bg-gray-300 rounded-full flex justify-center items-center text-center p-4 shadow-2xl">
      <span className="absolute text-6xl -left-3 -top-2 drop-shadow-md text-[#41c0a2]">
        "
      </span>
      <img src={reactjs} alt="reactjs"  />
    </div>
    <div className="absolute top-24 right-20 w-20 h-20 z-10 bg-secondary-light dark:bg-gray-300 rounded-full flex justify-center items-center text-center p-4 shadow-2xl">
      <span className="absolute text-6xl -left-3 -top-2 drop-shadow-md text-[#41c0a2]">
        "
      </span>
      <img src={laravel} alt="laravel"  />
    </div>
    <div className="absolute bottom-24 left-20 w-20 h-20 z-10 bg-secondary-light dark:bg-gray-300 rounded-full flex justify-center items-center text-center p-4 shadow-2xl">
      <span className="absolute text-6xl -left-3 -top-2 drop-shadow-md text-[#41c0a2]">
        "
      </span>
      <img src={figma} alt="figma"  />
    </div>
      </>
  );
}

export default CercleBanner;
