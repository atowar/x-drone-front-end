import setProducts from '../../../../Hooks/useProduct';
import React, { useEffect, useState } from 'react';


const ManageProducts = () => {

    const [products] = setProducts();
    console.log(products);
    const [refresh, setRefresh] = useState(0);

    
    // //update order
    // const handleUpdateOrder = id => {
    //     const proceed = window.confirm('Are you sure you want to Update Order?');
    //     if (proceed) {
    //         const url = `https://x-drone.herokuapp.com/products/${id}`;
    //         fetch(url,
    //             {
    //                 method: "PATCH",
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     "status": 'Approved'
    //                 })
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.modifiedCount > 0) {
    //                     alert('Updated Successfully');
    //                     setRefresh(refresh+1)
    //                 }
    //             })
    //     }
    // }


    //delete order
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://x-drone.herokuapp.com/products/${id}`;
            fetch(url,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProduct = products.filter(product => product._id !== id)
                        setProducts(remainingProduct)
                    }
                })
        }
    }
    return (
        <div className="my-5 py-5 grid justify-items-center">
            <div id="services" className="md:w-8/12 grid">

                <h2 className="underline p-5 text-2xl md:text-5xl my-5">MANAGE<span className="font-bold"> PRODUCTS</span> </h2>
                <div>
                    <div className="grid gap-4">
                        {
                            products.map(product =>
                                <div key = {product._id} className="mr-2">

                                    <table class="table-auto md:w-full">

                                        <thead>
                                            <tr className="border-b-2 text-md">
                                                <th className="w-3/12 text-left p-">Product Name: {product.order.title}</th>
                                                <th className="w-2/12 text-left">Price: ${product.order.price}</th>
                                                <th className="w-2/12 text-left">Ordered By: <span className="italic text-gray-400">{product.name}</span></th>
                                                <th className="w-2/12 text-left">{product.status}</th>
                                                {/* <th className="w-1/12 text-left"><button onClick={() => handleUpdateOrder(product._id)} className="bg-red text-white p-1 font-bold border">Update</button></th> */}
                                                <th className="w-1/12 text-left"><button onClick={() => handleDeleteProduct(product._id)} className="bg-white font-bold border">X</button></th>
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

export default ManageProducts;