import React from "react";
import FooterLogo from "../../assets/LogoForFooter.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full dark:bg-gray-950 relative overflow-hidden">
        <div className="w-full">
          <div className="grid md:grid-cols-3 gap-6 bg-[#262626] backdrop-blur-sm rounded-t-xl px-6 py-8 justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-center">
                <img src={FooterLogo} alt="Logo" className="max-h-[60px]" />
              </h1>
              <p className="text-white text-sm mt-4">
                Sawah is your go-to travel companion, crafted to make your journey seamless and exciting.
                We help you discover the best destinations, plan your perfect trip, and create lasting memories.
                Whether you're exploring locally or venturing far, we've got you covered every step of the way.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-[#0287a8] font-bold mb-3">
                Important Links
              </h1>
              <div className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <div
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white dark:text-gray-200"
                  >
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                <a href="#"><FaInstagram className="text-3xl text-white" /></a>
                <a href="#"><FaFacebook className="text-3xl text-white" /></a>
                <a href="#"><FaLinkedin className="text-3xl text-white" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
