import React from "react";
import Image from "../../../public/images/systeme-dinformation4.png";

const Objectifs = [
    {
        item: " Le Master Systèmes d’Information a pour objectif d’offrir aux étudiants les compétences nécessaires à la compréhension des systèmes d’informations sur les aspects management et informatique.",
    },
    {
        item: " Ils doivent être capables de comprendre et traduire les besoins d’un métier en termes techniques, mais aussi de manager une équipe, piloter des projets et interagir avec des métiers différents au sein d’une même organisation.",
    },
    {
        item: " Cette offre de formation répond aux besoins des entreprises et des administrations dans le domaine de la transformation numérique.",
    },
];

const SI = () => {
    return (
        <div className="relative z-[-1]">
            <div className="">
                <img
                    className="w-full h-[250px] md:h-[350px] xl:h-[350px] lg:h-[350px]"
                    src={Image}
                />
            </div>
            <div className="m-4">
                <h1 className="text-center text-sky-500 underline text-3xl">
                    Master en Système d'information
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
                                    L’admission en M1 systèmes d’information est
                                    d’office pour les étudiants de l’ESSFAR
                                    ayant validé la 3ième année de licence
                                    d’Informatique des Organisations
                                </li>

                                <li>
                                    Pour les étudiants non ESSFAR, Il est
                                    fortement recommandé d’intégrer le master
                                    Systèmes d’Information à partir de la 3ième
                                    année de licence Informatique des
                                    Organisations afin de bénéficier des cours
                                    spécifiques nécessaires à la poursuite des
                                    études en Master
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 text-xl">
                            <h4 className="underline py-2 font-bold">
                                {" "}
                                Master 2
                            </h4>
                            <p>
                                L’admission en M2 Systèmes d’Information est
                                d’office pour les étudiants de l’ESSFAR ayant
                                validé le master 1 Systèmes d’Information.
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
                                <li>Directeur de Systèmes d’Information</li>
                                <li>
                                    Consultant fonctionnel en systèmes
                                    d’information
                                </li>
                                <li>Consultant en organisation</li>
                                <li>
                                    Consultant en audit des systèmes
                                    d’information
                                </li>
                                <li>
                                    Responsable de projet en systèmes
                                    d’information
                                </li>
                                <li>Assistance à maitrise d’ouvrage</li>
                            </ul>
                        </div>

                        <div className="p-4 text-xl">
                            <h4 className="font-bold underline">
                                Secteurs d’activité
                            </h4>
                            <p>Tous les secteurs d’activité sont concernés.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SI;
