"use client";
import { useState } from "react";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

const AulaAvaliacao = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Avaliação enviada!\nNota: ${rating}\nComentário: ${comment}`);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Avalie a Aula</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Estrelas */}
        <div>
          <label className="block text-gray-700 mb-2">Dê uma nota para a aula:</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => {
              const isFilled = star <= (hovered || rating);
              const Icon = isFilled ? SolidStar : OutlineStar;
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="text-[#F99F1B] hover:scale-110 transition-transform"
                  aria-label={`Nota ${star}`}
                >
                  <Icon className="w-8 h-8" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Comentário */}
        <div>
          <label htmlFor="comment" className="block text-gray-700 mb-2">
            Deixe um comentário:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F99F1B]"
            placeholder="Digite seu comentário sobre a aula..."
          />
        </div>

        {/* Botão */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#F99F1B] text-white py-2 px-6 rounded-lg hover:bg-[#e68a00] transition"
          >
            Enviar Avaliação
          </button>
        </div>
      </form>
    </div>
  );
};

export default AulaAvaliacao;
