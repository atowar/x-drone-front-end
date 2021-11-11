import React from 'react';
import quote from '../../../../images/others/quote.svg'

const Reviews = () => {
    return (
        <div className="grid justify-items-center py-5 bg-gray-200">
            <div className="md:w-3/5 sm:w-full">
                <h2 className="text-2xl font-bold">Leave footprints of love and kindness wherever you go</h2>
                <h2 className="text-lg font-bold">Trusted by You since 2018</h2>
                <div className="grid justify-items-center py-5"><img className="text-center" src={quote} alt="" /></div>
                <p className="p-2"> Thank you for a truly amazing stay! Your hospitality is quite outstanding. The sports centre is also very good with excellent quality pool. Hope to be back soon. </p>
                <p className="py-5 text-xl font-bold">Jinaat Jahan</p>
                <p>September 2021</p>

            </div>
        </div>
    );
};

export default Reviews;