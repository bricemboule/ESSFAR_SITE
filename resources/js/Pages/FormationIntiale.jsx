import React from "react";
import { Link } from "react-router-dom";
import BigData from "../images/Data.jpg";
import Actuariat from "../images/actuaria.jpg";
import inf from "../images/banque.jpg";
import Image from "../images/ini.jpg";
import Info from "../images/licoInfo.png";
import Lico from "../images/math.jpg";
import SI from "../images/sinfo.jpeg";
const paragraphe = [
    {
        para: "  L’ESSFAR propose une offre de formation initiale sur une durée de 5 ans avec pour objectif la préparation au diplôme de Master Professionnel. L’originalité de la formation repose sur une pédagogie par projet qui donne aux étudiants des outils et des méthodes pour répondre efficacement aux problématiques concrètes rencontrées dans le monde professionnel. Le modèle des enseignements est celui du système LMD avec 2 cycles :",
    },
];
const cycle = [
    {
        name: "Cycle Licence",
        desc: "Le cycle de licence permet d’acquérir des compétences solides en mathématiques appliquées et en informatique, nécessaires à la poursuite des études en Master. La validation de ce cycle donne lieu à un diplôme de Licence.",
        specialite: [
            {
                titre: "	Licence – Mathématiques et Economie-Finance-Assurance",
                img: Lico,
                lien: "/formation/formation-initiale/mathematique",
                desc: " Développez des connaissances solides en mathématiques appliquées, complétées par une bonne compréhension de l’informatique et des sciences sociales.",
            },
            {
                titre: " Licence – Informatique des organisations",
                img: Info,
                lien: "/formation/formation-initiale/informatique",
                desc: " Développez des connaissances solides en informatique, complétées par une bonne compréhension des mathématiques appliquées et des sciences sociales.",
            },
        ],
    },
    {
        name: "Cycle Master",
        desc: "Le cycle Master permet d’approfondir ses connaissances et de se spécialiser. La validation de ce cycle donne lieu à un diplôme de Master 2 professionnel.",
        specialite: [
            {
                titre: "Actuariat",
                img: Actuariat,
                lien: "/formation/formation-initiale/actuariat",
                desc: " Devenez spécialiste en gestion des risques dans les domaines de l’assurance, de la finance et de la protection sociale.",
            },
            {
                titre: "Master Statistiques, Big Data et Intelligence Artificielle",
                img: BigData,
                lien: "/formation/formation-initiale/BigData",
                desc: " Devenez expert en traitement et analyse intelligente de données massives, de sources et de natures multiples.",
            },
            {
                titre: "Master Ingénierie Financière",
                img: inf,
                lien: "/formation/formation-initiale/ingenierieFinanciere",
                desc: "Devenez spécialiste dans les métiers de la Finance et dans l’innovation financière.",
            },
            {
                titre: "Master Systèmes d’Information",
                img: SI,
                lien: "/formation/formation-initiale/Systeme-information",
                desc: "Devenez orchestrateur d’orientations stratégiques, organisationnelles et technologiques des SI selon les besoins métiers.",
            },
        ],
    },
];

const FormationIntiale = () => {
    return (
        <>
            <div>
                <div className="relative z-[-1]">
                    <img className="w-full h-[500px]" src={Image} />
                </div>
                <div className="text-md my-4">
                    {paragraphe.map((data) => (
                        <p className="indent-4 text-justify text-gray-700">
                            {data.para}
                        </p>
                    ))}
                </div>
                {cycle.map((data) => (
                    <div className="py-4">
                        <h1 className="font-tangeri text-5xl text-center underline">
                            {data.name}
                        </h1>
                        <p className="text-xl py-5 text-gray-700">
                            {data.desc}
                        </p>
                        <div className="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                            {data.specialite.map((data) => (
                                <div className="flex items-center gap-4">
                                    <div className="">
                                        <img
                                            src={data.img}
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="p-2 text-center">
                                        <h2 className="text-xl text-blue-500">
                                            {data.titre}
                                        </h2>
                                        <p className="text-sm text-gray-500 text-justify">
                                            {data.desc}
                                        </p>
                                        <div className="flex items-center gap-4 text-center ml-40">
                                            <p className="text-red-500 italic">
                                                <Link to={data.lien}>
                                                    Plus d'infos
                                                </Link>
                                            </p>
                                            <p className="text-red-500 italic">
                                                <Link>S'inscrire</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FormationIntiale;
