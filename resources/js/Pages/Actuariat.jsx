import React from "react";
import Image from "../../../public/images/ris.jpg";

const Objectifs = [
    {
        item: " L’objectif du master 2 Actuariat de l’ESSFAR est de former des spécialistes en gestion des risques dans les domaines de l’assurance, de la finance et de la protection sociale.",
    },
    {
        item: " La formation d’Actuariat commence en 3ieme année de licence de Mathématiques et Economie-Finance-Assurance.",
    },
    {
        item: "Ce master permet aux étudiants d’acquérir une formation théorique et appliquée de haut niveau en probabilités, statistiques et dans les outils financiers d’aide à la décision. Elle est complétée par des enseignements d’informatique, de gestion, de droit, d’économie, de comptabilité et d’anglais. ",
    },
    {
        item: "La formation vise à respecter les exigences de l’Association Actuarielle Internationale  (AAI) conduisant à l’exercice du métier d’Actuaire. ",
    },
];

const Actuariat = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img
                    className="w-full h-[250px] md:h-[350px] xl:h-[350px] lg:h-[350px]"
                    src={Image}
                />
            </div>
            <div className="m-4">
                <h1 className="text-center text-sky-500 underline text-3xl">
                    Master en Actuariat
                </h1>

                <div className="py-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Objectifs
                    </h3>
                    {Objectifs.map((data) => (
                        <p className="indent-2 text-xl text-justify pt-2">
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
                                    {" "}
                                    Pour les étudiants non ESSFAR, Il est
                                    fortement recommandé d’intégrer le master
                                    Actuariat à partir de la 3ième année de
                                    licence Mathématiques et
                                    Economie-Finance-Assurance afin de
                                    bénéficier des cours spécifiques nécessaires
                                    à la poursuite des études en master
                                    actuariat
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 text-xl">
                            <h4> Master 2</h4>
                            <p>
                                L’admission en Master 2 est d’office pour les
                                étudiants de l’ESSFAR ayant validé leur Master 1
                                actuariat.
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
                                <li>Actuaire</li>
                                <li>chargé d’études actuarielles</li>
                            </ul>
                        </div>
                        <div className="p-4 text-xl">
                            <h4 className="font-bold underline">
                                Secteurs d’activité
                            </h4>
                            <ul className="list-disc">
                                <li>Compagnies d’assurance</li>
                                <li>Banques et institutions financières</li>
                                <li>Organismes de prévoyance</li>
                                <li>Caisses de retraite</li>
                                <li>Mutuelles</li>
                                <li>Cabinets de conseil</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actuariat;
