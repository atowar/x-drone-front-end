import React from 'react';
import { Link } from 'react-router-dom';

const ReviewSingle = ({ review }) => {
    
    console.log(review);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
                    <h2 className="underline text-4xl font-bold p-2">{review.name}</h2>
                    <p className="font-bold p-2">{review.message}</p>
                                   


                </div>
            </div>
        </div>
    );
};
export default ReviewSingle;