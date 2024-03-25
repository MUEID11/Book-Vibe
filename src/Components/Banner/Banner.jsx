import React from "react";
import banner from "./../../assets/Deception_Point-Dan_Brown-1d1da-33660.png";
const Banner = () => {
  return (
    <div className="container mx-auto sm:my-10 sm:p-20 bg-stone-200 rounded-lg">
      <div className="flex items-center justify-around">
        <div className="space-y-8">
          <h2 className="text-6xl tracking-tighter font-extrabold">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="bg-green-400 text-white font-bold px-4 py-2 rounded">
            View the list
          </button>
        </div>
        <div>
          
          <img className="rounded -skew-y-3" src={banner} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
