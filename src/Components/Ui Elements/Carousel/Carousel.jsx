import ShortsPlayer from "./ShortsPlayer";

const Carousel = ({ title,data }) => {
  return (

    <div className="container mx-auto -mt-[13rem] mb-[8rem]">
    {title && <h1 className="text-center font-semibold text-4xl my-12">{title }</h1>}
    <div className="flex items-center gap-8 justify-evenly overflow-x-auto">
        {data.map((url, i) => (
        <ShortsPlayer key={i} videoId={url.slice(31)} />
      ))}
    </div>
    </div>
  );
};

export default Carousel;
