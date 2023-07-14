import Icon from "../Icon/Icon";


const Input = ({type, placeholder, icon}) => {
  return (


    <div className="flex bg-white items-center w-[700px] gap-[10px] border border-secondary rounded-[50px] py-[10px] px-[20px]">
        <Icon icon="search" name={icon} />
        <input className="rounded-[50px] w-full font-sans font-medium focus:outline-none placeholder:text-secondary px-2 " type={type} placeholder={placeholder} />
    </div>
  
  );
};

export default Input;
