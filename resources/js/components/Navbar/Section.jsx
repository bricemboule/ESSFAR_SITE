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

const Section = () => {
    var settings = {
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
        <div className="z-[-1] flex-cols md:flex items-center justify-around gap-5 h-13">
            <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="z-[-1] grid grid-cols-1 max-w-[65%] md:max-w-[30%] max-h-[8%] mx-auto gap-6"
            >
                <Slider {...settings}>
                    {actualites.map((data) => {
                        return (
                            <div className="my-1">
                                <div
                                    key={data.id}
                                    className="flex flex-col justify-center items-center gap-4 text-center  shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <img
                                        className="rounded-full block w-[100px]"
                                        src={data.img}
                                        alt=""
                                    />
                                    <p className="text-gray-500 text-sm">
                                        {data.text}
                                    </p>
                                    <h1 className="font-bold">{data.name}</h1>
                                    <p className="text-black/20 text-xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className=" w-[65%] md:text-6xl text-center ml-16 text-3xl font-extrabold font-tangeri">
                <span className="text-center animate-pulse bg-gradient-to-r from-sky-600 via-sky-400 to-red-600 bg-clip-text text-transparent">
                    Choisir ESSFAR pour une insertion professionnelle rapide,
                    une ouverture à l'international, une excellence académique
                    et des bourses d'excellence.
                </span>
            </div>
        </div>
    );
};

export default Section;
