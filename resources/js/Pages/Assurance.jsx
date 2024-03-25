import React from "react";
import { Link } from "react-router-dom";
import Catalogue from "../../pdf/brochures/ESSFAR-Formation-Continue.pdf";
import Formulaire from "../../pdf/fiche inscription/FICHE-DINSCRIPTION-ESSFAR-FPC.pdf";
import Image from "../images/assurance.jpg";

const Assurance = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="my-8">
                <h1 className="text-sky-500 text-center text-3xl uppercase">
                    ASSURANCE ET RISQUES
                </h1>
                <div className="py-5">
                    <div className="flex flex-col p-3">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light border-4">
                                        <thead className="border-b bg-sky-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                            <tr className="text-xl">
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Thématiques
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Mode
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Session
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Durée
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Tarif/Participant (En FCFA)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Analyse de donnees
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    30h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    225 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Series temporelles
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    30h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    225 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    R + Python
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    50h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    375 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Machine Learning
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    60h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    450 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    GLM/Tarification non vie
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    40h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    300 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Provisionnement non vie
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    30h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    225 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Théorie de la crédibilité et
                                                    système bonus-malus
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    30h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    225 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500 ">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Marché des Assurances
                                                    (Agricole/Micro-assurance)
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance/Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    150 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Code CIMA
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance/Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    15h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    120 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Calcul Stochastique
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    40h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    300 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Régime des retraites
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    30h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    225 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    ALM (Gestion-Passif)
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    40h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    300 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Emergence des cash flows et
                                                    profit testing
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    150 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Méthodes numériques
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Distance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    150 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="text-xl whitespace-nowrap  px-6 py-4 font-medium">
                                                    Droit des assurances/Gestion
                                                    des Sociétés d’assurance et
                                                    risk management
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De mars à juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20h
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    150 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium text-xl">
                                                    Comprendre la gestion
                                                    actif-passif en assurance
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    Présentiel
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    De Mars à Juillet
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    1jr
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    350 000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-2 place-items-center">
                    <p className="text-xl">
                        {" "}
                        <Link
                            to={Catalogue}
                            className="text-red-500"
                            download="Catalogue-de-formation"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Télécharger le catalogue complet de la formation
                            continue
                        </Link>
                    </p>
                    <p className="text-xl">
                        {" "}
                        <Link
                            to={Formulaire}
                            className="text-red-500"
                            download="Fiche-inscription"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Télécharger le formulaire d’inscription formation
                            continue
                        </Link>
                    </p>
                </div>
                <div className="mt-8">
                    <h1 className="text-4xl text-center">
                        {" "}
                        Consulter nos offres de formations
                    </h1>
                    <div className="py-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 md:gap-2 place-items-center">
                        <p className="text-xl">
                            {" "}
                            <Link
                                to="/formation/formation-continue/banque"
                                className="text-sky-500"
                            >
                                Banque et Finance
                            </Link>
                        </p>
                        <p className="text-xl">
                            {" "}
                            <Link
                                to="/formation/formation-continue/assurance"
                                className="text-sky-500"
                            >
                                Assurance et Risques
                            </Link>
                        </p>
                        <p className="text-xl">
                            {" "}
                            <Link
                                to="/formation/formation-continue/data"
                                className="text-sky-500"
                            >
                                Statistiques, Big Data et Intelligence
                                Artificielle
                            </Link>
                        </p>
                        <p className="text-xl">
                            {" "}
                            <Link
                                to="/formation/formation-continue/learder"
                                className="text-sky-500"
                            >
                                Leadership & Gestion de Projet
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Assurance;
