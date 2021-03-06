import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import './Review.css';

import ReactStars from "react-rating-stars-component";

import { render } from "react-dom";


const Review = () => {

    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

     const onSubmit = data => {

        console.log(data)

        fetch('https://x-drone.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Thanks for your feedback')
                    reset();
                };
            })
    };

    return (
        <>
            <div className="grid justify-items-center">
            <div className="md:w-8/12">
                <div className="grid md:grid-cols-1 gap-4">


                    <div className="grid justify-items-center">
                        <h2 className="text-2xl border-b-4">Write Your Review</h2>
                        <form className="review-received-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input className="star-field" placeholder="Rate us out of 5" defaultValue="" {...register("star")} />
                            <input className="input-field" placeholder="Your Comment" defaultValue="" {...register("message")} />
                            <input className="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Review;