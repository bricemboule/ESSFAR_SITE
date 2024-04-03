import React from "react";
import Slider from "react-slick";
import Concours from "../../images/concours.png";

const actualites = [
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
        img: Concours,
    },
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
        img: Concours,
    },
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
        img: Concours,
    },
];

const Evenement = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-1">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <h1 className="text-6xl font-bold font-tangeri">
                            Nos actualités
                        </h1>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                    >
                        <Slider {...settings}>
                            {actualites.map((data) => {
                                return (
                                    <div className="my-3">
                                        <div
                                            key={data.id}
                                            className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                        >
                                            <img
                                                className="rounded-full block mx-auto"
                                                src={data.img}
                                                alt=""
                                            />
                                            <p className="text-gray-500 text-sm">
                                                {data.text}
                                            </p>
                                            <h1 className="text-xl font-bold">
                                                {data.name}
                                            </h1>
                                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                                ,,
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Evenement;
