import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../../public/images/Data1.png";
import Img from "../../../../public/images/actuaria.jpg";
import Img3 from "../../../../public/images/ingeniereFinanciere1.png";
import Img4 from "../../../../public/images/systeme-dinformation4.png";

const FormationsData = [
    {
        id: 1,
        img: Img,
        name: "Actuariat",
        lien: "/formation/formation-initiale/actuariat",
        description: "Devenez un expert en gestion de risques.",
    },
    {
        id: 2,
        img: Img1,
        name: "Statistiques, Big Data et Intelligence Artificielle",
        lien: "/formation/formation-initiale/BigData",
        description: "Devenez un expert en gestion des données",
    },
    {
        id: 3,
        img: Img3,
        name: "Ingéniérie Financière",
        lien: "/formation/formation-initiale/ingenierieFinanciere",
        description: "Devenez un expert en Finance",
    },
    {
        id: 4,
        img: Img4,
        name: "Systèmes d'Information",
        lien: "/formation/formation-initiale/Systeme-information",
        description: "Devenez un expert en Finance",
    },
];

const Fromation = () => {
    return (
        <div>
            <div className="text-center mb-20 max-w-[800px] mx-auto pt-8">
                <h1 className="text-5xl text-red-500 md:text-6xl font-tangeri ">
                    Des spécialités à la hauteur des défis du 21è Siècle
                </h1>
            </div>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 md:gap-4 lg:gap-4 xl:gap-2 place-items-center">
                {FormationsData.map((formation) => (
                    <Link to={formation.lien}>
                        <div className="rounded-2xl bg-white hover:bg-blue-400 hover:text-white relative shadow-xl duration-high group w-[250px]">
                            <div className="">
                                <img
                                    src={formation.img}
                                    alt=""
                                    className="w-[170px] md:w-[200px] lg:w-[180px] xl:w-[180px] xl:h-[110px] h-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"
                                />
                            </div>

                            <div className="px-3 text-center">
                                <h1 className="text-xl ">{formation.name}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Fromation;
