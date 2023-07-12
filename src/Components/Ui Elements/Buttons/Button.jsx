
/*
Props:=>
text: the text value shown in the button
primary: is the button primary,
secondary: is the button secondary,
onClick: function will trigger when clicked to the button,
onBlur: function will trigger when button will blur
[if primary or secondary is not passed there will be apply a default style ]
               
*/
const Button = ({text,primary, secondary,onClick,onBlur}) => {
   
    return (
       <button onClick={onClick} onBlur={onBlur} className={`${primary?'bg-primary text-secondary':secondary ? 'bg-secondary text-[#ffffff]':'bg-[#ffffff] text-secondary border-2 border-primary'} py-[17px] px-[20px] rounded-[50px] text-center  text-sm font-bold `}>{text}</button>
    );
};

export default Button;