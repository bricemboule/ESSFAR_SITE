import React from "react";
import Slider from "react-slick";
import Bia from "../../images/BIA.png";
import Acam from "../../images/acam.png";
import Aivaincity from "../../images/aivancity.png";
import Azure from "../../images/azure.png";
import Charter from "../../images/charter.png";
import Cnps from "../../images/cnps.jpg";
import France from "../../images/dauphineFrance.jpg";
import Tunis from "../../images/dauphineTunis.jpg";
import Esilv from "../../images/esilv.jpg";
import Estia from "../../images/estia.png";
import Karbura from "../../images/karbura.png";
const academique = [
    {
        id: 1,
        name: "ESTIA",
        text: "Ecole d'ingenieur accredite par la conference des grandes ecoles, specialises dans les Big Data et l'intelligence artificielle",
        img: Estia,
    },
    {
        id: 2,
        name: "Paris Dauphine ",
        text: "La référence universitaire des formations pour les professionnels, managers et dirigeants",
        img: France,
    },
    {
        id: 3,
        name: "Dauphine Tunis",
        text: "La référence universitaire des formations pour les professionnels, managers et dirigeants",
        img: Tunis,
    },
    {
        id: 4,
        name: "ESILV",
        text: "l’une des trois écoles du Groupe Léonard de Vinci, avec l’EMLV (école de Management) et l’IIM (école des métiers de l’Internet et du Multimédia)",
        img: Esilv,
    },
    {
        id: 6,
        name: "Universite Cote d'Azure",
        text: "Université intensive en recherche portant des formations d'excellence dans les secteurs innovants, implantée à Nice, Sophia-Antipolis, Cannes",
        img: Azure,
    },
    {
        id: 7,
        name: "Aivancity",
        text: "Première et unique école en IA et Data reconnue par l’Etat et délivrant un diplôme visé",
        img: Aivaincity,
    },
];

const professionnel = [
    {
        id: 1,
        name: "BIA",
        text: "",
        img: Bia,
    },
    {
        id: 2,
        name: "CHARTER ",
        text: "Cabinet de conseils financiers",
        img: Charter,
    },
    {
        id: 3,
        name: "CNPS",
        text: "Societe para publique, chargee de la prevoyance sociale",
        img: Cnps,
    },
    {
        id: 4,
        name: "ACAM VIE",
        text: "Compagnie d'Assurance. La garantie pour être ensemble pour la vie",
        img: Acam,
    },
    {
        id: 6,
        name: "KARBURA",
        text: "Societe technologie proposant des solutions informatiques pour des organisations",
        img: Karbura,
    },
];

const HomePartenaire = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <br />
            <br />
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-content-between gap-4 py-3">
                <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="py-1"
                >
                    <div className="container">
                        <div className="text-center mb-20 max-w-[400px] mx-auto">
                            <h1 className="text-6xl font-bold font-tangeri">
                                Nos partenaires academiques
                            </h1>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                        >
                            <Slider {...settings}>
                                {academique.map((data) => {
                                    return (
                                        <div className="my-3">
                                            <div
                                                key={data.id}
                                                className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                            >
                                                <img
                                                    className="rounded-full block mx-auto"
                                                    src={data.img}
                                                    alt=""
                                                />
                                                <p className="text-gray-500 text-sm">
                                                    {data.text}
                                                </p>
                                                <h1 className="text-xl font-bold">
                                                    {data.name}
                                                </h1>
                                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                                    ,,
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="py-1"
                >
                    <div className="container">
                        <div className="text-center mb-20 max-w-[400px] mx-auto">
                            <h1 className="text-6xl font-bold font-tangeri">
                                Nos partenaires professionnels
                            </h1>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                        >
                            <Slider {...settings}>
                                {professionnel.map((data) => {
                                    return (
                                        <div className="my-3">
                                            <div
                                                key={data.id}
                                                className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                            >
                                                <img
                                                    className="rounded-full block mx-auto"
                                                    src={data.img}
                                                    alt=""
                                                />
                                                <p className="text-gray-500 text-sm">
                                                    {data.text}
                                                </p>
                                                <h1 className="text-xl font-bold">
                                                    {data.name}
                                                </h1>
                                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                                    ,,
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default HomePartenaire;
