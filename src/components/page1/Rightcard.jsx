import React from "react";
import Rightcardscontent from "./Rightcardscontent";

const Rightcard = (props) => {
  return (
    <div className="h-full min-w-[320px] w-1/3 bg-amber-200 rounded-3xl overflow-hidden relative shrink-0 shadow-md">
      <img className="h-full w-full object-cover object-right" src={props.img} alt="Card image" />
      <Rightcardscontent  tag={props.tag} no={props.no}/>
    </div>  
  );
};

export default Rightcard;