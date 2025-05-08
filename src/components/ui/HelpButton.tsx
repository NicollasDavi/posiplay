"use client";
import { useState, useEffect, useRef } from "react";

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso te ajudar?", fromUser: false },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Referência para o contêiner de mensagens com tipo explícito
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Adiciona a mensagem do usuário
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, fromUser: true },
      ]);
      setInputMessage("");

      // Simula uma resposta automática
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Eu ainda sou um assistente simples, mas estou aqui para ajudar!", fromUser: false },
        ]);
      }, 1000);
    }
  };

  // Efeito para rolar automaticamente para o final da lista de mensagens
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Sempre que as mensagens mudarem, a rolagem é acionada

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 bg-[#F99F1B] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        {/* Ícone SVG de pergunta */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c1.1 0 1.99.9 1.99 2S13.1 12 12 12c-1.1 0-1.99-.9-1.99-2S10.9 8 12 8zM12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-0 right-0 w-80 h-96 bg-white p-4 rounded-t-lg shadow-lg transition-transform transform">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-gray-700 text-lg">Chat de Ajuda</h4>
            <button
              onClick={toggleChat}
              className="text-[#F99F1B] hover:text-black transition"
              aria-label="Fechar"
            >
              X
            </button>
          </div>

          {/* Histórico de mensagens com rolagem */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-2 max-h-[calc(100%-120px)]">
            {/* Exibe as mensagens */}
            {messages.map((message, index) => (
              <div key={index} className={message.fromUser ? "text-right" : "text-left"}>
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.fromUser
                      ? "bg-[#F99F1B] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {/* Ref para rolar automaticamente */}
            <div ref={messagesEndRef} />
          </div>

          {/* Campo de entrada fixo */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F99F1B] mr-2 resize-none text-black"
              placeholder="Digite sua dúvida..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#F99F1B] text-white py-2 px-4 rounded-lg hover:bg-[#e68a00] transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;
