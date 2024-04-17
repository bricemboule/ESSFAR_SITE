import React from "react";
import Carousel1 from "../components/Carosel/Carousel1";
import Categorie from "../components/Categorie/Categorie";
import Fromation from "../components/Formation/Fromation";
import Gallery from "../components/Gallery/Gallery";
import Objectif from "../components/Objectif/Objectif";
import HomePartenaire from "../components/Partenaire/HomePartenaire";
import Temoignage from "../components/Temoignage/Temoignage";

const Home = () => {
    return (
        <>
            <Carousel1 />
            <Fromation />
            <Categorie />
            <Objectif />
            {/*<Evenement />*/}
            <HomePartenaire />
            <Temoignage />
            <Gallery />
        </>
    );
};

export default Home;
