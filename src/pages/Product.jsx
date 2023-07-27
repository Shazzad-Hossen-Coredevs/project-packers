
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const productId = useLoaderData()
    return (
        <div>
            {JSON.stringify(productId)}
        </div>
    );
};

export default Product;