
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ImageCarousel } from "@/components/ImageCarousel";

type MessageType = {
  content: string;
  type: "user" | "assistant";
};

const mockProducts = [
  {
    id: 1,
    name: "Água Luso",
    price: "0.48€",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Leite Mimosa",
    price: "1.19€",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Pão de Forma",
    price: "1.89€",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "Olá! Sou o assistente do Continente Online. Como posso ajudar?",
      type: "assistant",
    },
  ]);

  const handleSend = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { content: message, type: "user" },
      {
        content: "Aqui estão algumas sugestões baseadas na sua pesquisa:",
        type: "assistant",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white p-4">
        <h1 className="text-xl font-bold text-center">Assistente Continente</h1>
      </div>

      <div className="container mx-auto max-w-4xl p-4">
        <div className="bg-white rounded-xl shadow-lg border">
          {/* Chat messages */}
          <div className="h-[50vh] overflow-y-auto p-4 flex flex-col gap-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                content={message.content}
                type={message.type}
              />
            ))}
          </div>

          {/* Product carousel */}
          <div className="border-t border-gray-100">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Produtos Sugeridos</h2>
              <ImageCarousel
                images={mockProducts.map((product) => ({
                  src: product.image,
                  alt: product.name,
                  description: product.name,
                  price: product.price,
                }))}
              />
            </div>
          </div>

          {/* Chat input */}
          <div className="border-t border-gray-100">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
