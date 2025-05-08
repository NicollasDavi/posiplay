"use client";
import { useState, useEffect } from "react";

const infoSlides = [
  {
    text: "Aulas ao vivo para acompanhar em tempo real.",
    image: "",
  },
  {
    text: "Materiais complementares para reforçar seu aprendizado.",
    image: "",
  },
  {
    text: "Correção de redações para aprimorar a escrita.",
    image: "",
  },
  {
    text: "Simulados para testar seu desempenho.",
    image: "",
  },
  {
    text: "Questões para praticar para provas e exames.",
    image: "",
  },
];

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % infoSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = infoSlides[currentIndex];

  return (
    <div className="w-full relative mb-10">
      <div
        className="w-full text-white py-8 px-6 rounded-xl shadow-2xl text-center transition-all duration-500 bg-cover bg-center"
        style={{
          backgroundImage: currentSlide.image
            ? `url(${currentSlide.image})`
            : "none",
          backgroundColor: currentSlide.image ? "transparent" : "#F99F1B",
        }}
      >
        <div className={`w-full max-w-4xl mx-auto ${currentSlide.image ? "bg-black/60 p-6 rounded-xl" : ""}`}>
          <h3 className="text-3xl font-bold mb-4 tracking-tight">Informações Importantes</h3>
          <p className="text-lg">{currentSlide.text}</p>
        </div>

        {/* Bolinhas de navegação */}
        <div className="mt-6 flex justify-center space-x-2">
          {infoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCarousel;
