import { NavLink } from "react-router-dom";
import dashboard from "../../../assets/icons/cd-dashboard.svg";
const SideBar = () => {
  return (
    <div className="bg-[#F8FAFC] h-full pt-8 pe-2 flex flex-col gap-2">
      <NavLink
        to={"/admin"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-secondary border-l-[4px] border-primary rounded"
            : "text-secondary  rounded"
        }
      >
        <div className="flex relative">
          <div
            className={`flex gap-2 ml-3 items-center rounded text-base font-medium  w-full py-2 px-3`}
          >
            <div className="h-6 w-6">
              <img className="h-full w-full" src={dashboard} alt="" />
            </div>
            <p>Dashboard</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={"orders"}
        
      >
        {({ isActive, isPending }) => (
          // <span className={isActive ? "active" : ""}>Tasks</span>
          <div className="flex relative">
            <div className={`absolute h-full w-1 bg-primary rounded-full ${isActive ? 'opacity-100' : 'opacity-0'} `}></div>
          <div
            className={`flex gap-2 ml-3 items-center rounded text-base font-medium ${isActive ? 'opacity-100' : 'opacity-0'} w-full py-2 px-3`}
          >
            <div className="h-6 w-6">
              <img className="h-full w-full" src={dashboard} alt="" />
            </div>
            <p>Dashboard</p>
          </div>
        </div>
        )}
      </NavLink>
    </div>
  );
};

export default SideBar;
