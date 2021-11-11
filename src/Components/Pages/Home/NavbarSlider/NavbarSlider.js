import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";

// Images
const kyoto = "https://i.ibb.co/LNfMhS8/slide2.jpg";
const tenryuJiTemple = "https://i.imgur.com/g5JNdYL.jpg";
const hakone = "https://i.imgur.com/Iq6XtFR.jpg";
const byodoInTemple = "https://i.ibb.co/bd6k3yf/slide1.jpg";

const NavbarSlider = () => {
    return (
        <div>
            <HeroSlider
                slidingAnimation="top_to_bottom"
                orientation="vertical"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) =>
                    console.log("onBeforeChange", previousSlide, nextSlide)
                }
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
                style={{
                    backgroundColor: "#000"
                }}
                settings={{
                    slidingDuration: 400,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: false,
                    autoplayDuration: 8000,
                    height: "80vh"
                }}
            >
              
                <OverlayContainer>
                    <Wrapper>
                        <Title>Welcome to BeachFront, Cox's Bazar</Title>
                        <Subtitle>A Heart Throbbing Experience at Cox’s Bazar</Subtitle>
                    </Wrapper>
                </OverlayContainer>

                <Slide
                    shouldRenderMask
                    navDescription="Coxs' Bazer Beach"
                    background={{
                        backgroundColor: "#6D9B98",
                        backgroundImage: kyoto
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Cox's Bazar"
                    background={{
                        backgroundColor: "#8A8A8A",
                        backgroundImage: tenryuJiTemple
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Sylhet"
                    background={{
                        backgroundColor: "#EA2329",
                        backgroundImage: hakone
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Coxs' Bazar Beach Front"
                    background={{
                        backgroundColor: "#2D7791",
                        backgroundImage: byodoInTemple
                    }}
                />

                <MenuNav />
            </HeroSlider>
          
        </div>
    );
};

export default NavbarSlider;