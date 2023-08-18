/**
 *
 */
import { useState } from "react";
import supportIcon from "../../assets/icons/cd-customer-support.svg";
import Input from "../UiElements/Input/Input";


const Support = () => {
    const [isVisible, setVisible] = useState(false)
  return (
    <div className="hidden cursor-pointer z-50 sm:block fixed right-[2vw] top-[90vh] ">
      {
        !isVisible ? 
        <img onClick={()=> setVisible(true)} className="h-fit w-fit p-4 rounded-full bg-primary" src={supportIcon} alt="" />
        :
        <div  onClick={()=> setVisible(false)} className="bg-secondary p-4 border-[#07af10] border rounded-2xl">
            <div className="">
                <span className="">Contact us</span>
            </div>
        </div>
    }
    </div>
  );
};

export default Support;
