import React from "react";
import Img2 from "../../images/Data1.png";
import Img from "../../images/actuaria.jpg";
import Img3 from "../../images/ingeniereFinanciere1.png";
import Img4 from "../../images/intelligence1.png";

const FormationsData = [
    {
        id: 1,
        img: Img,
        name: "Actuariat",
        lien: "",
        description: "Devenez un expert en gestion de risques.",
    },
    {
        id: 2,
        img: Img2,
        name: "Statistiques et Big Data",
        lien: "/formation/formation-initiale/BigData",
        description: "Devenez un expert en gestion de masses de donnees",
    },
    {
        id: 3,
        img: Img3,
        name: "Ingenierie Financiere",
        lien: "/formation/formation-initiale/ingenierieFinanciere",
        description: "Devenez un expert en Finances",
    },
    {
        id: 4,
        img: Img4,
        name: "Master Specialise",
        lien: "",
        description: "Devenez un expert en IA",
    },
];

const Fromation = () => {
    return (
        <>
            <div className="">
                <div className="container">
                    <div className="text-center mb-20 max-w-[800px] mx-auto">
                        <h1 className="text-8xl font-tangeri">
                            Des spécialités à la hauteur des défis du 21è Siècle
                        </h1>
                    </div>
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-5 place-items-center">
                        {FormationsData.map((formation) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[80px] ">
                                    <img
                                        src={formation.img}
                                        alt=""
                                        className="max-w-[160px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"
                                    />
                                </div>

                                <div className="p-3 text-center">
                                    <h1 className="text-xl font-bold">
                                        {formation.name}
                                    </h1>
                                    <p className="text-gray-800 group-hover:text-white duration-high text-sm line-clamp-2">
                                        {formation.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fromation;
