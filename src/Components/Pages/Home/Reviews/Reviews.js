import React, { useEffect, useState } from 'react';
import ReviewSingle from '../../ReviewSingle/ReviewSingle';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://x-drone.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);

    return (


        <div className="my-5 py-5 products-container grid justify-items-center">
        <div className="md:w-8/12 grid justify-items-stretch">
                <h2 className="pt-5 text-2xl font-bold mb-5">What our clients says!</h2>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            reviews.map(review => <ReviewSingle
                                key={review._id}
                                review={review}
                            >
                            </ReviewSingle>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

