import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocation, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const footerLinks = [
  {
    title: "home",
    link: "/#",
  },

  {
    title: "about",
    link: "/#about",
  },

  {
    title: "contact",
    link: "/#contact",
  },

  {
    title: "blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div className="text-white bg-[#212529] footer-dev">
      <div className="container  ">
        <div data-aos="zoom-in" className=" grid md:grid-cols-3 pb-44 pt-5 "></div>
        <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3  flex items-center gap-1">
                <FiShoppingBag size="30" />
                shopMe
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi atque doloremque doloribus, architecto cupiditate cum ab nesciunt totam ex sint labore temporibus autem sunt delectus non iste culpa repellendus!</p>
        </div>
        <div>
            <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3">
                    important links
                </h1>
                <ul className="flex flex-col gap-3 ">
                    {footerLinks.map((data) =>(
                        <li className="cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-gray-200"  key={data.title}>   {data.title}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="">
            <div className="py-8 px-4 ">

                  <h1 className="sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3">
                     links
                </h1>
                <ul className="flex flex-col gap-3 ">
                    {footerLinks.map((data) =>(
                        <li className="cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-gray-200"  key={data.title}>

                            {data.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="">
            <div className="flex items-center gap-3 mt-6 ">
                <a href="#">
                    <FaInstagram className="text-xs" />
                </a>

                 <a href="#">
                    <FaTwitter className="text-xs" />
                </a>

                 <a href="#">
                    <FaGithub className="text-xs" />
                </a>

                 <a href="#">
                    <FaLinkedin className="text-xs" />
                </a>
            </div>
            <div className="mt-6 ">
                <div className="flex items-center gap-3">
                   < FaMapLocation />
                   <p> indore , uttar pardesh , punjab , noida ,{}</p>
                </div>
                <div className="flex items-center gap-3 mt-3 ">
                    <IoCall />
                    <p>+91 3456788343</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
