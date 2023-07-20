// import search from "../../../assets/icons/cd-search.svg";
/**
 * Input Component
 * 
 */
const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  change,
  blur,
  error,
  children,
  border,
  min,
  max,
}) => {
  return (
    <div className="relative ">
      {label && (
        <label className="text-white block font-sans font-semibold text-lg pb-2">
          {label}
        </label>
      )}
      <div className={`flex w-full  rounded-full ${border ? "border border-[#00000036]": ""}`}>
        {children && <div className="pl-[10px] sm:pl-5 py-4 rounded-s-full bg-white">{children}</div>}
        <input
          className={`px-5 py-4 ${children ? 'rounded-e-full' : 'rounded-full'} w-full outline-none placeholder-secondary text-secondary border border-white ${
            error && " border-red-600"
          }`}
          value={value}
          name={name}
          placeholder={placeholder}
          type={type}
          minLength={min}
          maxLength={max}
          onChange={change}
          onBlur={blur}
          
        />
      </div>
      {error && (
        <div className="flex absolute right-0 mt-1 gap-2 bg-red-600  py-1 px-2 rounded-full w-fit">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM9 8.9996C9 9.55188 9.44772 9.9996 10 9.9996C10.5523 9.9996 11 9.55188 11 8.9996V6.9996C11 6.44732 10.5523 5.9996 10 5.9996C9.44772 5.9996 9 6.44732 9 6.9996V8.9996ZM9 12.9996C9 13.5519 9.44772 13.9996 10 13.9996C10.5523 13.9996 11 13.5519 11 12.9996C11 12.4473 10.5523 11.9996 10 11.9996C9.44772 11.9996 9 12.4473 9 12.9996Z"
              fill="white"
            />
          </svg>

          <span className=" text-white font-sans text-xs font-semibold">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
