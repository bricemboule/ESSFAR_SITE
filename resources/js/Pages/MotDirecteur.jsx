import React from "react";
import Droit from "../components/MotDirecteur/Droit";
import Left from "../components/MotDirecteur/Left";

const MotDirecteur = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <div className="mt-10">
                    <h1 className="text-2xl md:text-4xl text-sky-600 text-center">
                        BIENVENUE A L'ESSFAR
                    </h1>
                </div>
            </div>
            <section
                id="home"
                className="pt-5 pb-10 flex sm:flex-col  md:flex-col gap-5 xl:gap-0 lg:flex-row xl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
            >
                <Droit />
                <Left />
            </section>
        </>
    );
};

export default MotDirecteur;
