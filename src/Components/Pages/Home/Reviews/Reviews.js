
import React, { useEffect, useState } from 'react';
import quote from '../../../../images/others/quote.svg'
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
             <h2 className="pt-5 text-xl">What our clients says!</h2>
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


        
        // <div className="grid justify-items-center py-5 bg-gray-200">
        //     <div className="md:w-3/5 sm:w-full">
        //         <h2 className="text-2xl font-bold">Leave footprints of love and kindness wherever you go</h2>
        //         <h2 className="text-lg font-bold">Trusted by You since 2018</h2>
        //         <div className="grid justify-items-center py-5"><img className="text-center" src={quote} alt="" /></div>
        //         <p className="p-2"> Thank you for a truly amazing stay! Your hospitality is quite outstanding. The sports centre is also very good with excellent quality pool. Hope to be back soon. </p>
        //         <p className="py-5 text-xl font-bold">Jinaat Jahan</p>
        //         <p>September 2021</p>

        //     </div>
        // </div>
