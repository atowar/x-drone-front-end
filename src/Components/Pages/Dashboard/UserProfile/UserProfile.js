import React, { useEffect, useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';



const UserProfile = () => {
    const { user } = useAuth()
    const [orderedProducts, setOrderedProducts] = useState([]);


    useEffect(() => {
        fetch('https://x-drone.herokuapp.com/ordered-products')
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
    }, []);

    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
            <div id="services" className="md:w-8/12 grid justify-items-stretch">

                <h2 className="underline p-5 text-2xl md:text-xl"> USER PROFILE</h2>
                <div>
                    <div className="grid grid-cols-1 justify-items-start gap-4">

                            <h2>Your Name: <span className="font-bold">{user.displayName}</span></h2>
                            <h2>Your Email Address: <span className="font-bold">{user.email}</span></h2>
                            
                            
                                                 
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserProfile;