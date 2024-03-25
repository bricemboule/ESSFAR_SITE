import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";

import { Link } from "react-router-dom";
import {
    default as Info1,
    default as Info2,
} from "../../pdf/sujet/sbd/FICHE D'INSCRIPTION CONCOURS AVRIL ESSFAR - MASTER 1.pdf";
import Image from "../images/sujet.jpg";

const niveau = [
    {
        intitule: "1ERE ANNEE",
        id: "un",
    },
    {
        intitule: "2EME ANNEE",
        id: "deux",
    },
    {
        intitule: "3EME ANNEE",
        id: "trois",
    },
    {
        intitule: "MASTER I ACTUARIAT",
        id: "quatre",
    },
    {
        intitule: "MASTER I BIG DATA",
        id: "cinq",
    },
    {
        intitule: "MASTER I INGENIERIE FINANCIERE",
        id: "six",
    },
];

const L1 = [
    {
        session: "Session de Septembre 2022",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info2,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
    {
        session: "Concours bourse",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info1,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
    {
        session: "Session de Septembre 2020",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info2,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
    {
        session: "Session de Septembre 2023",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info2,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
];

const Big = [
    {
        session: "Concours bourse",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info1,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
    {
        session: "Session de Septembre 2020",
        sujet: [
            {
                intitule: "Epreuve d'informatique VF",
                fichier: Info2,
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: Info1,
            },
        ],
    },
];

const AnciensSujet = () => {
    const [show, setShow] = useState({
        id: "un",
    });

    useEffect(() => {
        console.log(show);
    }, [show]);

    const toggleDiv = (e) => {
        setShow({
            id: e.target.id,
        });
    };
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="my-8">
                <h1 className="font-tangeri text-6xl text-center">
                    Anciennes Epreuves
                </h1>
                <div className="mx-4 mt-6 border border-b-4 border-x-2 border-sky-500">
                    <div className="bg-sky-500 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 md:gap-x-2 place-items-center ">
                        {niveau.map((data) => (
                            <div className="text-white">
                                <button
                                    id={data.id}
                                    onClick={(e) => {
                                        toggleDiv(e);
                                    }}
                                >
                                    {data.intitule}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={show.id === "un" ? `un` : "un hidden"}>
                        {L1.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-5 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2 py-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={show.id === "deux" ? `deux` : "deux hidden"}
                    >
                        {Big.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={
                            show.id === "trois" ? `trois` : "trois hidden"
                        }
                    >
                        {Big.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={
                            show.id === "quatre" ? `quatre` : "quatre hidden"
                        }
                    >
                        {Big.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={show.id === "cinq" ? `cinq` : "cinq hidden"}
                    >
                        {Big.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={show.id === "six" ? `six` : "six hidden"}>
                        {Big.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                                    {data.sujet.map((data) => (
                                        <div className="flex items-center gap-2">
                                            <p>{data.intitule}</p>
                                            <Link
                                                to={data.fichier}
                                                className="text-red-500"
                                                download="Catalogue-de-formation"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFileDownload />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnciensSujet;
