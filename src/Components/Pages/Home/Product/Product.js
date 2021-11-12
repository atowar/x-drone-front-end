import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, } = product;
    console.log(product.svcimg);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
                    <div><img src={product.svcimg} alt="" /></div>
                    <h2 className="underline text-4xl font-bold p-2">{product.title}</h2>
                    <p className="border-b-2 text-md font-medium p-2">{product.material}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.cameralense}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.power}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.weight}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.shipping}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.phoneservice}</p>
                    <p className="border-b-2 text-md font-medium p-2 font-bold">${product.price}</p>
                    
                    <Link to={`/order-received/${_id}`}>
                        <button className="p-3 mt-5 text-xl text-white rounded-md">ORDER NOW</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Product;



