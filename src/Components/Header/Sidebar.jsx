import logo from "../../assets/logo.svg";
import Button from "../UiElements/Buttons/Button";
import Icon from "../UiElements/Icon/Icon";
import user from "../../assets/icons/Project Packers/Avatar.svg";
import notification from "../../assets/icons/Project Packers/cd-notification.svg";
import support from "../../assets/icons/Project Packers/cd-customer-support.svg";
import logout from "../../assets/icons/Project Packers/logout-01.svg";
import { Link } from "react-router-dom";
const Sidebar = ({ state }) => {
  if (state) {
    return (
      <div className=" absolute sm:hidden top-0 bottom-0 right-20 left-0 bg-white z-[101] p-5">
        <div className="flex gap-2 py-5 my-5 border-b border-[#124E581A]">
          <img src={logo} alt="" />
          <Button type="secondary">Log in or Sign Up</Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Icon type="active" icon={user} />
            <Link
              to="/"
              className="font-sans text-base font-normal text-secondary"
            >
              My Account
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <Icon type="actual" icon={notification} />
            <Link
              to="/"
              className="font-sans text-base font-normal text-secondary"
            >
              Notification
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <Icon type="actual" icon={support} />
            <Link
              to="/"
              className="font-sans text-base font-normal text-secondary"
            >
              Support
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <Icon type="actual" icon={logout} />
            <Link
              to="/"
              className="font-sans text-base font-normal text-secondary"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
