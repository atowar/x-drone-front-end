import React from 'react';
import Reviews from './Reviews/Reviews';
import FooterTop from './FooterTop/FooterTop';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import AboutSection from './AboutSection/AboutSection';
import PromoBottom from './CameraFeatures/CameraFeatures';
import Products from './Products/Products';
import Header from '../../Shared/Header/Header';
import Features from './NavbarSlider/Features/Features';
import CameraFeatures from './CameraFeatures/CameraFeatures';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavbarSlider></NavbarSlider>
            <Features></Features>
            <CameraFeatures></CameraFeatures>
            <Products></Products>
            <AboutSection></AboutSection>
             <Reviews></Reviews>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;