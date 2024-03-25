import React from "react";
import Image from "../images/lico-math.jpg";

const admission = [
    {
        annee: "En 1ère année ",
        desc: " L’admission est sur concours plus entretien pour les titulaires d’un baccalauréat scientifique: une session en juillet et une autre en août.",
    },
    {
        annee: " En 2ième année ",
        desc: " Les étudiants ESSFAR ayant validé leur 1ère année sont admis d’office en 2ième année.",
    },
    {
        annee: " En 3ième année ",
        desc: " Les étudiants ESSFAR ayant validé leur 2ère année sont admis d’office en 3ième année. Pour les étudiants venant des autres universités ou écoles, une admission est possible en 3ième année sur concours plus entretien ou sur dossier plus entretien.",
    },
];

const LicenceMath = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="m-4">
                <h1 className="text-center text-sky-500 underline text-3xl">
                    Licence - Mathématiques et Economie-Finance-Assurance
                </h1>
                <div className="py-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        {" "}
                        Objectifs
                    </h3>
                    <p className="indent-2 text-xl text-justify pt-2">
                        La licence Mathématiques et Economie-Finance-Assurance
                        propose une formation solide en mathématiques
                        appliquées, complétée des enseignements en informatique
                        et en sciences sociales :
                    </p>
                    <div className="pl-8">
                        <ul className="list-disc">
                            <li>
                                <span className="font-bold">
                                    Les mathématiques appliquées,
                                </span>{" "}
                                en particulier la probabilité, les statistiques,
                                l’analyse, l’optimisation et les méthodes
                                numériques.
                            </li>
                            <li>
                                <span className="font-bold">
                                    L’informatique,
                                </span>{" "}
                                en particulier les bases de données, les
                                langages de programmation et les systèmes
                                d’information
                            </li>
                            <li>
                                <span className="font-bold">
                                    Les sciences sociales,
                                </span>{" "}
                                en particulier l’économie, la gestion, la
                                finance et l’assurance.
                            </li>
                            <li>
                                <span className="font-bold">L'anglais</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Admission
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-x-20 place-items-center">
                        {admission.map((data) => (
                            <div className="p-4 text-xl">
                                <h4 className="underline py-2 font-bold">
                                    {" "}
                                    {data.annee}
                                </h4>
                                <p>{data.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Parcours
                    </h3>
                    <p>
                        Après un tronc commun en 1ère et 2ième années, les
                        étudiants choisissent en 3ième année le parcours «
                        Mathématiques et Economie-Finance-Assurance »
                    </p>
                </div>
                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Spécialisations
                    </h3>
                    <p className="py-2">
                        Au terme de leur 3ième année, les étudiants poursuivent
                        en Master dans l’une des trois spécialités suivantes :
                    </p>
                    <div className="pl-8">
                        <ul className="list-disc">
                            <li>Actuariat,</li>
                            <li>Ingénierie Financière,</li>
                            <li>
                                Statistiques,Big Data et Intelligence
                                artificielle
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenceMath;
