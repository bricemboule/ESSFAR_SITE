import React from "react";
import pat from "../../../public/images/avatar.png";
const equipe = [
    {
        id: 1,
        poste: "Directeur Général",
        name: "Patrick SEUMEN TONOU",
        titre: "Dr",
        img: pat,
    },
    {
        id: 2,
        poste: "Directeur Académique",
        name: "Etienne TSAMO",
        titre: "Pr",
        img: pat,
    },
    {
        id: 3,
        poste: "Manager de la communication et relation avec les entreprises",
        name: "Myriam MAON",
        titre: "Mme",
        img: pat,
    },
];

const conseil = [
    {
        id: 1,
        poste: "President",
        name: "Patrick SEUMEN TONOU",
        titre: "Dr",
        pro: "Docteur en Mathématiques Appliquées à la Finance",
        img: pat,
    },
    {
        id: 2,
        poste: "Membre",
        name: "Etienne TSAMO",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Chimie",
        img: pat,
    },
    {
        id: 3,
        poste: "Membre",
        name: "Gabriel NGUETSENG",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques",
        img: pat,
    },

    {
        id: 4,
        poste: "Membre",
        name: "Norbert NOUTCHEGUEME",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques",
        img: pat,
    },
    {
        id: 5,
        poste: "Membre",
        name: "Siméon FOTSO",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques, Statisticien, HDR en Mathématiques Appliquées",
        img: pat,
    },
    {
        id: 6,
        poste: "Membre",
        name: "KOUAMO Olaf",
        titre: "Dr",
        pro: "Chief Data Scientist, VOYAGES-SNCF France",
        img: pat,
    },
    {
        id: 7,
        poste: "Membre",
        name: "Josué DJOBLONA SEKNEWNA",
        titre: "M",
        pro: "Actuaire, BEAC/CRBC Cameroun",
        img: pat,
    },
    {
        id: 8,
        poste: "Membre",
        name: "Blaise KENDAH",
        titre: "M",
        pro: "Actuaire",
        img: pat,
    },
];
const Gouvernance = () => {
    return (
        <>
            {/*<div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
    </div>*/}
            <div className="m-8">
                <div className=" text-xl">
                    <div className="p-10">
                        <h1 className="text-4xl text-center text-blue-500">
                            L'équipe dirigeante
                        </h1>
                        <div className="py-6 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-30 place-items-center">
                            {equipe.map((data) => (
                                <div className="flex justify-evenly gap-2 w-250">
                                    <div className="rounded-full">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="w-[500px] p-4">
                                        <h3>
                                            {data.titre}. {data.name}
                                        </h3>
                                        <p className="text-red-500">
                                            {data.poste}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-10 text-xl">
                    <div className="p-10">
                        <h1 className="text-4xl text-center text-blue-500">
                            Le conseil scientifique
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-24 place-items-center">
                            {conseil.map((data) => (
                                <div className="flex justify-evenly gap-2 p-6 w-[400px]">
                                    <div className="rounded-full">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="w-[400px]">
                                        <h3>
                                            {data.titre}. {data.name}
                                        </h3>
                                        <span className="text-sm text-gray-500">
                                            ({data.pro})
                                        </span>
                                        <p className="text-red-500">
                                            {data.poste}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gouvernance;
