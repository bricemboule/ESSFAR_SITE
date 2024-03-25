import React from "react";
import Image from "../images/dip.jpg";
const projet = [
    {
        name: "L’excellence Académique",
        items: [
            {
                item: "La sélection des meilleurs étudiants via des concours,",
            },
            {
                item: "La sélection des meilleurs enseignants. Des enquêtes de satisfaction auprès des étudiants se font régulièrement,",
            },
            {
                item: "Les infrastructures de qualité mises à la disposition des étudiants: bibliothèque physique et numérique, salle informatique, connexion Wifi à haut débit, service de restauration.",
            },
        ],
    },
    {
        name: "L’internationalisation",
        items: [
            {
                item: "La maîtrise de l’anglais attestée par des certifications,",
            },
            {
                item: "Le développement des partenariats académiques permettant la mobilité de nos étudiants, le partage d’expérience entre enseignants et la conformité aux standards internationaux,",
            },
            {
                item: "L’ouverture aux étudiants étrangers.",
            },
        ],
    },
    {
        name: "La professionnalisation",
        items: [
            {
                item: "La pédagogie associe la théorie à la pratique par des projets sur des cas concrets dès la 1ière année,",
            },
            {
                item: "L’intervention des professionnels dans les formations,",
            },
            {
                item: "Le développement des partenariats avec les entreprises pour faciliter l’insertion professionnelle de nos étudiants et pour gérer les compétences de leurs collaborateurs via la formation continue,",
            },
            {
                item: "Le soutien à l’entrepreneuriat pour encourager nos étudiants à prendre des initiatives et à développer des projets innovants.",
            },
        ],
    },
    {
        name: "L’inclusion sociale",
        items: [
            {
                item: "Le respect des valeurs universelles de solidarité, d’équité et d’égalité,",
            },
            {
                item: "L’attribution des bourses d’études ou prêts aux étudiants les plus méritants issus des milieux modestes.",
            },
        ],
    },
];
const ProjetPedagogique = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="m-8">
                <p className="text-3xl text-center">
                    Notre projet pédagogique s’appuie sur quatre valeurs clées :
                </p>

                <div className="m-8">
                    {projet.map((data) => (
                        <div className="p-6">
                            <h1 className="text-3xl text-center text-blue-500">
                                {data.name} :
                            </h1>
                            {data.items.map((item) => (
                                <ul className="list-disc">
                                    <li className="text-justify text-xl text-red-500">
                                        <span className="text-black">
                                            {item.item}
                                        </span>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjetPedagogique;
