import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../css/app.css";
import Actuariat from "../Pages/Actuariat";
import AnciensSujet from "../Pages/AnciensSujet";
import Association from "../Pages/Association";
import Assurance from "../Pages/Assurance";
import Banque from "../Pages/Banque";
import BigData from "../Pages/BigData";
import Concours from "../Pages/Concours";
import Data from "../Pages/Data";
import EcolePartenaire from "../Pages/EcolePartenaire";
import FormationContinue from "../Pages/FormationContinue";
import FormationIntiale from "../Pages/FormationIntiale";
import FraisIncription from "../Pages/FraisIncription";
import Gouvernance from "../Pages/Gouvernance";
import Home from "../Pages/Home";
import Incubateur from "../Pages/Incubateur";
import Finance from "../Pages/IngFinanciere";
import InscriptionAdministrative from "../Pages/InscriptionAdministrative";
import InscriptionPedagogique from "../Pages/InscriptionPedagogique";
import Layout from "../Pages/Layout";
import Leader from "../Pages/Leader";
import LicenceMath from "../Pages/LicenceMath";
import Mobilites from "../Pages/Mobilites";
import MotDirecteur from "../Pages/MotDirecteur";
import PartenairePro from "../Pages/PartenairePro";
import ProjetPedagogique from "../Pages/ProjetPedagogique";
import Webinaire from "../Pages/Webinaire";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route
                        path="/ecole/motDirecteur"
                        element={<MotDirecteur />}
                    />
                    <Route
                        path="/ecole/Projet_Pedagogique"
                        element={<ProjetPedagogique />}
                    />
                    <Route
                        path="/ecole/gouvernance"
                        element={<Gouvernance />}
                    />
                    <Route
                        path="/formation/formation-initiale"
                        element={<FormationIntiale />}
                    />
                    <Route
                        path="/formation/formation-initiale/ingenierieFinanciere"
                        element={<Finance />}
                    />
                    <Route
                        path="/formation/formation-initiale/mathematique"
                        element={<LicenceMath />}
                    />
                    <Route
                        path="/formation/formation-initiale/informatique"
                        element={<Finance />}
                    />
                    <Route
                        path="/formation/formation-initiale/actuariat"
                        element={<Actuariat />}
                    />
                    <Route
                        path="/formation/formation-initiale/BigData"
                        element={<BigData />}
                    />
                    <Route
                        path="/formation/formation-initiale/Systeme-information"
                        element={<Finance />}
                    />

                    <Route
                        path="/formation/formation-continue"
                        element={<FormationContinue />}
                    />
                    <Route
                        path="/formation/formation-continue/banque"
                        element={<Banque />}
                    />
                    <Route
                        path="/formation/formation-continue/learder"
                        element={<Leader />}
                    />
                    <Route
                        path="/formation/formation-continue/data"
                        element={<Data />}
                    />
                    <Route
                        path="/formation/formation-continue/assurance"
                        element={<Assurance />}
                    />
                    <Route
                        path="/formation/webinaire"
                        element={<Webinaire />}
                    />

                    <Route path="/admission/concours" element={<Concours />} />
                    <Route
                        path="/admission/inscriptionAdministrative"
                        element={<InscriptionAdministrative />}
                    />
                    <Route
                        path="/admission/anciens-sujets"
                        element={<AnciensSujet />}
                    />
                    <Route
                        path="/admission/inscriptionPedagogique"
                        element={<InscriptionPedagogique />}
                    />
                    <Route
                        path="/admission/fraisInscription"
                        element={<FraisIncription />}
                    />
                    <Route
                        path="/international/ecoles-partenaires"
                        element={<EcolePartenaire />}
                    />
                    <Route
                        path="/international/offre-de-mobilites"
                        element={<Mobilites />}
                    />
                    <Route
                        path="/entreprise/partenaire-professionnels"
                        element={<PartenairePro />}
                    />
                    <Route
                        path="/entreprises/essfar-incubateur"
                        element={<Incubateur />}
                    />

                    <Route
                        path="/vie-essfar/association-des-etudiants"
                        element={<Association />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const element = document.getElementById("app");
const root = ReactDOM.createRoot(element);
root.render(<Main />);
