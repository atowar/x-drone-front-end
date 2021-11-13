import React, { useEffect, useState } from 'react';



const ManageProducts = () => {
   
    const [products, setProducts] = useState([])
    console.log(products);

    useEffect(() => {
        fetch('https://x-drone.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to Delete this product?');
        if (proceed) {
            const url = `https://x-drone.herokuapp.com/products/${id}`;
            fetch(url,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount) {
                        alert('Product Deleted');
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts);
                    }
                })
        }
    }


    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
            <div id="services" className="md:w-8/12 grid justify-items-stretch">

                <h2 className="underline p-5 text-2xl md:text-xl"> MANAGE PRODUCTS</h2>
                <div>
                    <div className="grid grid-cols-1 gap-4">
                        {

                            products.map(product => <div key={product._id} className="service mr-2">



                                <table class="table-auto md:w-full">

                                    <thead>
                                        <tr className="border-b-2 text-md">
                                            <th className="w-3/12 text-left p-"><img className="w-20" src={product.svcimg} alt="" /></th>
                                            <th className="w-3/12 text-left p-">Product Name: {product.title}</th>
                                            <th className="w-2/12 text-left">Price: ${product.price}</th>
                                            
                                            <th className="w-2/12 text-left"><button onClick={() => handleDeleteProduct(product._id)} className="p-2 text-white">Delete Product</button></th>
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