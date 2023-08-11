import icon from "../../../assets/icons/cd-arrow-right.svg";
import Icon from "../Icon/Icon";
import cart from "../../../assets/icons/user-1.svg";
import minor from "../../../assets/icons/cd-select_minor.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Dropdown = ({ isOpen, onClick, type, title, data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick && onClick();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClick]);

  const clickHandler = (v) => {
    console.log(v);
  };

  if (type === "notification") {
    return (
      <div ref={ref}>
        {isOpen && (
          <div className="bg-white p-5 rounded-xl w-[340px] absolute top-[70px] right-0">
            <div className="flex justify-between pb-3">
              <p className="font-sans text-sm font-semibold text-secondary">
                {title || "Loading..."}
              </p>

              <img src={icon} alt="" />
            </div>
            <div className="overflow-y-auto scrollbar max-h-[352px]">
              {data ? (
                data.map((item) => {
                  return (
                    <div
                      onClick={() => clickHandler(item.id)}
                      key={item.id}
                      className="cursor-pointer flex gap-3 py-2 border-t border-[#0000001A]"
                    >
                      <div className="h-12 w-12">
                        <Icon icon={cart} />
                      </div>

                      <div className="">
                        <p className="font-sans font-medium text-sm overflow-hidden">
                          {item.title}
                        </p>
                        <p className="font-sans font-medium text-sm overflow-hidden">
                          {item.description}
                        </p>
                        <p className="font-sans font-normal text-xs text-[#00000066] overflow-hidden">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Data</p>
              )}
            </div>
          </div>
        )}
  </div>
    );
  }
  if (type === "cart") {
    return (
      <div ref={ref}>
        {isOpen && (
          <div className="bg-white p-5 rounded-xl w-[350px] absolute top-[70px] right-0">
            <div className="flex justify-between pb-3">
              <p className="font-sans text-sm font-semibold text-secondary">
                {title || "Loading..."}
              </p>
              <Link to="/cart">
                <img src={icon} alt="" />
              </Link>
            </div>
            <div className="overflow-y-auto scrollbar max-h-[352px]">
              {data ? (
                data.map((item) => {
                  return (
                    <div
                      onClick={() => clickHandler(item.id)}
                      key={item.id}
                      className="cursor-pointer flex gap-4 py-2 border-t border-[#0000001A]"
                    >
                      <div className="h-16 w-16">
                        <img
                          className="w-full h-full"
                          src={item.image}
                          alt=""
                        />
                      </div>

                      <div className="max-w-[180px]">
                        <p className="font-sans   font-medium text-sm overflow-hidden text-[#00000066]">
                          {item.title.substring(0, 40).concat("...")}
                        </p>

                        <p className="font-sans font-normal text-xs text-[#000000] overflow-hidden">
                          $ {item.price}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="text-sm">{item.qty}</span>
                        <img src={minor} alt="" />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Data</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
 
};

export default Dropdown;
