import React from 'react';
import './Signin.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Signin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className=" md:my-5 grid justify-items-center">
            <div className="login w-full md:w-3/5 lg:w-3/5 text-white p-5 rounded-md">
                
                <div><button className="text-lg rounded-md mb-2 text-black px-5 px-2 bg-white" onClick={handleGoogleSignIn}
                >Sign-In Using Google
                </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;