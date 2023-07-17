
const Icon = ({type, icon}) => {
    const styles = {
        active: "bg-[#FBE697]",
        actual: "bg-[#A2EEE7]",
    }
    return (
        <div className={ (type ? styles[type] : styles.actual) + ` w-fit flex items-center justify-center h-fit rounded-full p-[6px] `} >
            <img src={icon} alt="" />
        </div>
    );
};

export default Icon;