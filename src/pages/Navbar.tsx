import Link from "next/link";
import { Menu, X } from 'lucide-react'
import React, { useState } from "react";

export default Navbar;

import Link from "next/link";
import { Menu, X } from 'lucide-react';
import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
            <div>
                <head>
                    <title>Portfolio Website</title>
                    <link rel="icon" href="/favicon.png" sizes="any" />
                </head>

         <h1 className="text-3xl font-signature ml-2">
          <a className="link-underline link-underline-black" href="" rel="noreferrer">
            Portfolio
          </a>
        </h1>

                <section className="float-right ml-96 -mt-7 text-4xl">
                    <nav className="absolute ml-96 md:flex space-x-20">
                        <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            About
                        </Link>
                        <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Contact
                        </Link>

                        {/* Mobile menu icon */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Mobile menu, show/hide based on menu state */}
                        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Home
                                </Link>
                                <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    About
                                </Link>
                                <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    );
}
