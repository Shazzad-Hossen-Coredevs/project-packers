// todo colors need to change. 
//  * According component
// ? props => parameters: header, description

import { useState } from "react";

const Collapse = ({data}) => {
    const [expand, setExpand] = useState(false)
    return (
    <div onClick={()=> setExpand(!expand)} className="w-[385px] h-auto cursor-pointer py-4 border-b border-slate-200 justify-start items-start gap-[25px] inline-flex">
        <div className="px-[15px] py-1.5 bg-amber-300 rounded-[50px] border border-cyan-900 flex-col justify-start items-start gap-2.5 inline-flex">
          <span className="text-cyan-900 text-lg font-semibold leading-7">?</span>
        </div>
        <div className="flex-col justify-center items-start gap-3 inline-flex">
          <div className="w-80 text-cyan-900 text-lg font-semibold leading-7">{data?.header}</div>
          {expand && <div className="w-80 text-slate-600 text-base font-normal leading-normal">{data?.discription}</div>}
        </div>
      </div>
    );
};

export default Collapse;