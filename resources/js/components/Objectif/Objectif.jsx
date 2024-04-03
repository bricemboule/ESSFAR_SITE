import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import Slider from "react-slick";
import Concours from "../../images/concours.png";
import Vector from "../../images/vector3.png";

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
            <div className="min-h-[550px]">
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                    <div
                        data-aos="slide-up"
                        data-aos-duration="300"
                        className="container"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* gauche */}
                            {/* Nos chiffres */}
                            {/*<div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-14 md:gap-5">
                                <div className="text-center sm:text-center md:text-left ">
                                    <h1 className="font-tangeri text-6xl font-bold">
                                        Nos Chiffres
                                    </h1>
                                </div>

                                <div className="flex md:flex-row sm:flex-col gap-10 mt-8 ml-16">
                                    <div className="flex flex-col">
                                        <span className="pb-2 text-gray-600">
                                            Insertion pro
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400">
                                            90%
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="pb-2 text-gray-600">
                                            Mobilité
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400">
                                            100%
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-600 pb-2">
                                            Effectif par salle
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 sm:p-7 rounded-full bg-green-100 dark:bg-green-400">
                                            15
                                        </p>
                                    </div>
                                </div>
                                </div>
                            */}
                            <div className="container">
                                <div className="text-center mb-1 max-w-[400px] mx-auto">
                                    <h1 className="text-6xl font-bold font-tangeri">
                                        Notre actualité
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
                            {/* droit */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 className="text-center font-tangeri text-6xl font-bold sm:text-red">
                                    Notre Objectif
                                </h1>
                                <p className="text-gray-600 tracking-wide leading-5 indent-3 text-justify">
                                    Fournir aux étudiants, une formation solide
                                    en mathématiques appliquées et en
                                    informatique, complétée des cours
                                    d'économie, de finance et d'assurance,
                                    nécessaires à la poursuite des études dans
                                    nos différents specialités en Master.
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
                </div>
            </div>
        </>
    );
};

export default Objectif;
