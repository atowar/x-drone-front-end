import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div>
                <h2>Sign-Up</h2>
                <form action="">
                    <input type="text" placeholder="Your Name" /> <br />
                    <input type="email" name="" id="" placeholder ="Your Email" /> <br />
                    <input type="password" name="" id="" placeholder="Password" /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" /> <br />
                    <input type="submit" value="submit" />
                </form>
                <div><button>Google Sign-Up</button></div>
                <div><p>Already have an account? <Link to="/signin"> Sign-In</Link></p></div>
            </div>
        </div>
    );
};

export default SignUp;