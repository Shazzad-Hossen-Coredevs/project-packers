import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import menu from "../../assets/icons/Project Packers/menu-01.svg"
import cross from '../../assets/icons/Project Packers/cd-cancel.svg'
import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
import cart from '../../assets/icons/Project Packers/cd-products.svg'
import Icon from "../UiElements/Icon/Icon";
import { useState } from "react";
const Header = ({sideBar, state}) => {
  const [login, setLogin] = useState(true)
  const clickHandler = () =>{
   
    sideBar()
  }
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
          <div className="flex gap-2 items-center">
            <Button onClick={()=> setLogin(true)} type="outline">Login</Button>
            <Button type="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
      <div className="flex bg-[#CFF6EF] gap-2 flex-shrink-0 justify-between sm:hidden px-5 py-[10px]">
        <div className="flex flex-shrink-0 items-center gap-2 ">
          {login && <img onClick={clickHandler} src={state ? cross : menu} alt="" />}
          <img className='max-h-[33px]'  src={Logo} alt="" />
        </div>
        <div className="flex gap-2 items-center ">
          <Input icon placeholder="Paste URL here..." />
          {login ? <Icon  icon={cart} /> : <Button type="secondary">Login</Button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
