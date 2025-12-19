import Alliances from "@/components/Alliances";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Sections from "@/components/Sections";
import VR from "@/data/VR.json";
import doctors from "@/data/doctors.json";
import { ArrowBigRight, RectangleGoggles } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Carousel />

      <div className="mx-auto max-w-screen-xl px-6">
        <Sections
          title="Visita nuestras instalaciones en un recorrido virtual."
          position="end"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VR.data.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-gray-400 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-md active:scale-95"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green group-hover:text-white">
                    <RectangleGoggles className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-800 transition-colors group-hover:text-green">
                    {item.title}
                  </span>
                </div>

                {/* Flecha decorativa que aparece al hacer hover */}
                <ArrowBigRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-green" />
              </a>
            ))}
          </div>
        </Sections>

        <Sections title="Alianzas" position="center">
          <Alliances />
        </Sections>

        {/* <Sections title="Nuestros Doctores" position="center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.data.map((item) => (
              <Card key={item.doctor} {...item} />
            ))}
          </div>
        </Sections> */}
      </div>
    </div>
  );
}
