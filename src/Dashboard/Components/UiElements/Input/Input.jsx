const style = {
  primary: "bg-[#F8FAFC] py-3",
  secondary: "bg-white border border-[#0000001e] py-2",
  quantity: "border border-[#0000001c]",
};

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
  min,
  max,
  styles = "primary",
  required,
  disabled,
}) => {
  const clickHandler = (value) => {
    console.log(value);
  };

  if (styles === "quantity") {
    return (
      <div className={`rounded h-full`}>
        <div
          className={`flex items-center rounded gap-2 ${style[styles]} px-2 py-1 h-full`}
        >
          <button
            onClick={() => clickHandler("decrement")}
            className="text-[#00000085] font-semibold text-xl"
          >
            -
          </button>
          <input
            className="bg-transparent outline-none h-full w-7 text-center"
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={change}
            onBlur={blur}
            disabled={disabled}
            minLength={min}
            maxLength={max}
          />
          <button
            onClick={() => clickHandler("increment")}
            className="text-[#00000085] font-semibold text-xl"
          >
            +
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={`rounded h-full`}>
      {label && <label htmlFor={name}>{label}</label>}

      <div
        className={`flex items-center rounded gap-2 ${style[styles]} px-2 h-full`}
      >
        <div className="">{children}</div>
        <input
          className="bg-transparent outline-none h-full w-full"
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={change}
          onBlur={blur}
          disabled={disabled}
          minLength={min}
          maxLength={max}
        />
      </div>
    </div>
  );
};

export default Input;
