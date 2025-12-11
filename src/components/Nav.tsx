"use client";

import { useState } from "react";
import navigation from "../data/navigation.json";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type TypeNavigation = {
  name: string;
  href: string;
  sublink?: { name: string; href: string }[];
};

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detectar sección actual
  const section = pathname.split("/")[1];
  const currentNav: TypeNavigation | undefined = navigation.data.find(
    (item) => item.href.replace("/", "") === section
  );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md text-black">
        <div className="flex items-center justify-between container mx-auto px-4 py-3">
          <a href="/">
            <img className="h-12" src="/DgkPc_logo.svg" alt="Logo" />
          </a>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Menú desktop */}
          <div className="hidden md:block">
            <ul className="font-medium flex flex-row space-x-1">
              {navigation.data.map(({ href, name }: TypeNavigation) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                  >
                    {name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior dependiendo de la sección */}
        {currentNav?.sublink && (
          <div className="hidden md:block border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-4 py-2">
              <div className="flex justify-center space-x-6 text-sm">
                {currentNav.sublink.map((item) => (
                  <a
                    href={`${currentNav.href}${item.href}`}
                    key={item.href}
                    className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                  >
                    {item.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay móvil */}
      <div
        className={`fixed inset-0 bg-[#00000094] z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="font-semibold text-lg">Menú</span>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="font-medium flex flex-col py-4 text-black">
          {navigation.data.map(({ href, name }: TypeNavigation) => (
            <li key={href}>
              <a
                href={href}
                className="block py-3 px-6 hover:bg-gray-100 transition-colors border-l-4 border-transparent hover:border-blue-500"
                onClick={toggleMenu}
              >
                {name.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Barra inferior del menú móvil */}
        {currentNav?.sublink && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col space-y-2 text-sm">
              {currentNav.sublink.map((item) => (
                <a
                  href={`${currentNav.href}${item.href}`}
                  key={item.href}
                  className="text-gray-600 hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
