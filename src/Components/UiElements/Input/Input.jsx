
import search from '../../../assets/icons/Project Packers/cd-search.svg'

const Input = ({type, placeholder, icon}) => {
  return (


    <div className="flex bg-white items-center w-full max-w-[700px] gap-[10px] border border-secondary rounded-[50px] py-[10px] px-[20px]">
        {icon &&<img src={search} alt="" />}
        <input className="rounded-[50px] w-full font-sans font-medium focus:outline-none placeholder:text-secondary text-xs sm:placeholder:text-base px-2 " type={type} placeholder={placeholder} />
    </div>
  
  );
};

export default Input;
