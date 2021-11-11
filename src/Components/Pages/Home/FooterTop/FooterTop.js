import React from 'react';
import { Link } from 'react-router-dom';
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div className="footer-top grid justify-items-center py-5">
        <div className="md:w-8/12 w-auto p-2">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <h2 className="md:text-2xl text-white">Have a question? Need Help?</h2>
                    <h2 className="md:text-3xl font-bold text-white">We would be more than happy to answer your questions.</h2>
                </div>
                <div>
                <Link className="border-2 text-white text-xl border-white py-2 px-5 bg-none" to="/contact-us">Contact us</Link>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default FooterTop;