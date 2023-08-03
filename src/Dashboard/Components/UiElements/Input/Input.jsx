
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
  styles = "primary",
  required,
  disabled,
}) => {
    const style = {
        primary: "px-2 py-3 bg-[#F8FAFC]",
        secondary: ""
    }
  return (
    <div>
        {label && <label>{label}</label>}

        <div className={`flex items-center rounded gap-2 ${style[styles]}`}>
        <div className="">
            {children}
        </div>
        <input className="bg-transparent outline-none w-full" type={type} name={name} value={value} placeholder={placeholder} onChange={change} onBlur={blur} disabled={disabled} minLength={min} maxLength={max} />
        </div>
    </div>
  );
};

export default Input;
