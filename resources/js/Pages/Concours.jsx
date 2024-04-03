import React from "react";
import { Link } from "react-router-dom";
import Niveau1 from "../../pdf/fiche inscription/FICHE D'INSCRIPTION CONCOURS AVRIL ESSFAR - 1ère ANNEE.pdf";
import Niveau2 from "../../pdf/fiche inscription/FICHE D'INSCRIPTION CONCOURS AVRIL ESSFAR - 2ème ANNEE.pdf";
import Niveau3 from "../../pdf/fiche inscription/FICHE D'INSCRIPTION CONCOURS AVRIL ESSFAR - 3ème ANNEE.pdf";
import Niveau4 from "../../pdf/fiche inscription/FICHE D'INSCRIPTION CONCOURS AVRIL ESSFAR - MASTER 1.pdf";
import Image from "../images/concours.jpg";

const Concours = () => {
    return (
        <div>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="text-center text-xl p-10">
                <p>
                    Prochaine date de concours :{" "}
                    <span className="text-red-500 italic text-xl">
                        13 Avril 2024
                    </span>
                </p>
                <p>
                    Date limite de dépôt des dossiers :{" "}
                    <span className="text-red-500 text-xl italic">
                        12 Avril 2024
                    </span>
                </p>
                <p>
                    Entrée en Licence :{" "}
                    <span className="text-red-500 italic text-xl">
                        Sur Concours
                    </span>
                </p>
                <p>
                    Entrée en Master :{" "}
                    <span className="text-red-500 italic text-xl">
                        Sur étude de dossiers
                    </span>
                </p>
            </div>

            <div className="text-center text-xl my-8">
                <h1 className="text-red-500 underline">
                    PROCEDURE D’INSCRIPTION{" "}
                </h1>
                <div className="px-20 py-4">
                    <ol className="list-decimal text-justify">
                        <li>
                            Télécharger la fiche d’inscription (
                            <Link
                                to={Niveau1}
                                className="text-sky-500"
                                download="Fiche-inscription-niveau-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                1<sup>ème</sup> année
                            </Link>
                            ,{" "}
                            <Link
                                to={Niveau2}
                                className="text-sky-500"
                                download="Fiche-inscription-niveau-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                2 <sup>ème</sup> année
                            </Link>
                            ,{" "}
                            <Link
                                to={Niveau3}
                                className="text-sky-500"
                                download="Fiche-inscription-niveau-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                3 <sup>ème</sup> année
                            </Link>
                            ,{" "}
                            <Link
                                to={Niveau4}
                                className="text-sky-500"
                                download="Fiche-inscription-niveau-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Master I
                            </Link>
                            )
                        </li>
                        <li>Compléter soigneusement la fiche d’inscription</li>
                        <li>Payer les frais d’étude de dossier à la banque</li>
                        <li>
                            Déposer le dossier complet au campus de l’ESSFAR sis
                            au quartier Omnisport, derrière le centre des impôts
                            ou envoyer le à l’adresse{" "}
                            <span className="text-sky-500 italic">
                                contact@essfar.com
                            </span>{" "}
                            avec comme objet du mail « Dossier d’inscription »
                        </li>
                    </ol>
                </div>
            </div>
            <div className="text-center text-xl pb-8">
                <p>
                    Télécharger les anciennes épreuves de concours :{" "}
                    <Link
                        to="/admission/anciens-sujets"
                        className="text-sky-500"
                    >
                        anciennes épreuves
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Concours;
