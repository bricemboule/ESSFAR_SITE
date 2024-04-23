import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../../../public/images/Logo-ESSFAR.png";
import Header from "../Header";
import Button from "./Button";
import NavLink from "./NavLink";
import Section from "./Section";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white py-1 z-1">
            <Header />
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-3 md:w-auto w-full flex justify-between">
                    <img
                        src={Logo}
                        alt="Logo ESSFAR"
                        className="md:cursor-pointer h-12"
                    />

                    <div
                        className="text-3xl md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <h2>{!open ? <IoMenu /> : <IoCloseSharp />}</h2>
                    </div>
                </div>

                <ul className=" md:flex hidden items-center font-[Times New Roman] gap-10">
                    <li>
                        <Link
                            to="/"
                            className="py-7 px-3 inline-block text-xl text-sky-500"
                        >
                            <FaHome />
                        </Link>
                    </li>

                    <NavLink />
                </ul>

                <div className="md:block hidden">
                    <Button />
                </div>

                {/* Menu a la vue d'un telephone */}

                <ul
                    className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4  duration-500 ${
                        open ? "left-0" : "left-[-100%] z-1"
                    }`}
                >
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block text-xl">
                            <FaHome />
                        </Link>
                    </li>

                    <NavLink />

                    <div className="py-5">
                        <Button />
                    </div>
                </ul>
            </div>
            <Section />
        </nav>
    );
};

export default Navbar;
