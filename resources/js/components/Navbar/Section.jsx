import React from "react";
import Slider from "react-slick";

const actualites = [
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
    },
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
    },
    {
        id: 1,
        name: "Prochain Concours",
        text: "La prochaine session du concours d'entrée en première, deuxième, troisième et quatrième année aura lieu le 13 Avril 2024",
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
                className=" grid grid-cols-1 lg:w-[20%] xl:w-[20%] max-h-[6%] mx-auto gap-6 "
            >
                <Slider {...settings}>
                    {actualites.map((data) => {
                        return (
                            <div className=" my-1">
                                <div
                                    key={data.id}
                                    className="flex flex-col justify-center items-center gap-4 text-center  shadow-lg p-4 mx-4 rounded-full dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    {/*<img
                                        className="rounded-full block w-[100px]"
                                        src={data.img}
                                        alt=""
                        />*/}
                                    <p className=" text-gray-500 text-sm md:text-xl  italic">
                                        Prochaine session du concours d'entrée
                                        en 1<sup>ère</sup>, 2<sup>e</sup>, 3
                                        <sup>e</sup> et 4<sup>e</sup> année :
                                        Juin 2024
                                    </p>
                                    <p className="text-black/20 text-xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className="border-solid  border-2 rounded-br-lg border-sky-500 w-full flex gap-30 md:gap-14 xl:w-[50%] lg:w-[50%] md:text-5xl text-center">
                <p className="text-center px-2 py-2 text-sm md:text-xl">
                    <ul className="text-center">
                        <li className="flex gap-1 italic items-center space-x-1 rtl:space-x-reverse">
                            <svg
                                class="w-6 h-6 text-red-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
                                />
                            </svg>
                            <span className="text-sky-500">
                                Excellence académique
                            </span>
                        </li>
                        <li className="flex gap-1 italic items-center space-x-1 rtl:space-x-reverse">
                            <svg
                                class="w-6 h-6 text-red-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
                                />
                            </svg>
                            <span className="text-sky-500">
                                Insertion professionnelle rapide
                            </span>
                        </li>
                    </ul>
                </p>
                <p className="text-center px-2 py-2 text-sm md:text-xl">
                    <ul className="text-center">
                        <li className="flex items-center italic gap-1 space-x-1 rtl:space-x-reverse">
                            <svg
                                class="w-6 h-6 text-red-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
                                />
                            </svg>
                            <span className="text-sky-500">
                                Ouverture internationale
                            </span>
                        </li>
                        <li className="flex items-center italic space-x-1 gap-1 rtl:space-x-reverse">
                            <svg
                                class="w-6 h-6 text-red-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
                                />
                            </svg>
                            <span className="text-sky-500">
                                Bourse d'excellence
                            </span>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Section;
