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

const Header = () => {
    return (
        <div className="bg-black h-10 flex items-center justify-around gap-5 text-white">
            <div className="flex flex-row items-center gap-1">
                <GiRotaryPhone /> :<p> 693-32-65-22</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <VscMail /> :<p>contact@essfar.com </p>
            </div>

            <div className="flex items-center gap-4">
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
                <Link to="" target="_blank" rel="noreferrer">
                    {" "}
                    <FaGooglePlusG />
                </Link>
                <Link to="" target="_blank" rel="noreferrer">
                    {" "}
                    <FaTwitter />
                </Link>
                <Link to="" target="_blank" rel="noreferrer">
                    {" "}
                    <FaInstagram />
                </Link>
            </div>
        </div>
    );
};

export default Header;
