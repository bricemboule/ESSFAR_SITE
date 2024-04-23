import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Img from "../../../../public/images/cont1.webp";
import Img2 from "../../../../public/images/ini.jpg";

const FormationsData = [
    {
        id: 1,
        img: Img2,
        name: "Formation Initiale",
        lien: "/formation/formation-initiale",
        description:
            "Garantissez votre avenir professionnel en démarrant vos études supérieures dans une école d'excellence.",
    },
    {
        id: 2,
        img: Img,
        name: "Formation Continue",
        lien: "/formation/formation-continue",
        description:
            "Renforcez et perfectionnez vos compétences pour vous adapter au changement et rendre votre entreprise compétitive.",
    },
];

const Categorie = () => {
    return (
        <>
            <div className="mt-12">
                <div className="container pt-6">
                    <div className="pt-4 text-center mb-5 max-w-[800px] mx-auto">
                        <h1 className="text-center text-sky-500 text-6xl font-tangeri">
                            Une Offre de Formation à Votre Portée
                        </h1>
                    </div>
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-2 place-items-center">
                        {FormationsData.map((formation) => (
                            <div className="w-80">
                                <div className="py-2">
                                    <h1 className="font-tangeri text-5xl">
                                        {formation.name}
                                    </h1>
                                </div>
                                <div className="text-center rounded-md border-4">
                                    <img src={formation.img} alt="" />
                                </div>
                                <p className="indent-2">
                                    {formation.description}
                                </p>
                                <div className="flex items-center gap-2 text-xl italic">
                                    <p className="text-red-500 pl-4">
                                        <Link to={formation.lien}>
                                            Plus d'infos...
                                        </Link>
                                    </p>
                                    <p className="text-red-500 pl-4">
                                        <GoArrowRight />
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

export default Categorie;
