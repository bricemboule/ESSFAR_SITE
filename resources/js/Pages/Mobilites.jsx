import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../public/images/mobilite.jpg";

const Mobilites = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img
                    className="w-full sm:h-[150px] sm:text-sm md:h-[350px] lg:h-[350px] xl:h-[350px]"
                    src={Image}
                />
            </div>
            <div className="m-8">
                <h1 className="text-center text-sky-500 text-3xl">
                    Les formations en mobilité
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-x-24 place-items-center">
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            <Link
                                to="https://dauphine.psl.eu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Université Paris Dauphine – Paris
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>Licence de Mathématiques Appliquées</li>
                                <li>
                                    Master Mathématiques et Applications
                                    <div className="px-3">
                                        <ul className="list-disc">
                                            <li>Actuariat</li>
                                            <li>
                                                Ingénierie Statistique et
                                                Financière (ISF)
                                            </li>
                                            <li>
                                                Mathématiques de l’Assurance, de
                                                l’Economie et de la Finance
                                                (MASEF)
                                            </li>
                                            <li>
                                                Mathématiques, Apprentissage et
                                                Sciences Sociales (MASH)
                                            </li>
                                            <li>
                                                Mathématiques Appliquées et
                                                Théoriques (MATH)
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            <Link
                                to="https://tunis.dauphine.psl.eu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Université Paris Dauphine – Tunis
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>Licence de Mathématiques Appliquées</li>
                                <li>Master Actuariat</li>
                                <li>Master Big Data</li>
                                <li>
                                    Formations à venir (Ingénierie Financière,
                                    Systèmes d’information)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            <Link
                                to="https://unt.unice.fr/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Université de Nice Sophia – Antipolis
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>
                                    Master IMAFA : Informatique et Mathématiques
                                    Appliquées à la Finance et à l’Assurance
                                </li>
                                <li>Master Data Science</li>
                                <li>
                                    Master Modélisation Stochastique et
                                    Statistique
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            <Link
                                to="https://www.univ-brest.fr/euria/fr/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Euria Brest
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>Licence en Actuariat</li>
                                <li>Master en Actuariat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            {" "}
                            <Link
                                to="https://www.univ-brest.fr/fr"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Université Bretagne Occidentale{" "}
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>Licence en mathématiques appliquées</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            {" "}
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                to="https://www.estia.fr/"
                            >
                                ESTIA
                            </Link>
                        </h1>
                        <div className="px-8">
                            <ul className="list-disc text-xl">
                                <li>Licence en Actuariat</li>
                                <li>Master en Actuariat</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mobilites;
