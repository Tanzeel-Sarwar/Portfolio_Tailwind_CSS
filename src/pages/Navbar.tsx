import Link from "next/link";
import { Menu, X } from 'lucide-react'
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>

        <h1 className="text-3xl font-signature ml-2">
          <a className="link-underline link-underline-black" href="" rel="noreferrer">
            Portfolio
          </a>
        </h1>

        <section className=" float-right ml-96 -mt-7 text-4xl">
          <nav className="absolute ml-96 md:flex space-x-20 ">
            <Link href="/" className=" text-base font-medium text-gray-500 hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </section>

      </div>
    </div>
  );

};



export default Navbar;