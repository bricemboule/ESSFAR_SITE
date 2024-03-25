import React from "react";
import Image from "../images/banque.jpg";

const IngFinanciere = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="m-4">
                <h1 className="text-center text-sky-500 underline text-3xl">
                    Master Ingénierie Financière
                </h1>

                <div className="py-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Objectifs
                    </h3>

                    <p className="indent-2 text-xl text-justify pt-2">
                        Le Master Ingénierie Financière a pour finalité d’offrir
                        aux étudiants une formation de haut niveau en Finance
                        avec une maîtrise des outils mathématiques et
                        économiques d’aide à la décision. Cette formation vise
                        en premier lieu les grandes entreprises et les
                        institutions financières ayant besoin des cadres qui
                        maîtrisent les métiers de haut de bilan, mais aussi
                        capables d’apporter leur contribution au développement
                        de l’innovation financière.
                    </p>
                    <p className="text-xl text-center text-justify">
                        Domaine des enseignements:
                        <div className="px-10">
                            <ul className="list-disc">
                                <li>Finance d’entreprise</li>
                                <li>Finance de marché</li>
                                <li>
                                    Gestion financière des banques et des
                                    assurances
                                </li>
                                <li>Ingénierie financière</li>
                                <li>Fusion-Acquisition</li>
                            </ul>
                        </div>
                    </p>
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
                            <p className="px-8">
                                <ul className="list-disc">
                                    <li>
                                        L’admission en M1 actuariat est d’office
                                        pour les étudiants de l’ESSFAR ayant
                                        validé la 3ième année de licence
                                        Mathématiques et
                                        Economie-Finance-Assurance
                                    </li>

                                    <li>
                                        Une admission est possible en Master 1
                                        pour les étudiants non ESSFAR ayant
                                        validé une licence en gestion, en
                                        économie ou tout autre diplôme
                                        équivalent.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="p-4 text-xl">
                            <h4 className="underline font-bold"> Master 2</h4>
                            <p className="p-3">
                                L’admission en Master 1 Ingénierie Financière
                                est d’office pour les étudiants de l’ESSFAR
                                ayant validé le master 1 Ingénierie Financière.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-center underline text-2xl text-red-500">
                        Débouches
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                        <div className="p-4 text-xl">
                            <h4 className="font-bold underline">
                                {" "}
                                Metiers cibles
                            </h4>
                            <div className="px-10">
                                <ul className="list-disc">
                                    <li>Directeur financier</li>
                                    <li>Analyste financier</li>
                                    <li>Analyste crédit</li>
                                    <li>Gérant de portefeuille</li>
                                    <li>Auditeur financier</li>
                                    <li>
                                        Consultant en financement de projets
                                    </li>
                                    <li>Consultant en fusion-acquisition</li>
                                    <li>Ingénieur financier</li>
                                    <li>Gestionnaire des risques</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-8 text-xl">
                            <h4 className="font-bold underline">
                                Secteurs d’activité
                            </h4>
                            <div className="px-10">
                                <ul className="list-disc">
                                    <li>
                                        Direction financière des entreprises
                                    </li>
                                    <li>Banques</li>
                                    <li>Compagnies d’assurance</li>
                                    <li>Institutions de micro-finance</li>
                                    <li>Bourses</li>
                                    <li>Fonds d’investissement</li>
                                    <li>Cabinets d’audit et de conseil</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngFinanciere;
