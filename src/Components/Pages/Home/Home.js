import React from 'react';
import PromoBanner from './PromoBanner/PromoBanner';
import Reviews from './Reviews/Reviews';
import FooterTop from './FooterTop/FooterTop';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import ResortServices from './NavbarSlider/ResortServices/ResortServices';
import ResortFacilites from './ResortFacilites/ResortFacilites';
import AboutSection from './AboutSection/AboutSection';
import PromoBottom from './PromoBottom/PromoBottom';
import Products from './Products/Products';
import Header from '../../Shared/Header/Header';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavbarSlider></NavbarSlider>
            <ResortServices></ResortServices>
            <PromoBanner></PromoBanner>
            <Products></Products>
            <AboutSection></AboutSection>
            <ResortFacilites></ResortFacilites>
            <PromoBottom></PromoBottom>
            <Reviews></Reviews>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;