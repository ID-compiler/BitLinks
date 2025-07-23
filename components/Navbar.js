"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shorten", label: "Shorten" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-purple-700 text-white shadow-md fixed w-full z-50">
      <div className="px-4 mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <div className="text-3xl font-bold cursor-pointer select-none">Bitlinks</div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <li
                className="cursor-pointer font-semibold transition duration-300 transform hover:scale-110 hover:font-extrabold"
                role="menuitem"
                tabIndex={0}
              >
                {label}
              </li>
            </Link>
          ))}

          {/* Buttons */}
          <li className="flex gap-3">
            <Link href="/shorten" passHref>
              <button
                type="button"
                className="bg-purple-500 px-3 py-1 rounded-md shadow-lg cursor-pointer font-semibold
                           transition-all duration-300 hover:scale-110 hover:bg-purple-400 hover:shadow-xl"
              >
                Try Now
              </button>
            </Link>

            <a
              href="https://github.com/ID-compiler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-purple-500 px-3 py-1 rounded-md shadow-lg cursor-pointer font-semibold
                           transition-all duration-300 hover:scale-110 hover:bg-purple-400 hover:shadow-xl"
              >
                Github
              </button>
            </a>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out
                ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out
                ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-purple-700 transition-max-height duration-500 ease-in-out overflow-hidden
          ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <li
                className="cursor-pointer font-semibold text-lg
                           transition duration-300 transform hover:scale-105 hover:font-extrabold"
                role="menuitem"
                tabIndex={0}
                onClick={() => setMenuOpen(false)} // close menu on link click
              >
                {label}
              </li>
            </Link>
          ))}

          <li className="flex flex-col gap-3 mt-2">
            <Link href="/shorten" passHref>
              <button
                type="button"
                className="bg-purple-500 px-3 py-2 rounded-md shadow-lg cursor-pointer font-semibold
                           transition-all duration-300 hover:bg-purple-400 hover:shadow-xl"
                onClick={() => setMenuOpen(false)}
              >
                Try Now
              </button>
            </Link>

            <a
              href="https://github.com/ID-compiler"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <button
                type="button"
                className="bg-purple-500 px-3 py-2 rounded-md shadow-lg cursor-pointer font-semibold
                           transition-all duration-300 hover:bg-purple-400 hover:shadow-xl"
              >
                Github
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
