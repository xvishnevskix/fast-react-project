import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct,
}



const Product = ({product}:ProductProps) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button onClick={() => setIsVisible(!isVisible)} className="py-2 px-4 border bg-yellow-400">Show Details</button>
            {isVisible && (<div>{product.description}</div>)}
        </div>
    );
};

export default Product;