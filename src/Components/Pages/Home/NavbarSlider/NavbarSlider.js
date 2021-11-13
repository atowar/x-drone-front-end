import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";

// Images
const drone1 = "https://i.ibb.co/pzVpjxf/slider-1.png";
const drone2 = "https://i.ibb.co/FbN6McX/slider-4.png";
const drone3 = "https://i.ibb.co/KhJmzD1/slider-2.png";
const drone4 = "https://i.ibb.co/YQvTMKJ/slider-3.png";



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
                        <Title>Welcome to X-Drone Store</Title>
                        <Subtitle>You must love our drones!</Subtitle>
                    </Wrapper>
                </OverlayContainer>

                <Slide
                    shouldRenderMask
                    navDescription="Drone-1"
                    background={{
                        backgroundColor: "#6D9B98",
                        backgroundImage: drone2
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Drone-2"
                    background={{
                        backgroundColor: "#8A8A8A",
                        backgroundImage: drone1
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Drone-3"
                    background={{
                        backgroundColor: "#EA2329",
                        backgroundImage: drone3
                    }}
                />

                <Slide
                    shouldRenderMask
                    navDescription="Drone-4"
                    background={{
                        backgroundColor: "#2D7791",
                        backgroundImage: drone4
                    }}
                />

                <MenuNav />
            </HeroSlider>
          
        </div>
    );
};

export default NavbarSlider;