
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  type: "user" | "assistant";
}

export const ChatMessage = ({ content, type }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "message-bubble",
        type === "assistant" ? "assistant" : "user"
      )}
    >
      {content}
    </div>
  );
};
