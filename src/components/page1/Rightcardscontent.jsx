import React from "react";
import { ArrowRight } from "lucide-react";

const Rightcardscontent = (props) => {
    
  return (
    
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
      <h2 className="bg-white rounded-full flex items-center justify-center text-black h-10 w-10 text-2xl font-bold">
       1
      </h2>
      <div>
        <p className="text-lg leading-normal text-pink-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, aspernatur.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 h-10 w-30 text-black font-medium px-8 py-2 rounded-full text-lg">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white flex items-center justify-center rounded-full h-10 w-10">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightcardscontent;
