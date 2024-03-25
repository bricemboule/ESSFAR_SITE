import React from "react";
import Image from "../images/wibi.jpg";

const Webinaire = () => {
    return (
        <>
            <div>
                <div className="relative z-[-1]">
                    <img className="w-full h-[500px] " src={Image} />
                </div>

                <div className="my-6 px-4 text-xl">
                    <p>
                        Etudiants, jeunes diplômés, cadres d’entreprise, ceci
                        vous concerne !{" "}
                        <span className="font-bold italic">
                            LES WEBINAIRES METIERS by ESSFAR !
                        </span>
                    </p>
                    <p>
                        Des sessions d’information et d’échange sur les métiers
                        dans les domaines de la Finance, de l’Assurance et des
                        Risques.
                    </p>
                    <p>
                        Des professionnels reconnus sur le plan national et
                        international qui vous entretiennent pendant 2h sur des
                        métiers riches en potentiel et opportunités!
                    </p>

                    <p className="text-2xl italic p-8">
                        Un évènement 100% virtuel via Zoom et 100% gratuit !
                        Attention places limitées!!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Webinaire;
