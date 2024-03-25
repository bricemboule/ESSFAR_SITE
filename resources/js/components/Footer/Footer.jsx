import React from "react";
import {
    FaFacebookF,
    FaGooglePlusG,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { VscMail } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white">
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden pieds">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[100px] fill-white"
                    ></path>
                </svg>
                <div className="grid lg:grid-cols-3 gap-20 sm:grid-cols-1 p-20">
                    <div>
                        <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                            ESSFAR
                        </li>
                        <div className="px-6">
                            <ul>
                                <li className="my-4 list-none">
                                    <Link to="/ecole/MotDirecteur">
                                        Mot du directeur
                                    </Link>
                                </li>
                                <li className="my-4 list-none">
                                    <Link to="/ecole/gouvernance">
                                        Gouvernance
                                    </Link>
                                </li>
                                <li className="my-4 list-none">
                                    <Link to="/ecole/Projet_Pedagogique">
                                        Projet pedagogique
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                            Formations
                        </li>
                        <div className="px-6">
                            <ul>
                                <li className="my-4 list-none">
                                    <Link to="">Nos formations</Link>
                                </li>
                                <li className="my-4 list-none">
                                    <Link to="">Candidater et s'inscrire</Link>
                                </li>
                                <li className="my-4 list-none">
                                    <Link to="">Debouches</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-pink-500 py-2">
                            Nous Conctacter
                        </h2>

                        <div className="flex flex-row items-center gap-2 m-2">
                            <GiRotaryPhone /> :<p> 693-32-65-22</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 m-2">
                            <VscMail /> :<p>contact@essfar.com </p>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                to="https://www.facebook.com/profile.php?id=100063534339794"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                            >
                                {" "}
                                <FaFacebookF />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/school/essfar-%C3%A9cole-sup%C3%A9rieure-des-sciences-de-la-finance-de-l-assurance-et-des-risques/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                            >
                                {" "}
                                <FaLinkedinIn />{" "}
                            </Link>
                            <Link
                                to=""
                                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                            >
                                {" "}
                                <FaGooglePlusG />
                            </Link>
                            <Link
                                to=""
                                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                            >
                                {" "}
                                <FaTwitter />
                            </Link>
                            <Link
                                to=""
                                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                            >
                                {" "}
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="h-full flex items-center justify-center mb-5">
                        <form className="w-96 relative">
                            <input
                                type="email"
                                placeholder=""
                                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
                            />
                            <button
                                type="Submit"
                                className="bg-pink-400 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <h6 className="text-center">&copy; ESSFAR {Year}</h6>
            </div>
        </footer>
    );
};

export default Footer;
