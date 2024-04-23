import React from "react";
import Slider from "react-slick";
import Bia from "../../../../public/images/BIA.png";
import Ubo from "../../../../public/images/Ubo.png";
import Acam from "../../../../public/images/acam.png";
import Azure from "../../../../public/images/azure.png";
import Charter from "../../../../public/images/charter.png";
import Cnps from "../../../../public/images/cnps.jpg";
import France from "../../../../public/images/dauphineFrance.jpg";
import Tunis from "../../../../public/images/dauphineTunis.jpg";
import Douala from "../../../../public/images/doul.jpg";
import Esilv from "../../../../public/images/esilv.jpg";
import Estia from "../../../../public/images/estia.png";
import Euria from "../../../../public/images/euria.jpg";
import Karbura from "../../../../public/images/karbura.png";
const academique = [
    {
        id: 1,
        name: "UNIVERSITE DE DOUALA",
        text: "",
        img: Douala,
    },
    {
        id: 2,
        name: "ESTIA",
        text: "Ecole d'ingénieur accreditée par la conférence des grandes écoles, spécialisées dans les Big Data et l'intelligence artificielle",
        img: Estia,
    },
    {
        id: 3,
        name: "Paris Dauphine ",
        text: "La référence universitaire des formations pour les professionnels, managers et dirigeants",
        img: France,
    },
    {
        id: 4,
        name: "Dauphine Tunis",
        text: "La référence universitaire des formations pour les professionnels, managers et dirigeants",
        img: Tunis,
    },
    {
        id: 5,
        name: "ESILV",
        text: "L’une des écoles du Groupe Léonard de Vinci",
        img: Esilv,
    },
    {
        id: 6,
        name: "Université Cote d'Azur",
        text: "Université intensive en recherche portant des formations d'excellence dans les secteurs innovants, implantée à Nice, Sophia-Antipolis, Cannes",
        img: Azure,
    },

    {
        id: 7,
        name: "Euria Brest",
        text: "Euro-Institut d'Actuariat",
        img: Euria,
    },
    {
        id: 8,
        name: "Université de Bretagne Occidentale (UBO)",
        text: "",
        img: Ubo,
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
        name: "CHARTERED FINANCIAL",
        text: "Cabinet de conseils financiers",
        img: Charter,
    },
    {
        id: 3,
        name: "CNPS",
        text: "Socièté para publique, de prévoyance sociale",
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
                        <div className="text-center mb-2 max-w-[400px] mx-auto">
                            <h1 className="text-6xl font-bold font-tangeri">
                                Nos partenaires académiques
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
                                                    className="rounded-md block mx-auto"
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
                        <div className="text-center mb-2 max-w-[400px] mx-auto">
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
