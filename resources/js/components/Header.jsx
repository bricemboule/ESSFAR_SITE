import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { VscMail } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-sky-500 h-10 flex items-center justify-around gap-6 text-white">
            <div className="flex md:flex-row items-center gap-1 ">
                <GiRotaryPhone
                    size={25}
                    className="md:text-md sm:text-sm md:block"
                />
                <p className="max-sm:py-2 flex max-sm:flex-col xs:flex-col md:flex-row lg:flex-row xl:flex-row">
                    <span className="max-sm:text-sm">697-03-83-27 /</span>
                    <span className="max-sm:text-sm">699-83-53-96</span>
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <VscMail size={25} /> <p>contact@essfar.com </p>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <Link
                    to="https://www.facebook.com/profile.php?id=100063534339794"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    <FaFacebookF />
                </Link>
                <Link
                    to="https://www.linkedin.com/school/essfar-%C3%A9cole-sup%C3%A9rieure-des-sciences-de-la-finance-de-l-assurance-et-des-risques/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    <FaLinkedinIn />{" "}
                </Link>
            </div>
        </div>
    );
};

export default Header;
