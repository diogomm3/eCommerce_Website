
import { Send } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="flex-1 rounded-xl px-4 py-2 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />
      <button
        type="submit"
        className="p-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};
