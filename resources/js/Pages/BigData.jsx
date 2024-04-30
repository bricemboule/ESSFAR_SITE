import React from "react";
import Image from "../../../public/images/big.jpg";

const Objectifs = [
    {
        item: " Le master Statistiques, Big Data et Intelligence Artificielle a pour objectif de former des étudiants possédant une double compétence en statistique et en informatique nécessaire au traitement et à l’analyse des données massives (Big Data).",
    },
    {
        item: " Ce master vise à mettre les « Big Data » issues de la révolution digitale au service des innovations technologiques.",
    },
];

const BigData = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img
                    className="w-full h-[250px] md:h-[350px] xl:h-[350px] lg:h-[350px]"
                    src={Image}
                />
            </div>
            <div className="m-4">
                <h1 className="text-center text-sky-500 underline text-xl md:text-3xl xl:text-3xl lg:text-3xl">
                    Master Statistiques, Big Data et Intelligence Artificielle
                </h1>

                <div className="py-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        {" "}
                        Objectifs
                    </h3>
                    {Objectifs.map((data) => (
                        <p className="indent-2 text-xl text-justify pt-2">
                            {" "}
                            {data.item}
                        </p>
                    ))}
                </div>

                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Admission
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                        <div className="p-4 text-xl">
                            <h4 className="underline py-2 font-bold">
                                {" "}
                                Master 1
                            </h4>
                            <ul className="list-disc">
                                <li>
                                    L’admission en M1 actuariat est d’office
                                    pour les étudiants de l’ESSFAR ayant validé
                                    la 3ième année de licence Mathématiques et
                                    Economie-Finance-Assurance
                                </li>

                                <li>
                                    Pour les étudiants non ESSFAR, Il est
                                    fortement recommandé d’intégrer le master
                                    Statistiques, Big Data et Intelligence
                                    Artificielle à partir de la 3ième année de
                                    licence afin de bénéficier des cours
                                    spécifiques nécessaires à la poursuite des
                                    études en Master Statistiques & Big Data
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 text-xl">
                            <h4 className="underline font-bold"> Master 2</h4>
                            <p className="p-3">
                                L’admission en M2 Statistiques, Big Data et
                                Intelligence Artificielle est d’office pour les
                                étudiants de l’ESSFAR ayant validé le master 1
                                Statistiques & Big Data.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Débouchés
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                        <div className="p-4 text-xl">
                            <h4 className="font-bold underline">
                                {" "}
                                Metiers cibles
                            </h4>
                            <ul className="list-disc">
                                <li>Data Scientist</li>
                                <li>Data Analyst</li>
                                <li>Statisticien</li>
                                <li>Chargé d’études statistiques</li>
                                <li>Data Ingénieur</li>
                            </ul>
                        </div>
                        <div className="p-4 text-xl">
                            <h4 className="font-bold underline">
                                Secteurs d’activité
                            </h4>
                            <ul className="list-disc">
                                <li>
                                    Tous les secteurs d’activité gérant des gros
                                    volumes de données : banque, finance,
                                    assurance, télécoms, santé, agriculture,
                                    administration, médias, transport,
                                    e-commerce, …
                                </li>
                                <li>Start-Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigData;
