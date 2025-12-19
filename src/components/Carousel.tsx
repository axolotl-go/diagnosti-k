"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel from "../data/carousel.json";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carousel.data.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carousel.data.length) % carousel.data.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div className="relative h-[600px] overflow-hidden">
          {carousel.data.map((slide: TypeCarousel, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 md:p-20">
                <h2 className="text-3xl md:text-5xl font-bold text-green mb-6 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-black text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <button className="bg-green hover:bg-[#009e79] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación (Ajustados colores para fondo oscuro) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carousel.data.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full shadow-sm ${
                index === currentSlide
                  ? "bg-blue w-8 h-3"
                  : "bg-white/50 hover:bg-white/80 w-3 h-3"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
