import { Link } from "react-router-dom";
import Account from "../Components/Credentials/Account";
import Otp from "../Components/Credentials/Otp";
import NewPassword from "../Components/Credentials/NewPassword";

// import otpIcon from '../assets/icons/otp.svg'
import passIcon from '../assets/icons/password.svg'
const Recovery = () => {

  return (
    <div className="bg-secondary min-h-[calc(100vh-241px)] flex items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 relative z-20 justify-center divide-x divide-[#ffffff1a] flex-wrap">
        <Account />
        {/* <Otp /> */}
        {/* <NewPassword /> */}
      
      </div>
    </div>
  );
};

export default Recovery;
