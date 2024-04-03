import React from "react";
import img1 from "../../images/acc.png";
import Carousel from "./Carousel";

const slides = [img1];
const Slider = () => {
    return (
        <div className="relative z-[-1]">
            <Carousel autoSlide={true}>
                {slides.map((data) => (
                    <img src={data} className="w-full h-[250px] md:h-[500px]" />
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
