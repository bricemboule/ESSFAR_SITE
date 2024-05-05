import React from "react";
import bannerImg from "../../../../public/images/promoteur.jpg";
import { FadeIn } from "./FadeIn";

const Droit = () => {
    return (
        <FadeIn className="lg:w-full flex-cols justify-center items-center relative ml-3">
            <img
                className="w-full h-[250px]  md:h-[350px] lg:w-[700px] lg:h-[680px] xl:w-[700px] xl:h-[680px] rounded-lg"
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
