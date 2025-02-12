
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  type: "user" | "assistant";
}

export const ChatMessage = ({ content, type }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "max-w-[80%] p-4 rounded-xl",
        type === "assistant"
          ? "bg-gray-100 self-start"
          : "bg-red-600 text-white self-end"
      )}
    >
      {content}
    </div>
  );
};
