
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
    const style = {
        primary: "bg-[#F8FAFC] py-3",
        secondary: "bg-white border border-[#0000001e] py-2"
    }
  return (
    <div className={`rounded h-full`}>
        {label && <label htmlFor={name}>{label}</label>}

        <div className={`flex items-center rounded gap-2 ${style[styles]} px-2 h-full`}>
        <div className="">
            {children}
        </div>
        <input className="bg-transparent outline-none h-full w-full" type={type} id={name} name={name} value={value} placeholder={placeholder} onChange={change} onBlur={blur} disabled={disabled} minLength={min} maxLength={max} />
        </div>
    </div>
  );
};

export default Input;
