import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import menu from "../../assets/icons/menu-01.svg";
import cross from "../../assets/icons/cd-cancel.svg";
import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
import cart from "../../assets/icons/cd-products.svg";
import notification from "../../assets/icons/cd-notification.svg";
import user from "../../assets/icons/user-1.svg";
import Icon from "../UiElements/Icon/Icon";
import { useState } from "react";
import Dropdown from "../UiElements/Dropdown/Dropdown";

const DUMMY_NOTIFICATION = [
  {
    id: 1,
    title: 'We\'ve reviewed item #3163652',
    description: "(Fitbit Versa...). You can now take it to checkout!",
    time: '9 minutes ago'

  },
  {
    id: 2,
    title: 'We\'ve reviewed item #3163652',
    description: "(Fitbit Versa...). You can now take it to checkout!",
    time: '9 minutes ago'

  },
  {
    id: 3,
    title: 'We\'ve reviewed item #3163652',
    description: "(Fitbit Versa...). You can now take it to checkout!",
    time: '9 minutes ago'

  },
  {
    id: 4,
    title: 'We\'ve reviewed item #3163652',
    description: "(Fitbit Versa...). You can now take it to checkout!",
    time: '9 minutes ago'

  },

]
const DUMMY_CART = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random/300×300/?Iphone',
    title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
    price: "720",
    qty: '1'

  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/301×300/?Iphone',
    title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
    price: "720",
    qty: '1'

  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/302×300/?Iphone',
    title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
    price: "720",
    qty: '1'

  },


]
const Header = ({ sideBar, state }) => {
  const [login, setLogin] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [notifyState, setNotifyState] = useState(false);
  const clickHandler = () => {
    sideBar();
  };
  return (
    <div className="sticky top-0 mt-0 pt-0  bg-white z-50">
      <div className="container hidden  sm:flex mx-auto navbar gap-4 py-[25px] items-center justify-between">
        <div className="w-[142px] h-11 justify-start items-center gap-2 inline-flex flex-shrink-0">
          <img src={Logo} alt="Project Packers" />
          <div className="text-secondary text-base font-bold leading-none">
            Project
            <br />
            Packers
          </div>
        </div>
        <Input
          icon="searchYellow"
          type="text"
          placeholder="Paste the URL of the product"
        />
        <div className="flex gap-10 items-center">
          <Link
            className="align-center font-sans font-normal text-secondary h-fit"
            to="..."
          >
            Support
          </Link>
          {login ? (
            <div className="flex gap-2 items-center">
              <div className="relative">
                <span className="hover:cursor-pointer"
                  onClick={() => {
                    setNotifyState(!notifyState);
                  }}
                >
                  <Icon unread={true} icon={notification} />
                </span>
                <Dropdown type="notification" isOpen={notifyState} title="Notification" data={DUMMY_NOTIFICATION} />
              </div>
              <div className="relative">
                <span className="hover:cursor-pointer"
                  onClick={() => {
                    setCartState(!cartState);
                  }}
                >
                  <Icon unread={false} icon={cart} />
                </span>
                <Dropdown type="cart" isOpen={cartState} title="Shopping Bag" data={DUMMY_CART} />
              </div>
              
              
              <Icon type="active" unread={false} icon={user} />
              <p className="font-sans text-secondary text-sm font-semibold">
                Cody Fisher
              </p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Button onClick={() => setLogin(true)} type="outline">
                Login
              </Button>
              <Button type="secondary">Sign Up</Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex bg-[#CFF6EF] gap-2 flex-shrink-0 justify-between sm:hidden px-5 py-[10px]">
        <div className="flex flex-shrink-0 items-center gap-2 ">
          {login && (
            <img onClick={clickHandler} src={state ? cross : menu} alt="" />
          )}
          <img className="max-h-[33px]" src={Logo} alt="" />
        </div>
        <div className="flex gap-2 items-center ">
          <Input icon placeholder="Paste URL here..." />
          {login ? (
            <Icon icon={cart} />
          ) : (
            <Button type="secondary">Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
