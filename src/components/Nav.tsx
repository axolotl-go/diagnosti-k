"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import navigationData from "@/data/navigation.json";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detectar sección actual
  const section = pathname.split("/")[1];
  const currentNav: TypeNavigation | undefined = navigationData.data.find(
    (item) => item.href.replace("/", "") === section
  );

  return (
    <>
      {/* Barra superior de contacto */}
      <div className="bg-blue text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-end py-2">
            {/* <div className="flex space-x-6">
              <a
                href="tel:+52 322 225 8553"
                className="flex items-center hover:text-blue-200 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">322 225 8553</span>
              </a>
              <a
                href="mailto:citas@diagnosti-k.com"
                className="flex items-center hover:text-blue-200 transition"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">citas@diagnosti-k.com</span>
              </a>
            </div> */}
            <div className="flex justify-around">
              {/* Contáctanos */}
              <div className="flex items-center uppercase gap-1 mr-20">
                <span className="font-bold">Contáctanos:</span>

                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">(322) 224 8622</span>

                <MessageCircle className="w-4 h-4 ml-2" />
                <span className="hidden md:inline">(322) 116 7693</span>
              </div>

              {/* Redes */}
              <div className="flex items-center uppercase gap-1">
                <span className="font-bold">Síguenos en:</span>

                <Facebook className="w-4 h-4" />
                <Instagram className="w-4 h-4" />
                <a
                  href="https://www.facebook.com/grupodiagnostik"
                  className="hidden md:inline"
                >
                  grupodiagnostik
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between container mx-auto px-4 py-4">
          <a href="/" className="flex items-center">
            <img src="/DGK.png" alt="Logo" className="h-12 object-contain" />
          </a>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationData.data.map(({ href, name }: TypeNavigation) => (
              <a
                key={href}
                href={href}
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  pathname === href
                    ? "bg-blue-50 text-blue"
                    : "text-gray-700 hover:text-green hover:bg-gray-100"
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Barra inferior con sublinks */}
        {currentNav?.sublink && (
          <div className="hidden md:block border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-4 py-2">
              <div className="flex justify-center space-x-6 text-sm">
                {currentNav.sublink.map((item) => (
                  <a
                    href={`${currentNav.href}${item.href}`}
                    key={item.href}
                    className="py-2 px-3 text-gray-700 rounded hover:bg-white hover:text-green transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay móvil */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-900 text-white">
          <span className="font-semibold text-lg">Menú</span>
          <button
            onClick={toggleMenu}
            className="p-2 text-white rounded-lg hover:bg-blue-800"
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>

        <div className="py-4">
          {navigationData.data.map(
            ({ href, name, sublink }: TypeNavigation) => (
              <div key={href}>
                <div className="flex items-center justify-between">
                  <a
                    href={href}
                    className={`flex-1 text-black py-3 px-6 font-medium transition-colors border-l-4 ${
                      pathname === href
                        ? "border-blue-600 bg-blue-50 text-blue"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                    onClick={toggleMenu}
                  >
                    {name}
                  </a>
                  {sublink && (
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === href ? null : href)
                      }
                      className="px-4 py-3 text-gray-600"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openSubmenu === href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenú móvil */}
                {sublink && openSubmenu === href && (
                  <div className="bg-gray-50 border-l-4 border-blue-200">
                    {sublink.map((item) => (
                      <a
                        key={item.href}
                        href={`${href}${item.href}`}
                        className="block py-2.5 px-6 pl-12 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          {/* CTA móvil */}
          <div className="px-6 mt-6">
            <a
              href="/agendar-cita"
              className="block w-full bg-blue text-center px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
