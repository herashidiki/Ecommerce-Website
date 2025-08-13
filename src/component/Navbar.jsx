import React from "react";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import Dark from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "home",
    link: "/#",
  },
  {
    id: 2,
    name: "contact",
    link: "/contact",
  },

  {
    id: 3,
    name: "top rated",
    link: "/#services",
  },
  {
    id: 4,
    name: "kids wear",
    link: "/#",
  },

  {
    id: 5,
    name: "men collection",
    link: "/#",
  },

  {
    id: 6,
    name: "electronic",
    link: "/#",
  },
  {
    id: 7,
    name: "best selling",
    link: "/#",
  },
];

const Dropdownlink =[
  {
    id:1,
    name:"tranding products",
    link:"/#"
  },
  {
    id:2,
    name :"best selling",
    link:"/#"
  },

  {
    id:3,
    name :"brands",
    link:"/#"
  }
]







function Navbar({ handleOrderPopup }) {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-text-white duration-200 relative z-40">
        <div className="bg-blue-900/40 py-2 ">
          <div className="container flex justify-between items-center">
            <div className="">
              <a href="#" className="font-bold text-xl items-center flex gap-1">
                <FiShoppingBag size="30" />
                shop me
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-2 focus:border-blue-300 dark:border-gray-300 dark:bg-slate-800"
                  placeholder="search"
                />
                <IoMdSearch className="text-slate-800 group-hover:text-blue-400 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              <button
                onClick={() => {
                  handleOrderPopup();
                }}
                className="bg-gradient-to-r from-blue-300 to-gray-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  {" "}
                  Order
                </span>
                <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* <div className=""> < Dark /></div> */}
            </div>
          </div>
        </div>
        <div data-aos ="zoom-in"          className="flex justify-center">
            <ul  className=" sm:flex hidden items-center gap-4">
                   {Menu.map((data) =>(
                    <li key={data.id}>
                        <a href={data.link}   className="inline-block px-4 hover:text-blue-300 duration-200 text-gray-500 capitalize  font-bold ">
                            {data.name}
                        </a>
                    </li>
                   ))}
                   <li className="group-relative cursor-pointer">
                    <a href="#" className="flex items-center  gap-[2px] py-2"> trending products
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-100" />
                        </span>
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-200 rounded-md bg-white p-2 text-black shadow-md">
                      <ul>
                        {Dropdownlink.map((item) =>(
                          <li key ={item.id}>
                            <a href={item.link}    className="inline-block w-full rounded-md  p-2 hover:bg-blue-400">
                                  {item.name}
                                  </a>
                          </li>
                        ))}
                      </ul>


                    </div>
                   </li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
