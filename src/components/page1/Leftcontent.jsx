import React from "react";
import { ArrowUpRight } from "lucide-react";
const Leftcontent=()=>{
    return (
        <div className=" flex  flex-col justify-between h-full w-1/3 ">
            <div className="p-6">
            <h3 className="mb-5 text-6xl font-bold">
                 Prospective
                 <br />
                 <span className="text-gray-400">Customer</span>
                 <br />
                 <span>segmentation</span>
            </h3>
            </div>
            <div className="text-20xl mt-40 items-center justify-center">
               <ArrowUpRight/>
            </div>
        </div>
    )
}
export default Leftcontent ;