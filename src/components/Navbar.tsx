"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Admissions", href: "#" },
  { name: "Student Life", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="relative flex w-full items-center justify-between rounded-lg border-2 border-[#262626] bg-white"
    >
      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          priority
          height={100}
          width={100}
          className="mx-auto h-[62px] w-[177px] rounded-l-md border-r-2 border-[#262626] bg-[#FF8D4D] object-contain px-5"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden w-full items-center justify-end xl:flex">
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-outfit block h-[62px] w-[177px] border-r-2 border-r-[#262626] text-center leading-16 font-medium md:text-base lg:text-xl ${index === 0 ? "border-l-2 border-r-[#262626] border-l-[#262626]" : ""} ${index === navLinks.length - 1 ? "rounded-r-lg !border-r-0" : ""} ${
              link.name === "Contact"
                ? "bg-[#FFAE80] font-medium"
                : "hover:bg-[#FFEFE5]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div
        className="flex cursor-pointer items-center border-l-2 border-[#262626] px-[30px] py-[17px] xl:hidden"
        onClick={() => setIsOpen(true)}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
            fill="#262626"
          />
        </svg>
      </div>

      {/* Mobile Off-Canvas Menu */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs transform border-l-2 border-[#262626] bg-[#FFDECC] shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <Button
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-transparent text-2xl font-bold text-black"
        >
          ✕
        </Button>
        {/* Links */}
        <nav className="mt-16 flex flex-col items-start">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-outfit w-full border-b border-[#262626] px-6 py-4 text-lg font-medium ${
                link.name === "Contact" ? "bg-[#FFAE80]" : "hover:bg-[#FFEFE5]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
