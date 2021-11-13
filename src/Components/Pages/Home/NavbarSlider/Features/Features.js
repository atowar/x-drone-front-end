import React from 'react';
import drone from '../../../../../images/features/drone2.png';



const Features = () => {
    return (
        <div className="grid justify-items-center">
            <div className=" md:w-8/12 grid justify-items-center">
                <h1 className="md:text-5xl text-5xl my-5"><span className="underline">Key</span> Features</h1>
                <div className="my-6 grid grid-cols-1 justify-items-left">
                    <div  className="md:flex mb-2">
                        <div className="p-2 w-full md:w-1/2">
                            <img src={drone} alt="" />
                        </div>

                        <div  className="p-2 text-left w-full md:w-1/2">
                            <h2 className="text-3xl mb-4 border-b-2 border-gray-300">High Strength Material</h2>
                            <h2 className="text-3xl mb-4 border-b-2 border-gray-300">Elgant Aesthetics Design</h2>
                            <h2 className="text-3xl mb-4 border-b-2 border-gray-300">4 Axis Powers</h2>
                            <h2 className="text-3xl mb-4 border-b-2 border-gray-300">Super Light Weight</h2>
                            <h2 className="text-3xl mb-4 border-b-2 border-gray-300">Streamlined Design</h2>
                          
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Features;