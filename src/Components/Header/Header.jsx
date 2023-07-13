
import Logo from "../../assets/logo.svg";
import Input from "../Ui Elements/Input/Input";
const Header = () => {
  return (
    <div className="navbar py-[25px] flex align-middle ">
      <div className="w-[142px] h-11 justify-start items-center gap-2 inline-flex">
        <img src={Logo} alt="Project Packers" />
        <div className="text-secondary text-base font-bold leading-none">
          Project
          <br />
          Packers
        </div>
      </div>
      <Input type="text" placeholder="Paste the URL of the product" />
    </div>
  );
};

export default Header;
