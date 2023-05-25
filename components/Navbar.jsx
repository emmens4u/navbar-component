"use client";
import Link from "next/link";
import { navLinks } from "@/utils/helper";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
 

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 bg-[#23b5d3] text-black">
      <h1 className="w-full text-3xl font-bold text-[#071013]">Nav.</h1>
      <ul className="hidden md:flex">
        {/* desktop menu */}
        {navLinks.map((link)=>(
            <li key={link.path} className="p-4 border-gray-600">
                <Link href={link.path}>{link.name}</Link>
            </li>
        ))}
      </ul>
      <div onClick={handleNav} className=" relative md:hidden">
        {nav ? <div className=" relative z-40 text-white"><AiOutlineClose size={30} /></div> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 text-[#23b5d3] bg-[#071013] ease-in-out"
            : " ease-in-out   fixed top-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Nav.</h1>
        {/* mobile menu */}
        {navLinks.map((link)=>(
            <li key={link.path} className="p-4 border-b border-gray-600">
                <Link href={link.path}>{link.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
