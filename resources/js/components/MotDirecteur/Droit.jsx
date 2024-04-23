import React from "react";
import bannerImg from "../../../../public/images/promoteur.jpg";
import { FadeIn } from "./FadeIn";

const Droit = () => {
    return (
        <FadeIn className="w-full flex-cols justify-center items-center relative ml-3">
            <img
                className="w-full h-[250px]  md:h-[500px] lgl:w-[600px] lgl:h-[680px] rounded-lg"
                src={bannerImg}
                alt="Photo Directeur Général"
            />
            <div className="py-4">
                <h2 className="text-2xl md:text-3xl text-red-500 text-center">
                    Dr Patrick SEUMEN TONOU
                </h2>
            </div>
        </FadeIn>
    );
};

export default Droit;
