import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Link } from "react-router-dom";
import { links } from "./Lien";

const NavLink = () => {
    const [heading, setHeading] = useState("");

    return (
        <>
            {links.map((l) => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1
                            className="py-7 hover:text-sky-500 flex justify-between items-center lg:pr-10 pr-5"
                            onClick={() =>
                                heading !== l.nom
                                    ? setHeading(l.nom)
                                    : setHeading("")
                            }
                        >
                            {l.nom}

                            <span className="md:mt-1 md:ml-2 md:block inline group-hover:rotate-180 group-hover:-mt-2">
                                {heading === l.nom ? (
                                    <GoChevronDown />
                                ) : (
                                    <GoChevronUp />
                                )}
                            </span>
                        </h1>

                        {l.submenu && (
                            <div className="absolute top-30 hidden group-hover:lg:block hover:lg:block hover:z-1">
                                <div className="bg-white px-3.5 ">
                                    {l.liens.map((sublin) => (
                                        <div className="">
                                            {sublin.lien.map((line) => (
                                                <Link
                                                    to={line.link}
                                                    className="text-base"
                                                >
                                                    <div className="hover:bg-sky-500 hover:text-white h-10">
                                                        <li className="text-sm py-3 px-6 hover:text-white">
                                                            {line.nom}
                                                        </li>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Menu mobile */}
                    <div
                        className={`
              ${heading === l.nom ? "md:hidden" : "hidden"}
          `}
                    >
                        {l.liens.map((sublink) => (
                            <div>
                                <div>
                                    {sublink.lien.map((sublien) => (
                                        <li className="py-3 pl-14">
                                            <Link to={sublien.link}>
                                                {" "}
                                                {sublien.nom}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLink;
