import React from 'react';


const ProductData = ({ product }) => {
    console.log(product);

    //delete order

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://x-drone.herokuapp.com/products/${id}`
            fetch(url,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingProduct = product.filter(productDeleted => productDeleted._id !== id)
                        product = remainingProduct;
                    }
                })
        }
    }
    return (


        <div className="service mr-2">


            <table class="table-auto md:w-full">

                <thead>
                    <tr className="border-b-2 text-md">
                        <th className="w-1/3 text-left p-">Package Name: {product.order.package}</th>
                        <th className="w-1/3 text-left">Price: ${product.order.price} per night*</th>
                        <th className="w-1/3 text-left">Ordered By: <span className="italic text-gray-400">{product.name}</span></th>
                        <th className="w-1/3 text-left"><button onClick={() => handleDeleteProduct(product._id)} className="bg-white font-bold border">X</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default ProductData;