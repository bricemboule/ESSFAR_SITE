import React from "react";
import {
    default as nguetseng,
    default as noutch,
} from "../../../public/images/avatar.png";
import com from "../../../public/images/gouvernance/com.png";
import dac from "../../../public/images/gouvernance/dac.png";
import dg from "../../../public/images/gouvernance/dg.png";
import fotso from "../../../public/images/gouvernance/fotso.png";
import kendah from "../../../public/images/gouvernance/kendah.png";
import kouamo from "../../../public/images/gouvernance/kouamo.png";
import sek from "../../../public/images/gouvernance/sek.png";
const equipe = [
    {
        id: 1,
        poste: "Directeur Général",
        name: "Patrick SEUMEN TONOU",
        titre: "Dr",
        img: dg,
    },
    {
        id: 2,
        poste: "Directeur Académique",
        name: "Etienne TSAMO",
        titre: "Pr",
        img: dac,
    },
    {
        id: 3,
        poste: "Manager de la communication et relation avec les entreprises",
        name: "Myriam MAKON",
        titre: "Mme",
        img: com,
    },
];

const conseil = [
    {
        id: 1,
        poste: "President",
        name: "Patrick SEUMEN TONOU",
        titre: "Dr",
        pro: "Docteur en Mathématiques Appliquées à la Finance",
        img: dg,
    },
    {
        id: 2,
        poste: "Membre",
        name: "Etienne TSAMO",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Chimie",
        img: dac,
    },
    {
        id: 3,
        poste: "Membre",
        name: "Gabriel NGUETSENG",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques",
        img: nguetseng,
    },

    {
        id: 4,
        poste: "Membre",
        name: "Norbert NOUTCHEGUEME",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques",
        img: noutch,
    },
    {
        id: 5,
        poste: "Membre",
        name: "Siméon FOTSO",
        titre: "Pr",
        pro: "Professeur agrégé d'université en Mathématiques, Statisticien",
        img: fotso,
    },
    {
        id: 6,
        poste: "Membre",
        name: "KOUAMO Olaf",
        titre: "Dr",
        pro: "Chief Data Scientist, VOYAGES-SNCF France",
        img: kouamo,
    },
    {
        id: 7,
        poste: "Membre",
        name: "Josué DJOBLONA SEKNEWNA",
        titre: "M",
        pro: "Actuaire, BEAC/CRBC Cameroun",
        img: sek,
    },
    {
        id: 8,
        poste: "Membre",
        name: "Blaise KENDAH",
        titre: "M",
        pro: "Actuaire",
        img: kendah,
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
                        <h1 className="sm:text-2xl md:text-4xl xl:text-4xl lg:text-4xl text-center text-sky-500">
                            L'équipe dirigeante
                        </h1>
                        <div className="py-4 px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-20 lg:gap-x-18 xl:gap-x-18 place-items-center">
                            {equipe.map((data) => (
                                <div className="flex sm:flex-col md:flex-col lg:flex-col xl:flex-col md:gap-2 lg:gap-2 xl:gap-2 w-400">
                                    <div className="rounded-full">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="">
                                        <h3>
                                            {data.titre}. {data.name}
                                        </h3>
                                        <p className="text-red-500 text-sm">
                                            {data.poste}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-10 text-xl">
                    <div className="p-5">
                        <h1 className="sm:text-2xl md:text-4xl xl:text-4xl lg:text-4xl text-center text-sky-500">
                            Le conseil scientifique
                        </h1>
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-22 lg:gap-2 xl:gap-24 place-items-center">
                            {conseil.map((data) => (
                                <div className="flex-col md:flex-col lg:flex-col xl:flex-col text-center justify-evenly gap-2 p-2 w-[400px]">
                                    <div className="rounded-full pl-16">
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
