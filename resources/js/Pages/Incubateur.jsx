import React from "react";
import Image from "../images/init.jpg";

const Incubateur = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[400px]" src={Image} />
            </div>
            <div className="my-5">
                <p className="indent-2 px-3">
                    L’incubateur de l’ESSFAR a pour mission d’encourager
                    l’esprit d’innovation et l’entrepreneuriat en mettant en
                    place un environnement propice à la création d’entreprises
                    innovantes par les étudiants de l’ESSFAR. L’objectif est de
                    permettre aux étudiants de passer de l’idée à la
                    réalisation. Afin d’atteindre cet objectif, les aspects
                    suivants sont développés :
                </p>
                <div className="px-20 my-3">
                    <ul className="list-disc">
                        <li className="text-red-500">
                            <span className="text-black">
                                Formation à la création d’entreprises
                            </span>
                        </li>
                        <li className="text-red-500">
                            <span className="text-black">
                                Aide à la recherche de financements
                            </span>
                        </li>
                        <li className="text-red-500">
                            <span className="text-black">
                                Mise en relation avec les entrepreneurs et les
                                entreprises
                            </span>
                        </li>
                        <li className="text-red-500">
                            <span className="text-black">
                                Accompagnement managérial
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Incubateur;
