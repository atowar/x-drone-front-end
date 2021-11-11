import React from 'react';


const ProductData = ({ service }) => {
    console.log(service);

    //delete bookings

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://mysterious-shelf-06800.herokuapp.com/services/${id}`
            fetch(url,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingProduct = service.filter(productDeleted => productDeleted._id !== id)
                        service = remainingProduct;
                    }
                })
        }
    }
    return (


        <div className="service mr-2">


            <table class="table-auto md:w-full">

                <thead>
                    <tr className="border-b-2 text-md">
                        <th className="w-1/3 text-left p-">Package Name: {service.booking.package}</th>
                        <th className="w-1/3 text-left">Price: ${service.booking.price} per night*</th>
                        <th className="w-1/3 text-left">Booked By: <span className="italic text-gray-400">{service.name}</span></th>
                        <th className="w-1/3 text-left"><button onClick={() => handleDeleteProduct(service._id)} className="bg-white font-bold border">X</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default ProductData;