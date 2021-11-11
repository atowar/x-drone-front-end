import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Service = ({ product }) => {
    const { _id, } = product;
    console.log(_id);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
                    <div><img src={product.svcimg} alt="" /></div>
                    <h2 className="underline text-4xl font-bold p-2">{product.package}</h2>
                    <p className="border-b-2 text-md font-medium p-2">{product.features}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.roomsize}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.capacity}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.frontview}</p>
                    <p className="border-b-2 text-md font-medium p-2">{product.bath}</p>
                    <p className="border-b-2 text-md font-medium p-2 font-bold">${product.price} per night*</p>
                    
                    <Link to={`/order-received/${_id}`}>
                        <button className="p-3 mt-5 text-xl text-white rounded-md">ORDER NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;