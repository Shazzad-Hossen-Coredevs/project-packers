import  {useState} from 'react';

const GalleryCard = ({data}) => {
    const {image1, image2, image3} = data;
    const [presentImage, setPresentImage] = useState(image1);
    const imgFn = (imgSrc) => {

        return (
            <img
                onClick={() => setPresentImage(imgSrc)}
                className='border rounded-xl cursor-pointer duration-200 active:scale-95 w-full'
                src={imgSrc} alt="product image"
            />
        );
    };

    return (
        // to-do: make array for image
        <div className='w-full h-full flex px-5 gap-4'>
            <aside className='w-1/4 h-full flex flex-col gap-4'>
                {imgFn(image1)}
                {imgFn(image2)}
                {imgFn(image3)}
            </aside>
            <aside className='w-full flex-1'>
                <img
                    className='w-full  h-full border rounded-xl'
                    src={presentImage} alt="product image"
                />
            </aside>
        </div>
    );
};

export default GalleryCard;