import { useState } from "react";

const AulaVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mb-6">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Aula de Matemática"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsPlaying(true)}
          className="bg-[#F99F1B] text-white py-2 px-6 rounded-lg hover:bg-[#e68a00] transition"
        >
          Iniciar Aula
        </button>
        <button
          onClick={() => setIsPlaying(false)}
          className="bg-[#F99F1B] text-white py-2 px-6 ml-4 rounded-lg hover:bg-[#e68a00] transition"
        >
          Pausar Aula
        </button>
      </div>
    </div>
  );
};

export default AulaVideo;
