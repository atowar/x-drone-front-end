import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './AddNewProduct.css'



const AddNewProduct = () => {
    const {user} = useAuth()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

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
                            
                            <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />
                            <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Package Name" defaultValue="" {...register("package")} />
                            <input placeholder="Feature" defaultValue="" {...register("features")} />
                            <input placeholder="Room Size" defaultValue="" {...register("roomsize")} />
                            <input placeholder="Capacity" defaultValue="" {...register("capacity")} />
                             <input placeholder="Front View Details" defaultValue="" {...register("frontview")} />
                             <input placeholder="Bath Facilities" defaultValue="" {...register("bath")} />
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