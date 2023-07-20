// * product card component 
// ? props => image url, product title, product price
// todo colors need to fix

function ProductCard({url, title, price}) {
    return (
            <div className="max-w-[283px] bg-white w-full px-[10px] py-[20px] flex-col justify-start items-start gap-[30px] inline-flex">
                <img className="w-full h-full rounded-xl" src={url} />
                <div className="flex-col justify-start items-start gap-4 flex">
                    <p className=" text-secondary text-[16px] sm:text-[18px] text-lg font-medium sm:font-bold leading-normal">{title}</p>
                    <div className="flex justify-between w-full">
                        <p className="text-slate-600 text-xs sm:text-base font-medium leading-normal">Retailer price</p>
                        <span className="text-right text-secondary text-base sm:text-lg font-bold leading-normal">${price}</span>
                    </div>
                </div>
            </div>
            );
}

export default ProductCard;