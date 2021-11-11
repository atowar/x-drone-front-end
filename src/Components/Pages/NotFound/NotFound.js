import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="grid justify-items-center">
           <img src="https://i.ibb.co/ctTQ3Jv/Untitled-1-Recovered.jpg" alt="" />
           <Link to='/'><button className="mt-5 py-2 px-5">Go to Homepage</button></Link>
        </div>
    );
};

export default NotFound;