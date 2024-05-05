import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import Slider from "react-slick";
import Concours from "../../../../public/images/resultats-concours.png";
import Vector from "../../../../public/images/vector3.png";

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

const Objectif = () => {
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
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };
    return (
        <>
            <div className="min-h-[550px] backdrop-blur-xl lg:py-12 xl:py-12 md:py-4 sm:py-0 ">
                <div
                    data-aos="slide-up"
                    data-aos-duration="300"
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                >
                    <div className="container w-[400px]">
                        <h1 className="text-4xl xl:text-5xl lg:text-5xl md:text-5xl font-bold font-tangeri">
                            Notre actualité
                        </h1>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            className="grid grid-cols-1 mx-auto gap-6"
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
                                                    className="rounded-full block mx-auto w-[100px] h-[100px]"
                                                    src={data.img}
                                                    alt=""
                                                />
                                                <p className="text-gray-500 text-2xl">
                                                    La prochaine session du
                                                    concours d'entrée en 1
                                                    <sup>ère</sup>, 2
                                                    <sup>e</sup>, 3<sup>e</sup>{" "}
                                                    et 4<sup>e</sup> année :
                                                    Juin 2024
                                                </p>

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
                    {/* droit */}
                    <div className="flex flex-col justify-center gap-6">
                        <h1 className="text-center text-4xl xl:text-5xl lg:text-5xl md:text-5xl font-bold font-tangeri">
                            Notre Objectif
                        </h1>
                        <p className="text-gray-600 tracking-wide leading-5 indent-3 text-justify px-4">
                            Fournir aux étudiants, une formation solide en
                            mathématiques appliquées et en informatique,
                            complétée des cours d'économie, de finance et
                            d'assurance, nécessaires à la poursuite des études
                            dans nos différents specialités en Master.
                        </p>
                        <div className="flex gap-6 justify-center mx-16">
                            <div>
                                <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                            </div>
                            <div>
                                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                            </div>
                            <div>
                                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                Lances toi dès maintenant...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Objectif;
