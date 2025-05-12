import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaYoutube,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="justify-center items-center flex flex-col gap-4 bg-gray-200 p-4">
      <div className="felx flex-col">
        <h1>GET IN TOUCH</h1>
        <p>
          <FaWhatsapp color="green" />
          9166214703
        </p>
        <p>
          <PiPhoneCallFill color="blue" />
          <span>+91 9166214703</span>
        </p>
        <p><MdEmail color="black" />mahipaldhayal2002@gmail.com</p>
      </div>

      <div className="flex justify-center items-center gap-4 ">
        <a href="https://www.facebook.com">
          <FaFacebook color="blue" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter color="black" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram color="red" />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin color="blue" />
        </a>
        <a href="https://www.google.com">
          <FaGoogle color="blue" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube color="red" />
        </a>
      </div>
      <div className="justify-center items-center">
        <p>2025 &copy; Copyright &copy; 2025 Surplus-Gy.com</p>
      </div>
    </div>
  );
};

export default Footer;
