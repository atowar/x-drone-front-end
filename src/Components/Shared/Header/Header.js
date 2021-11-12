import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = ({ fixed }) => {
    const { user, logout } = useAuth();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="text-base border-b-2 relative fixed-top flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to="/home"> <img style={{ width: "250px" }} src={logo} alt="site logo" /></NavLink>

                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >


                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item px-3 py-2 flex items-center leading-snug uppercase">

                                <NavLink to="/home">Home</NavLink>

                            </li>
                            <li className="nav-item px-3 py-2 flex items-center  leading-snug uppercase">

                                <NavLink to="/explore-products">Explore Products</NavLink>

                            </li>
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                <NavLink to="/about-us">About us</NavLink>

                            </li>

                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                <Link to="/contact-us">Contact us</Link>

                            </li>

                        
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                {
                                    user?.email? <Link to="/manage-order">Manage Orders</Link>
                                    :
                                    <span></span>
                                }

                            </li>
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                {
                                    user.email ? <Link to="/add-new-product">Add New Product</Link>
                                        :
                                        <span></span>}

                            </li>
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

{
    user?.email ? <Link to="/dashboard">Dashboard</Link>
        :
        <span></span>}

</li>
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                <span className="italic">{user.displayName}</span>

                            </li>
                            <li className="nav-item px-3 py-2 flex items-center uppercase leading-snug">

                                {
                                    user.email ? <button className="py-2 px-5 text-white" onClick={logout}>Sign-Out</button>
                                        :
                                        <Link to="/signin">Sign-In</Link>}

                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;