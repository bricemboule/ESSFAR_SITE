import React from "react";
import Image from "../images/mobilite.jpg";

const Mobilites = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[600px]" src={Image} />
            </div>
            <div className="m-8">
                <h1 className="text-center text-sky-500 text-3xl">
                    Les formations en mobilité
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-x-24 place-items-center">
                    <div className="p-4">
                        <h1 className="text-xl text-red-500 underline">
                            Université Paris Dauphine – Paris
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
                            Université Paris Dauphine – Tunis
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
                            {" "}
                            Université de Nice Sophia – Antipolis{" "}
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
                            {" "}
                            Euria Brest{" "}
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
                </div>
            </div>
        </>
    );
};

export default Mobilites;
