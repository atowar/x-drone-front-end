import React from 'react';
import { Link } from 'react-router-dom';
import './PromoBanner.css';


const Banner = () => {
    return (
        <div className="promo-banner grid justify-items-center">
            <div className="pt-10 text-white">
                <h2 className="text-xl md:text-4xl p-3">Sky above, sand below, peace within. ....</h2>
                <h3 className="md:text-5xl text-xl p-3">New to <span className="text-xl md:text-5xl  font-bold">BEACHFRONT?</span> </h3>
                <h3 className="text-xl p-3">Get 21% discount with promo code: <span className="md:text-4xl">BEACHFRONT21</span></h3>
                
            </div>
        </div>
    );
};

export default Banner;