import React from "react";
import { Link } from "react-router-dom";
import Banke from "../../../public/images/banqueFinance.jpeg";
import Stat from "../../../public/images/big.jpg";
import Image from "../../../public/images/cont1.webp";
import Leader from "../../../public/images/leadership.png";
import Risk from "../../../public/images/risk.jpeg";

const formation = [
    {
        titre: "BANQUE – FINANCE",
        desc: "Comprendre les nouvelles contraintes réglementaires et leur mise en œuvre dans les institutions financières. Rester en veille sur les techniques actuarielles et financières.",
        img: Banke,
        lien: "/formation/formation-continue/banque",
    },
    {
        titre: "LEADERSHIP ET GESTION DE PROJETS",
        desc: "Donner des compétences aux managers de demain pour piloter des projets complexes.",
        img: Leader,
        lien: "/formation/formation-continue/learder",
    },
    {
        titre: "ASSURANCE ET RISQUES",
        desc: "Acquérir des compétences dans les métiers de l'assurance et de la finance. Développer et diversifier les compétences dans la gestion des risques.",
        img: Risk,
        lien: "/formation/formation-continue/assurance",
    },
    {
        titre: "STATISTIQUES, BIG DATA ET INTELLIGENCE ARTIFICIELLE",
        desc: "Donner les outils aux managers des SI afin d'être plus performant dans la mise en place des processus de transformation numérique. Développer des connaissances solides dans le stockage, le traitement et l'analyse de données massives pour permettre aux entreprises d'innover et de rester concurrentielles.",
        img: Stat,
        lien: "/formation/formation-continue/data",
    },
];

const FormationContinue = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img className="w-full h-[350px]" src={Image} />
            </div>
            <div className="text-xl">
                <p className="px-6 py-2 text-sm md:text-xl lg:text-xl xl:text-xl text-justify indent-4">
                    La formation continue de l’ESSFAR a pour vocation
                    d’accompagner les professionnels dans les différentes étapes
                    de leur carrière en leur apportant des outils pour se
                    former, mais aussi des certifications ou des diplômes leur
                    permettant de valider leurs compétences.
                </p>
            </div>

            <div className=" px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                {formation.map((data) => (
                    <div className="flex items-center gap-6 p-8">
                        <div>
                            <img
                                src={data.img}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl text-blue-500 capitalize">
                                {data.titre}
                            </h2>
                            <p className="text-xl text-gray-500 text-justify">
                                {data.desc}
                            </p>
                            <p className="px-8 py-2 italic text-red-500">
                                <Link to={data.lien}>Plus de details</Link>{" "}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormationContinue;
