
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ImageCarousel } from "@/components/ImageCarousel";

const mockImages = [
  "/lovable-uploads/47353e1a-cd6b-4ccd-80e8-1758b4f4cbaf.png",
  "/placeholder.svg",
  "/placeholder.svg",
];

type MessageType = {
  content: string;
  type: "user" | "assistant";
};

const Index = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "Welcome! How can I assist you today?",
      type: "assistant",
    },
  ]);

  const handleSend = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { content: message, type: "user" },
      {
        content: "Thank you for your message. I'm here to help!",
        type: "assistant",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto max-w-4xl p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Virtual Assistant</h1>
          <p className="text-muted-foreground">Your AI Shopping Companion</p>
        </header>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                content={message.content}
                type={message.type}
              />
            ))}
          </div>

          <div className="border-t border-white/10">
            <ImageCarousel images={mockImages} />
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
