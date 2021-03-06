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

                <h2 className="underline p-5 text-2xl md:text-xl"> ORDER DETAILS</h2>
                <div>
                    <div className="grid grid-cols-1 gap-4">
                        {

                            orderedProducts.filter(selectedProduct => selectedProduct.email === user.email).map(product => <div key={product._id} className="service mr-2">



                                <table class="table-auto md:w-full">

                                    <thead>
                                        <tr className="border-b-2 text-md">
                                            <th className="w-3/12 text-left p-"><img src={product.order.svcimg} alt="" /></th>
                                            <th className="w-3/12 text-left p-">Product Name: {product.order.title}</th>
                                            <th className="w-2/12 text-left">Price: ${product.order.price}</th>
                                            <th className="w-2/12 text-left">{product.status}</th>
                                            <th className="w-2/12 text-left"><button onClick={() => handleCancelOrder(product._id)} className="p-2 text-white">Cancel Order</button></th>
                                        </tr>
                                    </thead>
                                </table>

                            </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};




export default MyOrder;