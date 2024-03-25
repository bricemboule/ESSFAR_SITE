import React from "react";

const LicenceInfo = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div>
                <h1 className="text-center text-gray-500 underline">
                    Licence – Informatique des organisations
                </h1>
                <div>
                    <h3> Objectifs</h3>
                    <p>
                        La licence Informatique des organisations propose une
                        formation solide en informatique, complétée des
                        enseignements en mathématiques appliquées et en sciences
                        sociales :
                    </p>
                    <ul className="list-disc">
                        <li>
                            <span className="font-bold"> L’informatique,</span>{" "}
                            en particulier les bases de données, les langages de
                            programmation et les systèmes d’information
                        </li>
                        <li>
                            <span className="font-bold">
                                Les mathématiques appliquées,
                            </span>
                            en particulier la probabilité, les statistiques,
                            l’analyse, l’optimisation et les méthodes
                            numériques.
                        </li>

                        <li>
                            <span className="font-bold">
                                {" "}
                                Les sciences sociales,
                            </span>{" "}
                            en particulier l’économie, la gestion, la finance et
                            l’assurance.
                        </li>
                        <li>
                            <span className="font-bold">L'anglais</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Admission</h3>
                    {admission.map((data) => (
                        <div>
                            <h4> {data.annee}</h4>
                            <p>{data.desc}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Paecours</h3>
                    <p>
                        Après un tronc commun en 1ère et 2ième années, les
                        étudiants choisissent en 3ième année le parcours «
                        Mathématiques et Economie-Finance-Assurance »
                    </p>
                </div>
                <div>
                    <h3>Spécialisations</h3>
                    <p>
                        Au terme de leur 3ième année, les étudiants poursuivent
                        en Master dans l’une des trois spécialités suivantes :
                    </p>
                    <ul className="list-disc">
                        <li>Actuariat,</li>
                        <li>Ingénierie Financière,</li>
                        <li>
                            Statistiques,Big Data et Intelligence artificielle
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LicenceInfo;
