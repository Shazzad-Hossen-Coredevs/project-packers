
const type=  "info";                               //"info" || "order" || "price" 
const title = "Product Price";
const price = "450";

const PriceCard = () => {
    return (
        <div className="border font-sans border-[#0003160D] w-[420px] rounded-lg px-5 py-1">
           <div className="py-4 flex justify-between border-b border-[#0000000D]">
            <span className="text-lg font-medium text-[#475569]">{title}</span>
            <span className="text-2xl font-bold text-secondary">${price}</span>
           </div>
           <div className="py-4 flex gap-1 flex-col">
                <span className="text-lg font-medium  text-[#475569] ">Product From</span>
                <span className="text-lg font-medium">United States of America</span>
           </div>
        </div>
    );
};

export default PriceCard;