import React from "react";
import Slider from "../components/Carosel/Slider";
import Categorie from "../components/Categorie/Categorie";
import Contenu from "../components/Contenu/Contenu";
import Evenement from "../components/Evenemnt/Evenement";
import Fromation from "../components/Formation/Fromation";
import Gallery from "../components/Gallery/Gallery";
import Objectif from "../components/Objectif/Objectif";
import HomePartenaire from "../components/Partenaire/HomePartenaire";
import Temoignage from "../components/Temoignage/Temoignage";

const Home = () => {
    return (
        <>
            <Slider />
            <Contenu />
            <Fromation />
            <Categorie />
            <Objectif />
            <Evenement />
            <HomePartenaire />
            <Temoignage />
            <Gallery />
        </>
    );
};

export default Home;
