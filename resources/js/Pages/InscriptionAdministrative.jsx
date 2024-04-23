import React from "react";

const donnee = [
    {
        titre: "Préalables",
        etapes: [
            {
                etape: "Premiere inscription",
                liste: [
                    {
                        name: "Avoir reçu la confirmation de la réussite au concours;                   ",
                    },
                    {
                        name: "Les candidats retenus disposent de 15 jours pour s’inscrire et garantir leurs places dans la formation.",
                    },
                ],
            },
            {
                etape: "Etudiants ESSFAR",
                liste: [
                    {
                        name: "Avoir reçu son relevé de notes de l’année précédente ou avoir obtenu tous ses résultats pour le compte de l’année précédente",
                    },
                ],
            },
        ],
    },
];

const procedure = [
    {
        titre: "Procédure d’inscription administrative",
        desc: "L’inscription académique se fait pendant les mois de juillet et août en 5 étapes :",
        etape: [
            {
                id: 1,
                name: "Se rendre à la banque pour le versement des frais exigés.",
            },
            {
                id: 2,
                name: "Se rendre sur la plateforme d’inscription de l’ESSFAR",
            },
            {
                id: 3,
                name: "Ouvrir la plateforme à l'aide de son login et de son mot de passe",
            },
            {
                id: 4,
                name: "Compléter le formulaire d'inscription en ligne, imprimer et signer la fiche d’inscription générée",
            },
            {
                id: 5,
                name: "Se rendre à ESSFAR pour le dépôt du dossier complet ou l’envoyer par mail à l’adresse contact@essfar.com (liste des pièces à détailler)",
            },
        ],
    },
];

const InscriptionAdministrative = () => {
    return (
        <div>
            {/*<div className="relative z-[-1]">
                <img className="w-full h-[600px]" src={Image} />
    </div>*/}
            {donnee.map((data) => (
                <div className="p-8">
                    <h1 className="text-3xl text-center text-blue-500 underline">
                        {data.titre}
                    </h1>
                    <div className="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 place-items-center">
                        {data.etapes.map((data) => (
                            <div className="p-6">
                                <h3 className="text-xl text-red-500 underline">
                                    {" "}
                                    {data.etape}
                                </h3>

                                <div className="flex flex-col items-center gap-4">
                                    <div className="p-2 text-center">
                                        <ul className="list-disc text-justify">
                                            {data.liste.map((data) => (
                                                <li className="text-xl">
                                                    {data.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {procedure.map((data) => (
                <div className="p-8">
                    <h1 className="text-3xl text-center text-blue-500 underline">
                        {data.titre}
                    </h1>
                    <p className="text-xl p-6">{data.desc}</p>

                    <div className="flex flex-col items-center gap-4">
                        <div className="p-2 text-center">
                            <ol className="list-decimal text-justify">
                                {data.etape.map((data) => (
                                    <li className="text-xl">{data.name}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InscriptionAdministrative;
