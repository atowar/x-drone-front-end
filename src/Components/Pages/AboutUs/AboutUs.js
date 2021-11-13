import React from 'react';
import Header from '../../Shared/Header/Header';
import './AboutUs.css'

const AboutUs = () => {
    return (
        
        <div>
            <Header></Header>

            <div className="about-title">
                <h2 className="pt-5 text-2xl md:text-5xl text-white">About X-Drone</h2>

            </div>
            <div className="grid justify-items-center">
                <div className="p-5 md:w-8/12 md:p-10">
                    <h2 className="text-2xl p-5">#1 Store for Drone in Bangladesh</h2>
                    <p className=" text-lg">X-Dron specializes in the supply of high-end drones for a variety of commercial, private, and recreational needs. We’re able to deliver the highest quality drones at the highest quality service. Whether you require drones for aerial filming, videography, surveying, or anything else, we have the drones available to suit your needs. With an extensive product range as well as custom drone solutions available, we can help you choose the perfect product or our engineers can design one specifically for you! It’s all this and so much more that we are a leading name in the ever-growing drone industry, renowned as pioneers for our unique drones. Drone Nerds is also the largest distributor of drones in the US, boasting the largest inventory of drones in the nation.</p>
                </div>
            </div>
            <div>
                <img className="w-full" src="https://i.ibb.co/GWLBqZc/drone.png" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;