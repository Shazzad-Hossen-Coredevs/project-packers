import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import visa from '../../assets/icons/payments/visa.png';
import masterCard from '../../assets/icons/payments/mastercard.png';
import aExpress from '../../assets/icons/payments/american-express.png';
import bkash from '../../assets/icons/payments/bkash.png';
import rocket from '../../assets/icons/payments/rocket.png';
import nagad from '../../assets/icons/payments/nagad.png';
import dbbl from '../../assets/icons/payments/dbbl.png';
import paypal from '../../assets/icons/payments/paypal.png';
const Footer = () => {
  return (
    <div className="bg-secondary pt-14 ">
        <div className="max-w-[1127px] mx-auto">
        <div className=" flex items-start justify-between">
        <div className="flex flex-col gap-5">
          <div className="w-[142px] h-11 justify-start items-center gap-2 inline-flex">
            <img src={logo} alt="Project Packers" />
            <div className="text-white text-base font-bold leading-none">
              Project
              <br />
              Packers
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                stroke="#6BCCCB"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-white">+880 12656 99958</h3>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z"
                stroke="#6BCCCB"
                strokeWidth="1.5"
              />
              <path
                d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z"
                stroke="#6BCCCB"
                strokeWidth="1.5"
              />
              <path
                d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9"
                stroke="#6BCCCB"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13"
                stroke="#6BCCCB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-white">Support@projectpackers.com</h3>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                stroke="#6BCCCB"
                strokeWidth="1.5"
              />
              <path
                d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                stroke="#6BCCCB"
                strokeWidth="1.5"
              />
            </svg>
            <h3 className="text-white">
              2118 Thornridge Cir. Syracuse, <br />
              Connecticut 35624
            </h3>
          </div>
        </div>

        <div className="">
        <div className="text-[#6BCCCB] text-lg font-semibold leading-7 mb-[32px]">Quick Navigation</div>
        <div className="flex flex-col gap-4 text-white">
            <Link to='/'>Home</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>My Request</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Careers</Link>
        </div>
        </div>
        
        <div className="">
        <div className="text-[#6BCCCB] text-lg font-semibold leading-7 mb-[32px]">Help</div>
        <div className="flex flex-col gap-4 text-white">
            <Link to='/'>Support Center</Link>
            <Link to='/'>How Project Packers Works</Link>
            <Link to='/'>Shipping & Delivery</Link>
            <Link to='/'>Cancellation & Refund</Link>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Live Chat Support</Link>
        </div>
        </div>
        <div className="">
        <div className="text-[#6BCCCB] text-lg font-semibold leading-7 mb-[32px]">Payment Methods</div>
        <div className="grid grid-cols-4 gap-2">
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
            <img src={aExpress} alt="" />
            <img src={bkash} alt="" />
            <img src={rocket} alt="" />
            <img src={nagad} alt="" />
            <img src={dbbl} alt="" />
            <img src={paypal} alt="" />
        </div>
        </div>
      </div>
      <div className="w-[1220px] h-[0px] opacity-10 border border-white"></div>
      <div className="opacity-70 text-white text-base font-normal leading-normal py-4">© Copyright 2023 Project Packers</div>
        </div>
      
    </div>
  );
};

export default Footer;
