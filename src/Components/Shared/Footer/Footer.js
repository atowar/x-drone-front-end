import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
            <div className="border-t-2 border-gray-300 footer grid justify-items-center my-5">
            <div className=" grid md:grid-cols-4 lg:grid-cols-4 gap-4 text-left p-2 md:w-2/3 lg:w-2/3 text-black py-5 text-md">
                <div>
                    <img className="w-3/5" src={logo} alt="" />
                    <p className="mt-2">Hello: +880178921457</p>
                    <p>Cox's Bazar, Bangladesh</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">About BeachFront</h2>
                    <p>Encompassing the spectacular views of Cox’s Bazar, BeachFront Resort stands very close to the hills and sea-beach, offering world class facilities and exhilarating experience to its guests.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">Usefull Links</h2>
                    <nav>
                        <NavLink to="/about-us">About us</NavLink> <br />
                        <NavLink to="/contact-us">Contact us</NavLink> <br />
                       
                    </nav>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">News Letter</h2>
                    <form action="">
                        <input type="email border-2 border-black" placeholder="Your Email"/> <br /> <br />
                        <input className=" button px-5 py-2 rounded-md" type="submit" value="submit" />
                    </form>
                </div>
            </div>
            </div>
      
    );
};

export default Footer;