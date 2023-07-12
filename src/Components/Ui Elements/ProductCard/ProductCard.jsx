// * product card component 
// ? props => image url, product title, product price
// todo colors need to fix

function ProductCard({url, title, price}) {
    return (
            <div className="w-[283px] h-[402px] flex-col justify-start items-start gap-[30px] inline-flex">
                <img className="w-[283px] h-[284px] rounded-xl" src={url} />
                <div className="flex-col justify-start items-start gap-4 flex">
                    <p className="w-[283px] text-cyan-950 text-lg font-bold leading-normal">{title}</p>
                    <div className="justify-start items-start gap-[121px] inline-flex">
                        <p className="text-slate-600 text-base font-medium leading-normal">Retailer price</p>
                        <span className="text-right text-cyan-950 text-lg font-bold leading-normal">${price}</span>
                    </div>
                </div>
            </div>
            );
}

export default ProductCard;