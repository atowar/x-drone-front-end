import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './AddNewProduct.css'



const AddNewProduct = () => {
    const {user} = useAuth()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    console.log(user);
    const onSubmit = data => {
   
        fetch('https://x-drone.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then (res => res.json())
        .then (result => {
            if(result.insertedId){
                alert('New Product Added')
                reset();
                console.log(result);
            };
        })
    };


    return (
        <div className="grid justify-items-center">
            <div>
                
                    <div className="grid justify-items-center">
                        <h2 className="text-2xl border-b-4">Add a New Product</h2>
                        <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Product Title" defaultValue="" {...register("title")} />
                            <input placeholder="Feature" defaultValue="" {...register("material")} />
                            <input placeholder="Camera Lense" defaultValue="" {...register("cameralense")} />
                            <input placeholder="Power" defaultValue="" {...register("power")} />
                             <input placeholder="Weight" defaultValue="" {...register("weight")} />
                             <input placeholder="Design" defaultValue="" {...register("bath")} />
                             <input placeholder="Shipping" defaultValue="" {...register("shipping")} />
                            <input placeholder="Phone Service" defaultValue="" {...register("phoneservice")} />
                            <input placeholder="Price" defaultValue="" {...register("price")} />
                             <input placeholder="Image Link" defaultValue="" {...register("svcimg")} />
                                                                            
                            <input className="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
       
    );
};

export default AddNewProduct;