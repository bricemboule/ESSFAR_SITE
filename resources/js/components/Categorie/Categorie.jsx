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
                    <h1 className="text-center text-sky-500 text-4xl md:text-5xl xl:text-6xl lg:text-6xl font-tangeri">
                        Une Offre de Formation à Votre Portée
                    </h1>

                    <div
                        className="pt-2 grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 md:gap-16 sm:place-items-center xl:place-items-center lg:place-items-center"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        {FormationsData.map((formation) => (
                            <div className="sm:w-80 md:w-60 lg:w-80 xl:w-80">
                                <div className="py-2">
                                    <h1 className="font-tangeri text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
                                        {formation.name}
                                    </h1>
                                </div>
                                <div className="text-center rounded-md border-4">
                                    <img
                                        src={formation.img}
                                        alt=""
                                        className=""
                                    />
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
