/**
 * Header() returns JSX Element
 * Two different header section. 1 for small screen and another for the rest
 * 
 * @param {function} sideBar This function only work for small screen to open side nav menu
 * @param {boolean} state  used to change button icon for small header.
 * 
 * @returns JSX Element
 */

import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import menu from "../../assets/icons/menu-01.svg";
import cross from "../../assets/icons/cd-cancel.svg";
import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
import cart from "../../assets/icons/cd-products.svg";
import notification from "../../assets/icons/cd-notification.svg";
import profile from "../../assets/icons/user-1.svg";
import Icon from "../UiElements/Icon/Icon";
import search from "../../assets/icons/cd-search.svg";
import { useState } from "react";
import Dropdown from "../UiElements/Dropdown/Dropdown";
import ScrollTop from "../../Util/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import LoginModal from "../MobileModal/LoginModal";
import { readNotification } from "../../Store/userSlice";

const DUMMY_CART = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/300×300/?Iphone",
    title:
      "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    price: "720",
    qty: "1",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/301×300/?Iphone",
    title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    price: "720",
    qty: "1",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/302×300/?Iphone",
    title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    price: "720",
    qty: "1",
  },
];
const Header = ({ sideBar, state }) => {
  const { user, notifications } = useSelector((state) => state.userInfo);
  const [cartState, setCartState] = useState(false);
  const [notifyState, setNotifyState] = useState(false);
  const [loginModal, setLoginModal] = useState(false)
  const navigate = useNavigate();
  // const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();
  ScrollTop();
  const clickHandler = () => {
    sideBar();
  };
  const readNotifHandler = () =>{
    setNotifyState(!notifyState);
    dispatch(readNotification())

  }

  return (
    <>
    <div className="sticky top-0 mt-0 pt-0  bg-white z-50">
      <div className=" z-[100]">
      <Toaster  />
      </div>
      
      <div className="container hidden  sm:flex mx-auto navbar gap-4 py-[10px] items-center justify-between">
        <Link
          to="/"
          className="w-[142px] h-11 justify-start items-center gap-2 inline-flex flex-shrink-0"
        >
          <img src={Logo} alt="Project Packers" />
          <div className="text-secondary text-base font-bold leading-none">
            Project
            <br />
            Packers
          </div>
        </Link>
        <div className="w-full max-w-[650px]">
          <Input
            icon="searchYellow"
            type="text"
            placeholder="Paste the URL of the product"
            border
          >
            <img src={search} alt="" />
          </Input>
        </div>
        <div className="flex gap-10 items-center">
          <Link
            className="align-center font-sans font-normal text-secondary h-fit"
            to="..."
          >
            Support
          </Link>
          {user ? (
            <div className="flex gap-2 items-center">
              <div className="relative">
                <span
                  className="hover:cursor-pointer"
                  onClick={readNotifHandler}
                >
                  <Icon unread={notifications?.isNew===true? true: false} icon={notification} />
                </span>
                <Dropdown
                  type="notification"
                  isOpen={notifyState}
                  onClick={()=> setNotifyState(false)}
                  title="Notification"
                  data={notifications?.data}
                />
              </div>
              <div className="relative">
                <span
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setCartState(!cartState);
                  }}
                >
                  <Icon unread={false} icon={cart} />
                </span>
                <Dropdown
                  type="cart"
                  isOpen={cartState}
                  onClick={() => setCartState(false)}
                  title="Shopping Bag"
                  data={DUMMY_CART}
                />
              </div>
              <div className="relative">
                <Link
                  to="/account/orders"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <Icon type="active" unread={false} icon={profile} />
                  <p className="font-sans text-secondary text-sm font-semibold">
                    {user.name || "User"}
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to="/login">
                <Button onClick={() => navigate("/login")} type="outline">
                  Login
                </Button>
              </Link>
              <Button onClick={() => navigate("/signup")} type="secondary">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* For Small Screen */}

      <div className="flex bg-[#CFF6EF] gap-2 flex-shrink-0 justify-between sm:hidden px-5 py-[10px]">
        <div className="flex flex-shrink-0 items-center gap-2 ">
          {user && (
            <img onClick={clickHandler} src={state ? cross : menu} alt="" />
          )}
          <img onClick={()=> navigate('/')} className="max-h-[33px]" src={Logo} alt="" />
        </div>
        <div className="flex gap-2 items-center ">
          <Input border placeholder="Paste URL here...">
            <img src={search} alt="" />
          </Input>
          {user ? (
            <Link to="/cart">
            <Icon icon={cart} />
            </Link>
          ) : (
            <button
              onClick={()=> setLoginModal(true)}
              className="text-white bg-secondary rounded-full px-4 py-2"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
    <LoginModal show={loginModal} onClose={()=> setLoginModal(false)} />
    </>
  );
};

export default Header;
