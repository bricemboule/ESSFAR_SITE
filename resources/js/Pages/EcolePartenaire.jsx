import React from "react";
import { Link } from "react-router-dom";
import Azure from "../../../public/images/Azure.png";
import Ubo from "../../../public/images/Ubo.png";
import Paris from "../../../public/images/dauphineFrance.jpg";
import Tunis from "../../../public/images/dauphineTunis.jpg";
import Estia from "../../../public/images/estia.png";
import Euria from "../../../public/images/euria.jpg";
import Nice from "../../../public/images/normandi.png";

const partenaire = [
    {
        nom: "Paris Dauphine",
        image: Paris,
        lien: "https://dauphine.psl.eu/",
    },
    {
        nom: "Euria Brest",
        image: Euria,
        lien: "https://www.univ-brest.fr/euria/fr",
    },
    {
        nom: "ESTIA",
        image: Estia,
        lien: "https://www.estia.fr/",
    },
    {
        nom: "Université de la Côte d’Azur",
        image: Azure,
        lien: "https://univ-cotedazur.fr/",
    },
    {
        nom: "Dauphine Tunis",
        image: Tunis,
        lien: "https://dauphine.psl.eu/international/campus-de-tunis",
    },
    {
        nom: "Université Nice Sophia Antipolis",
        image: Nice,
        lien: "https://unt.unice.fr/",
    },
    {
        nom: "Université de Bretagne Occidentale",
        image: Ubo,
        lien: "https://www.univ-brest.fr/fr",
    },
];

const EcolePartenaire = () => {
    return (
        <>
            {/*<div className="relative z-[-1]">
                <img className="w-full h-[600px]" src={Image} />
    </div>*/}
            <div className="m-6">
                <p className="indent-4 py-3 text-justify text-sm md:text-xl lg:text-xl xl:text-xl">
                    Pour préparer ses étudiants à des enjeux mondiaux et à des
                    défis culturels, l’ouverture internationale est au cœur de
                    la stratégie de l’ESSFAR. Trois axes sont développés :
                </p>
                <p className="px-14">
                    <ul className="list-disc">
                        <li>
                            La mobilité internationale pour les spécialisations
                            offertes ou non offertes par l’ESSFAR
                        </li>
                        <li>L’apprentissage de l’anglais</li>
                        <li>
                            L’accueil des étudiants venant d’autres pays
                            d’Afrique
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h1 className="text-center text-3xl text-sky-500">
                    Nos partenaires à l'international
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
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EcolePartenaire;
