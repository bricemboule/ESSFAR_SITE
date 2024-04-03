import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";

import { Link } from "react-router-dom";
import Aout19A from "../../pdf/sujet/L1/Concours ESSFAR L1 Session AOUT 2019 - Mathematiques VA.pdf";
import Aout19 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Aout 2019 - Mathematiques VF.pdf";
import Avr20 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2020 - Mathematiques VF.pdf";
import Avril21 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2021 - Mathématiques VA.pdf";
import Avril21A from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2021 - Mathématiques VF.pdf";
import Avril22 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2022 - Mathématiques.pdf";
import Avril2 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2023 - Mathématiques VA.pdf";
import Avril1 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Avril 2023 - Mathématiques VF.pdf";
import Juillet21 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Juillet 2021 - Mathématiques VA.pdf";
import Juin1 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Juin 2023 - Mathématiques VF.pdf";
import Juin2 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Juin 2023- Mathématiques VA.pdf";
import Oct20A from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Octobre 2020 - Mathématiques VA.pdf";
import Oct20 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Octobre 2020 - Mathématiques VF.pdf";
import L3Jui20 from "../../pdf/sujet/L3/CONCOURS_ESSFAR_Licence_2020.pdf";
import L3Sept21 from "../../pdf/sujet/L3/CONCOURS_ESSFAR_Licence_21.pdf";
import L3vril from "../../pdf/sujet/L3/Concours ESSFAR L3 Session Avril 2020 - Mathematiques VF.pdf";
import L3Jui22 from "../../pdf/sujet/L3/Concours ESSFAR L3 Session Juillet 2022 - Mathématiques VF.pdf";
import L3Juin22 from "../../pdf/sujet/L3/Concours ESSFAR L3 Session Juin 2023 - Mathématiques.pdf";
import L3Sept20 from "../../pdf/sujet/L3/Concours ESSFAR L3 Session Septembre 2020- Maths.pdf";
import L3Jui from "../../pdf/sujet/L3/Concours ESSFAR L3 Session d'Aout 2019 - Mathematiques.pdf";
import L39A from "../../pdf/sujet/L3/Concours d'entree en L3 - Session de septembre - Mathematiques VA.pdf";
import L39 from "../../pdf/sujet/L3/Concours d'entree en L3 - Session de septembre - Mathematiques VF.pdf";
import L3Jui18 from "../../pdf/sujet/L3/Epreuve de Math Juillet 2018.pdf";
import L3A18 from "../../pdf/sujet/L3/SESSION D'AOUT 2018 - Epreuve de Mathematiques.pdf";

import Act5 from "../../pdf/sujet/act/CONCOURS_ESSFAR_Master_2020.pdf";
import Act3 from "../../pdf/sujet/act/CONCOURS_ESSFAR_Master_21.pdf";
import Act4 from "../../pdf/sujet/act/CONCOURS_ESSFAR_Master_22-Mathématiques1.pdf";
import Act2 from "../../pdf/sujet/act/Concours ESSFAR M1 Session Septembre 2020- Maths.pdf";
import Act1 from "../../pdf/sujet/act/Concours d'entree en Master I - Session de septembre - Mathematiques.pdf";

import {
    default as Sept20A,
    default as Sept21A,
} from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Septembre 2020 - Mathématiques VA.pdf";
import Sept20 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Septembre 2020 - Mathématiques VF.pdf";
import Sept21 from "../../pdf/sujet/L1/Concours ESSFAR L1 Session Septembre 2021 - Mathématiques VF.pdf";

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
        session: "Session de Juin 2023",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Juin1,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Juin2,
            },
        ],
    },
    {
        session: "Session d'Avril 2023",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Avril1,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Avril2,
            },
        ],
    },

    {
        session: "Session d'Avril 2022",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Avril22,
            },
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Avril22,
            },
        ],
    },
    {
        session: "Session de Septembre 2021",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Sept21,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Sept21A,
            },
        ],
    },
    {
        session: "Session de Juillet 2021",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Juillet21,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Juillet21,
            },
        ],
    },
    {
        session: "Session de Avril 2021",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: Avril21A,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Avril21,
            },
        ],
    },
    {
        session: "Session de Octobre 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques ",
                fichier: Oct20,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Oct20A,
            },
        ],
    },
    {
        session: "Session de Septembre 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques ",
                fichier: Sept20,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Sept20A,
            },
        ],
    },
    {
        session: "Session de Avril 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques ",
                fichier: Avr20,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Avr20,
            },
        ],
    },
    {
        session: "Session de Août 2019",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques VF",
                fichier: Aout19,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: Aout19A,
            },
        ],
    },
];

const L3 = [
    {
        session: "Session de Aout 2018",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3A18,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3A18,
            },
        ],
    },
    {
        session: "Session de Juillet 2018",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Jui18,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Jui18,
            },
        ],
    },
    {
        session: "Session de Septembre 2019",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L39,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L39A,
            },
        ],
    },
    {
        session: "Session de Juillet 2019",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Jui,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Jui,
            },
        ],
    },
    {
        session: "Session de Septembre 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Sept20,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Sept20,
            },
        ],
    },
    {
        session: "Session de Juillet 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Jui20,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Jui20,
            },
        ],
    },
    {
        session: "Session de Septembre 2021",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Sept21,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Sept21,
            },
        ],
    },
    {
        session: "Session d'Avril 2020",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3vril,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3vril,
            },
        ],
    },
    {
        session: "Session de Juillet 2022",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Jui22,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Jui22,
            },
        ],
    },
    {
        session: "Session de Juin 2022",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques",
                fichier: L3Juin22,
            },
            {
                intitule: "Epreuve de Mathématiques VA",
                fichier: L3Juin22,
            },
        ],
    },
];

const Act = [
    {
        session: "Concours de bourse",
        sujet: [
            {
                intitule: "Epreuve de Mathématiques Septembre 2019",
                fichier: Act1,
            },
            {
                intitule: "Epreuve de Mathématiques Septembre 2020",
                fichier: Act2,
            },
            {
                intitule: "Epreuve de Mathématiques Septembre 2021",
                fichier: Act3,
            },
            {
                intitule: "Epreuve de Mathématiques Septembre 2022",
                fichier: Act4,
            },
            {
                intitule: "Epreuve de Mathématiques Aout 2020",
                fichier: Act5,
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
                fichier: "",
            },
            {
                intitule: "Epreuve d'informatique VA",
                fichier: "",
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
                        {L3.map((data) => (
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
                        {Act.map((data) => (
                            <div className="text-center m-4">
                                <p className="text-sky-500 underline text-xl">
                                    {data.session}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-x-20 place-items-center">
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
