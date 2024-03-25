import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import Vector from "../../images/vector3.png";

const Objectif = () => {
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };
    return (
        <>
            <div className="min-h-[550px]">
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                    <div
                        data-aos="slide-up"
                        data-aos-duration="300"
                        className="container"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Image section */}

                            <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-14 md:gap-5 place-items-center">
                                <div>
                                    <h1 className="font-tangeri text-6xl text-center font-bold">
                                        Nos Chiffres :
                                    </h1>
                                </div>

                                <div className="flex gap-10 mt-8 text-center ml-16">
                                    <div className="flex flex-col">
                                        <span className="text-gray-500">
                                            Insertion pro
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400">
                                            90%
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-500">
                                            Mobilite
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400">
                                            100%
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-500">
                                            Effectif par salle
                                        </span>
                                        <p className="text-xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400">
                                            15
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* text content section */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 className="font-tangeri text-6xl font-bold">
                                    Notre Objectif :
                                </h1>
                                <p className="text-gray-500 tracking-wide leading-5 indent-3 text-justify">
                                    Fournir aux etudiants, une formation solide
                                    en mathematiques appliquees et en
                                    informatique, completee des cours
                                    d'economie, de finance et d'assurance,
                                    necessaires a la poursuite des etudes dans
                                    nos differents specialites en Master.
                                </p>
                                <div className="flex gap-6">
                                    <div>
                                        <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                    </div>
                                    <div>
                                        <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                    </div>
                                    <div>
                                        <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                        Lances toi dès maintenant...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Objectif;
