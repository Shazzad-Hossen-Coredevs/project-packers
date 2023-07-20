// import search from "../../../assets/icons/cd-search.svg";

const Input = ({ label,name, type, placeholder, value, change, blur, error }) => {
  return (
    <div>
      {label && (
        <label className="text-white block font-sans font-semibold text-lg pb-2">
          {label}
        </label>
      )}
      <input
        className={`px-5 py-4 rounded-full w-full outline-none placeholder-secondary text-secondary ${error && "border border-red-600"}`}
        value={value}
        name={name}
        onChange={change}
        onBlur={blur}
        type={type}
        placeholder={placeholder}
      />
    
    </div>
  );
};

export default Input;
