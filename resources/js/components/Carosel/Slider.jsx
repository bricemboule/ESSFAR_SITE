import React from "react";

//import Image3 from "../../images/accueil/Signature-DG.jpeg";
import Image1 from "../../images/accueil/Admission1.png";
/*import Image4 from "../../images/accueil/expose.jpg";
import Image6 from "../../images/accueil/photo.jpg";
import Image8 from "../../images/accueil/remise.jpeg";
import Image7 from "../../images/accueil/seminaire.jpeg";
import Image2 from "../../images/accueil/signature1.png";
import Image5 from "../../images/soutenance.jpg";*/
import Carousel from "./Carousel";

const slides = [
    Image1,
    Image1,
    /*, Image2, Image3, Image4, Image5, Image6, Image7, Image8*/
];
const Slider = () => {
    return (
        <div className="my-5 z-[-1] flex justify-center items-center">
            <div className="w-full">
                <Carousel autoSlide={true}>
                    {slides.map((s) => (
                        <img src={s} className="w-full h-[470px]" />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;
