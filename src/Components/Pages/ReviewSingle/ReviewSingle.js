import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewSingle = ({ review }) => {
    
    console.log(review.star);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
            <Rating
                initialRating={review.star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly>
                
            </Rating>
                    <h2 className="underline text-4xl font-bold p-2">{review.name}</h2>
                    <p className="font-bold p-2 italic">"{review.message}"</p>
                                   


                </div>
            </div>
        </div>
    );
};
export default ReviewSingle;