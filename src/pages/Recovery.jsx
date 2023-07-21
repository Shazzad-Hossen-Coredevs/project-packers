// import { Link } from "react-router-dom";
// import Account from "../Components/Credentials/Account";
// import Otp from "../Components/Credentials/Otp";
import NewPassword from "../Components/Credentials/NewPassword";

// import otpIcon from '../assets/icons/otp.svg'
import passIcon from '../assets/icons/password.svg'
const Recovery = () => {

  return (
    <div className="bg-secondary min-h-[calc(100vh-241px)] flex items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 relative z-20 justify-center divide-x divide-[#ffffff1a] flex-wrap">
        {/* <Account /> */}
        {/* <Otp /> */}
        <NewPassword />
        <div className="flex flex-col  w-full h-full justify-center items-center">
          {/* <div className="w-full sm:max-w-[490px]">
            <p className="text-[24px] font-sans font-medium text-white mb-5">
              Log in to access your Project Packers Platform for order your
              products from any USA website.
            </p>
            <div className="">
              <span className="text-[#ffffffb3] font-sans text-base font-normal">
                Don’t have an account yet?
                <Link className="text-primary underline" to="/signup">
                  Sign Up
                </Link>
              </span>
            </div>
          </div> */}
          {/* <img src={otpIcon} alt="" /> */}
          <img src={passIcon} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Recovery;
