
const Heading = ({type, title}) => {
    return (
        <div className="py-4 border-b border-[#0000001c]">
            {type === "navigate" ? "" : "" }
            <h1 className="text-secondary text-xl font-semibold">{title || "no data"}</h1>
        </div>
    );
};

export default Heading;