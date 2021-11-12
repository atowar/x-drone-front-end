import React from 'react';
import Header from '../../Shared/Header/Header';
import './AboutUs.css'

// https://i.ibb.co/9NFbj3s/MG-6995.jpg
// https://i.ibb.co/4jdj2cZ/MG-7120.jpg
// https://i.ibb.co/XYHm4zM/about-Hotel-Header.jpg
// https://i.ibb.co/gFCG222/Swimming-Pool.jpg
// https://i.ibb.co/0Mn5hGG/MG-7148.jpg
const AboutUs = () => {
    return (
        
        <div>
            <Header></Header>

            <div className="about-title">
                <h2 className="pt-5 text-2xl md:text-5xl text-white">About BeachFront</h2>

            </div>
            <div className="grid justify-items-center">
                <div className="p-5 md:w-8/12 md:p-10">
                    <h2 className="text-2xl p-5">Welcome and Relax…in the BeachFront Resort</h2>
                    <p className=" text-lg">Encompassing the spectacular views of Cox’s Bazar, BeachFront Resort stands very close to the hills and sea-beach, offering world class facilities and exhilarating experience to its guests. Whether you are planning a great vacation, the sweetest of honeymoons or a cozy business tour, you would prefer our beach hotel for your relaxing stay. Imagine that the 120 km astonishing longest beach in the world is just five-minute walk away from your room, providing an exuberant sensation in your mind and filling your heart with magnificent joy. Starting from Cox’s Bazar’s longest beach view to the comforts which you would be looking for are all here, making BeachFront Resort the perfect choice for business, romance and holiday travel. Make your every move easy in Cox’s Bazar by staying with us.</p>
                </div>
            </div>
            <div>
                <img className="w-full" src="https://i.ibb.co/9NFbj3s/MG-6995.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;