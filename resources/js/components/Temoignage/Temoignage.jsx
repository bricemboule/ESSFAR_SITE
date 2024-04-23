import React from "react";
import video from "../../../../public/images/video/atan.mp4";
import video1 from "../../../../public/images/video/kam.mp4";
import video2 from "../../../../public/images/video/tat.mp4";

const testimonialData = [
    {
        id: 1,
        name: "Gäel KAMKUIMO",
        text: "Analyste Financier à FINANCIA CAPITAL",
        img: video1,
    },
    {
        id: 2,
        name: "Vanilie ATANGANA",
        text: "Actuaire à MAZARS",
        img: video,
    },
    {
        id: 3,
        name: "Lesly TATSINKOU",
        text: "Etudiant en mobilité à l'université Normadie Caen",
        img: video2,
    },
];

const Temoignage = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="m-20">
                <div className="container">
                    <div className="text-center mb-5 mx-auto">
                        <h1 className="md:text-5xl text-4xl md:font-bold font-tangeri">
                            Ils temoignent de leurs passages à l'ESSFAR
                        </h1>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-6"
                    >
                        {testimonialData.map((data) => {
                            return (
                                <div className="w-240">
                                    <div
                                        key={data.id}
                                        className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <video
                                            className="block mx-auto w-30"
                                            controls
                                        >
                                            <source
                                                src={data.img}
                                                type="video/mp4"
                                            />
                                        </video>
                                        <p className="text-gray-500 text-sm">
                                            {data.text}
                                        </p>
                                        <h1 className="text-xl font-bold">
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Temoignage;
