import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[#FAF7F0] text-black w-full">
      <div
        className="container mx-auto flex justify-between items-center p-6"
        style={{ fontFamily: 'Times new roman, serif' }}
      >
        <h1 className="text-5xl font-bold">Maison Dining</h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-xl hover:text-red-700 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-xl hover:text-red-700 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-xl hover:text-red-700 transition duration-300">
                Contact Us
              </Link>
            </li>
            
            <li>
              <Link href="/signup" className="text-xl hover:text-red-700 transition duration-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
