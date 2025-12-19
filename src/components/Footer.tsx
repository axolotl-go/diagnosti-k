import React from "react";
import navigation from "@/data/navigation.json";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <img
              src="/DGK.png"
              alt="Grupo Diagnosti-k"
              className="h-14 sm:h-16"
              loading="lazy"
            />

            <div className="mt-8">
              <p className="mb-2 text-sm font-semibold text-blue-700">
                Consulta y cotiza tus estudios
              </p>

              <div className="flex w-full max-w-md overflow-hidden border border-gray-400 rounded-lg focus-within:ring-2 focus-within:ring-green">
                <input
                  type="text"
                  placeholder="Nombre del estudio"
                  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-gray-800"
                  aria-label="Buscar estudio"
                />
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white transition bg-green hover:bg-green-600"
                >
                  Enviar
                </button>
              </div>
            </div>

            <div className="flex mt-8 space-x-5 text-gray-600">
              <a
                href="https://www.facebook.com/grupodiagnostik/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="transition hover:text-blue-600"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="https://www.instagram.com/grupodiagnostik/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="transition hover:text-pink-600"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=523221167693"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="transition hover:text-green-600"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:col-span-2">
            {navigation.data.map((item) => (
              <nav key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.name}
                </a>

                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  {item.sublink?.map((sublink) => (
                    <li key={sublink.name}>
                      <a
                        href={item.href + sublink.href}
                        className="transition hover:text-gray-800"
                      >
                        {sublink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-12">
          <p className="text-xs text-gray-500">
            © 2020 Grupo Diagnosti-k. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
