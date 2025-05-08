"use client";
import React, { useState, useRef } from "react";

const TransmissaoPage: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamId] = useState<string>("streamId123");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);

  // Função para iniciar a transmissão
  const iniciarTransmissao = async () => {
    setIsLoading(true);
    try {
      // Solicitar permissão para usar a câmera e o microfone
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      
      // Abrir a conexão WebSocket
      const ws = new WebSocket(`ws://localhost:8000/video_stream/${streamId}`);
      websocketRef.current = ws;

      ws.binaryType = "arraybuffer"; // Tipo de dados do WebSocket

      // Quando a conexão WebSocket for aberta, iniciar o MediaRecorder
      ws.onopen = () => {
        const recorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp8" });

        // Quando os dados estiverem disponíveis, enviar via WebSocket
        recorder.ondataavailable = (event) => {
          if (event.data.size > 0 && websocketRef.current?.readyState === WebSocket.OPEN) {
            event.data.arrayBuffer().then((buffer) => {
              websocketRef.current?.send(buffer); // Enviar dados via WebSocket
            });
          }
        };

        recorder.start(200); // Envia a cada 200ms
        mediaRecorderRef.current = recorder; // Armazenar o MediaRecorder
        setIsStreaming(true);
        setVideoUrl(`/gravacoes/${streamId}/index.m3u8`); // URL do vídeo HLS
      };

      // Tratamento de erro no WebSocket
      ws.onerror = (event) => {
        console.error("Erro no WebSocket", event);
        alert("Erro na conexão com o servidor de vídeo.");
      };

      // Tratamento de fechamento do WebSocket
      ws.onclose = () => {
        console.log("Conexão WebSocket fechada.");
        setIsStreaming(false);
      };

    } catch (error) {
      console.error("Erro ao iniciar a transmissão:", error);
      alert("Erro ao acessar a câmera ou conectar.");
    } finally {
      setIsLoading(false);
    }
  };

  // Função para parar a transmissão
  const pararTransmissao = async () => {
    setIsLoading(true);
    try {
      // Parar o MediaRecorder
      mediaRecorderRef.current?.stop();
      
      // Fechar a conexão WebSocket
      if (websocketRef.current?.readyState === WebSocket.OPEN) {
        websocketRef.current?.close();
      }

      // Enviar requisição para o backend parar a transmissão
      const response = await fetch(`http://localhost:8000/parar/${streamId}`, {
        method: "POST",
      });

      const data = await response.json();
      console.log(data.message); // Exibir a resposta do servidor
      setIsStreaming(false);
    } catch (error) {
      console.error("Erro ao parar a transmissão:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="transmissao-container">
      <h1>{isStreaming ? "Transmissão Ao Vivo" : "Preparando Transmissão"}</h1>

      {isStreaming && videoUrl && (
        <video controls autoPlay style={{ width: "100%" }}>
          <source src={videoUrl} type="application/x-mpegURL" />
          Seu navegador não suporta HLS.
        </video>
      )}

      <div className="control-buttons">
        {!isStreaming ? (
          <button
            onClick={iniciarTransmissao}
            disabled={isLoading}
            className="bg-[#F99F1B] text-white py-2 px-6 rounded-lg hover:bg-[#e68a00] transition"
          >
            {isLoading ? "Iniciando..." : "Iniciar Transmissão"}
          </button>
        ) : (
          <button
            onClick={pararTransmissao}
            disabled={isLoading}
            className="bg-[#F99F1B] text-white py-2 px-6 rounded-lg hover:bg-[#e68a00] transition"
          >
            {isLoading ? "Parando..." : "Parar Transmissão"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TransmissaoPage;
