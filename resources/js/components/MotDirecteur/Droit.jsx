import React from "react";
import bannerImg from "../../images/promoteur.jpg";
import { FadeIn } from "./FadeIn";

const Droit = () => {
    return (
        <FadeIn className="w-full flex justify-center items-center relative ml-3">
            <img
                className="w-[1200px] h-[250px]  md:h-[500px] lgl:w-[600px] lgl:h-[680px] rounded-lg"
                src={bannerImg}
                alt="bannerImg"
            />
        </FadeIn>
    );
};

export default Droit;
