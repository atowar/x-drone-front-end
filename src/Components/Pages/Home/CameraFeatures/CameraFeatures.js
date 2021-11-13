import React from 'react';
import drone from '../../../../images/features/drone-lenses.png';



const CameraFeatures = () => {
    return (
        <div className="grid justify-items-center bg-gray-200">
            <div className=" md:w-8/12 grid justify-items-center">
                <h1 className="md:text-5xl text-5xl my-5"><span className="underline">4K</span> Camera Lens</h1>
                <h1 className="md:text-2xl text-5xl my-5"> Capture Your Best Moments With High Quality Lens</h1>
                <div className="my-6 grid grid-cols-1 justify-items-left">
                    <div  className="md:flex mb-2">
                        

                        <div  className="p-2 text-left w-full md:w-1/2">
                            <h2 className="text-3xl mb-4 border-b-2">4000 Resolution！</h2>
                            <h2 className="text-3xl mb-4 border-b-2">High Color Saturation</h2>
                            <h2 className="text-3xl mb-4 border-b-2">High Color Saturation</h2>
                            <h2 className="text-3xl mb-4 border-b-2">Fast Transmission</h2>
                                       
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <img src={drone} alt="" />
                        </div>
                        <div  className="p-2 text-left w-full md:w-1/2">
                            <h2 className="text-3xl mb-4 border-b-2 ">Low Shake</h2>
                            <h2 className="text-3xl mb-4 border-b-2 ">Two Camera Modes</h2>
                                                                  
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default CameraFeatures;