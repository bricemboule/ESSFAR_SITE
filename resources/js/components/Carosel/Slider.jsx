import React from "react";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import {
    default as img1,
    default as img4,
    default as img5,
    default as img6,
} from "../../images/banque.jpg";
import Carousel from "./Carousel";

const slides = [img1, img2, img3, img4, img5, img6];
const Slider = () => {
    return (
        <div className="relative z-[-1]">
            <Carousel autoSlide={true}>
                {slides.map((data) => (
                    <img src={data} className="w-full" />
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
