import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
const Header = () => {
  return (
    <div className="sticky top-0  bg-white z-50">
      <div className="container mx-auto navbar py-[25px] flex items-center justify-between">
        <div className="w-[142px] h-11 justify-start items-center gap-2 inline-flex">
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
            <Button type="outline">Login</Button>
            <Button type="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
