import React, { useState, useEffect, useRef } from "react";
import Hls from "hls.js";  // Importando a biblioteca HLS.js

const AulaVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Conectar ao WebSocket
    const socket = new WebSocket("ws://localhost:8000/video_stream/aula123");

    socket.onopen = () => {
      console.log("Conectado ao WebSocket");
    };

    // Receber dados do WebSocket
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setVideoUrl(data.output_path);  // A URL do stream recebida
      setIsPlaying(true);
    };

    socket.onerror = (error) => {
      console.error("Erro no WebSocket:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket desconectado");
    };

    return () => {
      socket.close(); // Fechar o WebSocket ao desmontar o componente
    };
  }, []); // O useEffect será chamado apenas uma vez

  useEffect(() => {
    if (videoUrl && videoRef.current) {
      // Se o HLS.js estiver disponível no navegador, vamos usá-lo
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          videoRef.current?.play();
        });
      }
      // Caso contrário, usamos o método nativo (para navegadores que já suportam HLS)
      else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoUrl;
        videoRef.current.addEventListener("canplay", () => videoRef.current?.play());
      }
    }
  }, [videoUrl]);

  return (
    <div className="mb-6">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {isPlaying ? (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
          >
            Seu navegador não suporta HLS.
          </video>
        ) : (
          <p className="text-center text-lg text-gray-500">
            Não há transmissão ao vivo no momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default AulaVideo;
