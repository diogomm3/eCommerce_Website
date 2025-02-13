
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Camera, ShoppingCart, MousePointer } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

type MessageType = {
  content: string;
  type: "user" | "assistant";
};

const mockProducts: Product[] = [
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
  },
  // Add more mock products as needed
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
        <h1 className="text-xl font-bold text-center">CLARA - Continente Loyalty & Automated Response Agent</h1>
        <p className="text-sm text-center mt-1">Continente On-line Agent</p>
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

          {/* Chat input and actions */}
          <div className="border-t border-gray-100">
            <div className="flex items-center gap-2 p-4">
              <div className="flex-1">
                <ChatInput onSend={handleSend} />
              </div>
              <Link
                to="/image-search"
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Camera className="w-5 h-5" />
              </Link>
              <Link
                to="/cart"
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <button
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                onClick={() => {
                  // Simulate product click
                  console.log("Product click simulated");
                }}
              >
                <MousePointer className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Product carousel for suggested products */}
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

          {/* Additional carousels */}
          <div className="border-t border-gray-100 p-4">
            <ProductCarousel
              title="Similar Products (GPT4Rec)"
              products={mockProducts}
            />
            <ProductCarousel
              title="Related Products (GPT4Rec)"
              products={mockProducts}
            />
            <ProductCarousel
              title="Session Products (GPT4Rec)"
              products={mockProducts}
            />
            <ProductCarousel
              title="Session Products (TIGER)"
              products={mockProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
