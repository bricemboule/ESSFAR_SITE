import React from "react";
import { Link } from "react-router-dom";
import Euria from "../images/BIA.png";
import Paris from "../images/CHAR.png";
import Azure from "../images/acam.png";
import Estia from "../images/cnps.jpg";
import Image from "../images/conc.jpg";
import Tunis from "../images/karbura.png";
import Nice from "../images/stp.png";
const partenaire = [
    {
        nom: "CHARTERED FINANCE & CO",
        image: Paris,
        desc: "Société spécialisée dans le conseil en finance et le développement d’applicatifs (FinTech), Yaoundé Cameroun",
        lien: "https://maligah.com/entreprises/details/Chartered-Finance-&-Consulting?id=39597",
    },
    {
        nom: "	Groupe BIA",
        image: Euria,
        desc: "Société spécialisée dans la data intelligence, le digital, le conseil et stratégie en organisation d’entreprises et le développement d’applicatifs",
        lien: "https://groupebia.com/",
    },
    {
        nom: "CNPS",
        image: Estia,
        desc: "Caisse de prevoyance sociale",
        lien: "https://www.cnps.cm/index.php/fr/",
    },
    {
        nom: "Acam Vie",
        image: Azure,
        desc: "ACAM Vie est une compagnie d’assurance vie. ",
        lien: "https://www.acamvie.com/",
    },
    {
        nom: "Karbura",
        image: Tunis,
        desc: "KARBURA est une société de service et d’ingénierie des systèmes d'information.",
        lien: "https://www.karbura.com/",
    },
    {
        nom: "STP CONSULT",
        image: Nice,
        desc: "STP Consult est une société de conseil spécialisée dans la valorisation des produits financiers et dans la mise en oeuvre des systèmes d’information bancaires Siège social : Villiers Sur Marne – France",
        lien: "https://www.linkedin.com/in/patrick-seumen-b796541/",
    },
];

const PartenairePro = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="m-6">
                <p className="indent-4 text-xl">
                    L’insertion professionnelle des diplômés de l’ESSFAR est
                    l’une de nos priorités. Afin de favoriser cette entrée dans
                    la vie active, nous développons 4 axes :
                </p>
                <p className="px-14">
                    <ul className="list-disc">
                        <li className="text-red-500">
                            <span className="text-black">
                                Partenariats avec les entreprises
                            </span>
                        </li>
                        <li className="text-red-500">
                            <span className="text-black">
                                L’apprentissage de l’anglais
                            </span>
                        </li>
                        <li className="text-red-500">
                            <span className="text-black">
                                L’accueil des étudiants venant d’autres pays
                                d’Afrique
                            </span>
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h1 className="text-center text-3xl text-sky-500">
                    Nos partenaires professionnels
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-24 place-items-center">
                {partenaire.map((data) => (
                    <div className="flex justify-evenly gap-2 p-6 w-[400px]">
                        <Link to={data.lien} target="_blank" rel="noreferrer">
                            <div className="">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="rounded-full"
                                />
                                <p className="text-sky-500 mx-4">{data.nom}</p>
                                <p>{data.desc}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PartenairePro;
