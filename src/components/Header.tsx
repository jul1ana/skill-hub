"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaRegCircleXmark } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto md:px-14 p-4 bg-white text-primary border-b z-50 fixed top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center text-lg font-medium">
          <div className="flex space-x-14 items-center">
            <Link href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
              <Image src="/logo.png" className="w-10 inline-block items-center" alt="Logo" width={40} height={20} />
              <span>TECHY</span>
            </Link>

            {/* NAV ITEMS */}
            <ul className="md:flex space-x-12 hidden">
              {
                navItems.map(({ link, path }) => <Link key={link} href={path} className="block hover:text-gray-300"> {link} </Link>)
              }
            </ul>
          </div>

          {/* LANGUAGE and SIGNUP */}
          <div className="space-x-12 hidden md:flex items-center">
            <Link href="/" className="hidden lg:flex items-center hover:text-secondary">
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </Link>

            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
              {
                isMenuOpen ?
                  (<FaRegCircleXmark className="w-6 h-6 text-primary" />) :
                  (<RiMenu3Line className="w-6 h-6 text-primary" />)
              }
            </button>
          </div>
        </div>
      </nav>

      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
          navItems.map(({ link, path }) => <Link key={link} href={path} className="block hover:text-gray-300"> {link} </Link>)
        }
      </div>
    </header>
  );
};