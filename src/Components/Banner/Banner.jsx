import Input from "../Ui Elements/Input/Input";
import Button from "../Ui Elements/Buttons/Button";
import Icon from "../Ui Elements/Icon/Icon";
import image from "../../assets/Image/bannerImage.png";

const Banner = () => {
  return (
    <div className="bg-secondary pb-[13rem] overflow-hidden ">
      <div className="relative z-10 right-[-48rem] bottom-[-75rem] flex justify-center items-center">
        <span className="absolute w-[150rem] h-[150rem] rounded-full border border-white opacity-25"></span>
        <span className="absolute w-[120rem] h-[120rem] rounded-full border border-white opacity-25"></span>
        <span className="absolute w-[90rem] h-[90rem] rounded-full border border-white opacity-25"></span>
      </div>
      <div className="container mx-auto grid grid-cols-2 relative z-20 justify-center flex-wrap ">
        <div className="pt-24 pb-0 sm:pb-24 px-4 col-span-2 sm:col-span-1 ">
          <div className="">
            <p className="font-sans font-bold md:text-[52px] text-[32px] text-white">
              Shop products from USA and save up to 40%
            </p>
            <p className="font-sans font-medium text-white opacity-70 text-[20px] max-w-[580px]">
              Thousands of deals on gadgets, shoes, cosmetics, watches -
              everything from the US.
            </p>
          </div>
          <div className="flex mt-5 flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-0">
            <Input
              icon="search"
              type="text"
              placeholder="https://www.amazon.com/Apple-iPhone-12-Pro-Graphite/dp/B09JFP3R1D/?_encoding=UTF8&pd_rd_w=5PHrN&content-id=amzn1.sym.595f69d1-9647-4ce9-9fca-a43eb1c1f3b6&pf_rd_p=595f69d1-9647-4ce9-9fca-a43eb1c1f3b6&pf_rd_r=V2QT8RP4G11B7GS3FQA0&pd_rd_wg=y7lBK&pd_rd_r=f009dcb8-79a2-4612-96e7-c5abf8475646&ref_=pd_gw_exports-popular-this-season-with-similar-asins"
            />
            <Button text="Create Request" primary />
          </div>
          <div className="hidden md:block">
          <div className="flex gap-[30px] mt-[5em]">
            <div className="flex gap-2 ">
              <Icon name="check" />
              <p className="text-white text-[14px] font-sans w-[145px] font-bold">
                Receive your product in 1–2 weeks
              </p>
            </div>
            <div className="flex gap-2 ">
              <Icon name="check" />
              <p className="text-white text-[14px] font-sans w-[145px] font-bold">
                Receive your product in 1–2 weeks
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <img className="w-full h-auto" src={image} />
        </div>
      </div>

    </div>
  );
};

export default Banner;
