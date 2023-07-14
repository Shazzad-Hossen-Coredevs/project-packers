import nike from '../../assets/Image/nike.jpg'
import walmart from '../../assets/Image/walmart.png'
import ebay from '../../assets/Image/ebay.jpg'
import amazon from '../../assets/Image/amazon.jpg'
import ikea from '../../assets/Image/ieka.jpg'
import kroger from '../../assets/Image/kroger.jpg'
const Brands = () => {
    return (
        <div className='container  items-center mx-auto text-center flex justify-center flex-col my-[34px] sm:my-[74px] px-5 gap-5'>
            <p className="font-sans text-[18px] sm:text-[24px] text-secondary font-semibold max-w-[600px] text-center">Buy Real USA product from any band through our Project Packers platform </p>
            <div className="flex gap-2 sm:gap-12 justify-between w-full items-center px-5 overflow-x-auto">
                <img src={nike} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
                <img src={walmart} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
                <img src={ebay} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
                <img src={amazon} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
                <img src={ikea} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
                <img src={kroger} alt="" className="h-12 w-[72px] sm:w-[150px] sm:h-[100px]" />
            </div>
        </div>
    );
};

export default Brands;