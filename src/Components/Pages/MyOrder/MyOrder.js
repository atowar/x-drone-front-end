import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const [orderedProducts, setOrderedProducts] = useState([])
    console.log(orderedProducts);
    
    useEffect(() => {
          fetch('https://x-drone.herokuapp.com/ordered-products')
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
        }, []);


        const handleCancelOrder = id => {
            const proceed = window.confirm('Are you sure you want to Cancel Order?');
            if (proceed) {
                const url = `https://x-drone.herokuapp.com/products/${id}`;
                fetch(url,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Order Cancelled');
                            const remainingOrder = orderedProducts.filter(order => order._id !== id)
                            setOrderedProducts(remainingOrder);
                        }
                    })
            }
        }


    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
        <div id="services" className="md:w-8/12 grid justify-items-stretch">
             
            <h2 className="underline p-5 text-xl md:text-xl"> Order Details</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        
                        orderedProducts.filter(selectedProduct => selectedProduct.email === user.email).map(product => <div key={product._id} className="service mr-2">

                        <div className="grid items-center ">
                            <div className="py-5">
                                <h2 className="underline text-4xl font-bold p-2">{product.order.title}</h2>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.material}</p>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.cameralense}</p>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.power}</p>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.weight}</p>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.shipping}</p>
                                <p className="border-b-2 text-md font-medium p-2">{product.order.phoneservice}</p>
                                <p className="border-b-2 text-md font-medium p-2 font-bold">${product.order.price} per night*</p>
                                <button onClick={() => handleCancelOrder(product._id)} className="p-2 text-white">Cancel Order</button>
            
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyOrder;