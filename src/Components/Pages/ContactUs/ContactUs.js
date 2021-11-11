import React from 'react';
import './ContactUs.css'

import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';



const ContactUs = () => {
    const {user} = useAuth()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
   
        fetch('https://x-drone.herokuapp.com/contacts-info', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then (res => res.json())
        .then (result => {
            if(result.insertedId){
                alert('Received Your Message! We will contact you soon')
                reset();
                console.log(result);
            };
        })
    };


    return (
        <div className="grid justify-items-center">
            <div>
                
                    <div className="grid justify-items-center">
                        <h2 className="text-2xl border-b-4">Have a Questions? Send us a message.</h2>
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            
                            <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />

                            <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                             <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />
                            <input className="input-field" placeholder="Your Message" defaultValue="" {...register("message")} />

                            <input className="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
       
    );
};
export default ContactUs;