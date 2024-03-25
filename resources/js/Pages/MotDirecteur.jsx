import React from "react";
import Droit from "../components/MotDirecteur/Droit";
import Left from "../components/MotDirecteur/Left";
import Image from "../images/dip.jpg";

const MotDirecteur = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div>
                <div className="mt-10">
                    <h1 className="text-6xl text-sky-600 font-tangeri text-center font-bold">
                        BIENVENUE A ESSFAR
                    </h1>
                </div>
            </div>
            <section
                id="home"
                className="w-full pt-10 pb-20 flex gap-5 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
            >
                <Droit />
                <Left />
            </section>
        </>
    );
};

export default MotDirecteur;
