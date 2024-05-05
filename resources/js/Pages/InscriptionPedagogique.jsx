import React from "react";

const donnee = [
    {
        titre: "Préalables",
        etapes: [
            {
                etape: "Premiere inscription",
                liste: [
                    {
                        name: "Avoir reçu la confirmation de la réussite au concours.",
                    },
                ],
            },
            {
                etape: "Etudiants ESSFAR",
                liste: [
                    {
                        name: "Avoir reçu la confirmation de l’inscription administrative.",
                    },
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
        titre: "Procédure d’inscription pédagogique",
        desc: "L’inscription académique se fait avant la rentrée en 5 étapes :",
        etape: [
            {
                id: 1,
                name: "Se rendre à la banque pour paiement des frais exigés (1ère tranche des frais de scolarité, soit 40 % de la scolarité) (voir frais);",
            },
            {
                id: 2,
                name: "Accéder à la plateforme d’inscription via son login et son mot de passe;",
            },
            {
                id: 3,
                name: "Compléter l’inscription académique;",
            },
            {
                id: 4,
                name: "Imprimer et signer la fiche d’inscription académique générée;",
            },
            {
                id: 5,
                name: "Déposer la fiche d’inscription à ESSFAR",
            },
        ],
    },
];

const InscriptionPedagogique = () => {
    return (
        <div>
            {/*<div className="relative z-[-1]">
                <img className="w-full h-[600px]" src={Image} />
    </div>*/}

            {donnee.map((data) => (
                <div className="p-8">
                    <h1 className="text-3xl text-center text-sky-500 underline">
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
                    <h1 className="text-3xl text-center text-sky-500 underline">
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

export default InscriptionPedagogique;
