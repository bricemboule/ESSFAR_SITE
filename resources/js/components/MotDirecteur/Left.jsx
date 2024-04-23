import { useTypewriter } from "react-simple-typewriter";
import { FadeIn } from "./FadeIn";

const Left = () => {
    const [text] = useTypewriter({
        words: [
            "Docteur en Mathématiques Appliquées à la Finance.",
            "Consultant Financier.",
            "Enseignant.",
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5 mx-7">
                {/*<h1 className="text-3xl ">
                    Je suis{" "}
                    <span className="text-designColor capitalize">
                        Dr Patrick SEUMEN TONOU,
                    </span>
                </h1>
                <h2 className="text-6xl text-sky-600 font-tangeri">
                    <span>{text}</span>
                    <Cursor cursorStyle="|" cursorColor="#ff014f" />
    </h2>*/}
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    Le monde actuel vit une période de changements sans
                    précédent. L’arrivée à maturité, de façon quasi simultanée,
                    de toute une série de nouvelles technologies basées sur le
                    numérique génère de nouveaux usages dans nos sociétés et
                    transforme radicalement les conditions d’exercice des
                    métiers dans tous les secteurs d’activité.
                </p>
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    Ce changement brutal oblige les organisations à accélérer
                    leur transformation pour saisir de nouvelles opportunités,
                    concevoir de nouveaux services, repenser leurs modèles
                    économiques et adapter les compétences de leurs cadres à ce
                    nouveau contexte concurrentiel.
                </p>
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    Pour le continent Africain, l’enjeu est de taille. C’est en
                    Afrique que se situe l’un des plus grands marchés du
                    numérique et des services innovants. C’est là que les
                    nouvelles technologies modifient plus vite les besoins et
                    les métiers que dans des pays plus matures. Réussir la 3ième
                    révolution industrielle, celle du numérique, n’est pas du «
                    nice to have », mais du « must to have » car le principal
                    levier du progrès économique et social de l’Afrique est
                    inéluctablement les technologies digitales et plus
                    particulièrement celles liées aux big data (données
                    massives).
                </p>
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    Cette économie du 21e siècle nécessite à la fois des
                    compétences techniques et personnelles (soft skills):
                    modélisation mathématique et informatique, traitement et
                    analyse des données massives, travail en équipe et en mode
                    projets, agilité, adaptabilité, créativité, esprit critique,
                    curiosité, ouverture d’esprit…
                </p>
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    L’ESSFAR a pour mission d’être l’école de cette Afrique qui
                    change en formant ici-même en Afrique des futurs cadres et
                    managers de haut niveau, dotés de ces compétences, pour
                    accompagner les évolutions de nos sociétés et de nos
                    entreprises, en particulier dans les secteurs de la banque,
                    la finance et l’assurance.
                </p>
                <p className="indent-4 text-justify leading-6 tracking-wider">
                    Notre ambition est de devenir l’école régionale d’excellence
                    dans les mathématiques appliquées et l’informatique au
                    service des organisations et de l’innovation. Si ces
                    domaines vous attirent, n’hésitez pas à nous rejoindre pour
                    que votre objectif devienne aussi notre objectif: construire
                    votre avenir et votre pays.
                </p>
            </div>
            {/*<div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between mx-40">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Me contacter
                    </h2>
                    <div className="flex gap-4">
                        <Link
                            to="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                            target="_blank"
                        >
                            <span className="bannerIcon text-sky-500">
                                <FaLinkedinIn />
                            </span>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/patrick-seumen-b796541/"
                            target="_blank"
                        >
                            <span className="bannerIcon text-blue-500">
                                <FaFacebookF />
                            </span>
                        </Link>
                    </div>
                </div>
                    </div>*/}
        </FadeIn>
    );
};

export default Left;
