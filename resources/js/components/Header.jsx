import React from 'react'
import { Link } from "react-router-dom";
import { PiPhoneDisconnect } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const Header = () => {
  return (
    <div className="bg-black h-10 flex items-center justify-around gap-5 text-white">
        <div className="flex flex-row items-center gap-1">
            <GiRotaryPhone /> : 
            <p> 693-32-65-22</p>
        </div>
        <div className="flex flex-row items-center gap-1">
            <VscMail /> : 
            <p>contact@essfar.com </p>
        </div>

        <div className="flex items-center gap-4">
            <Link to=''> <FaFacebookF /></Link>
            <Link to=''> <FaLinkedinIn /> </Link>
            <Link to=''> <FaGooglePlusG /></Link>
            <Link to=''> <FaTwitter /></Link>
            <Link to=''> <FaInstagram /></Link>
        </div>
 </div>
  )
}

export default Header