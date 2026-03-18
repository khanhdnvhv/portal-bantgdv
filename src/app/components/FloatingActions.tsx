import { FloatingUtilities } from "./FloatingUtilities";
import { FloatingChatbot } from "./FloatingChatbot";

export function FloatingActions() {
  return (
    <div
      className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 flex flex-col items-end gap-3"
      style={{ zIndex: 999 }}
    >
      {/* Chatbot - on top */}
      <FloatingChatbot />
      {/* Utilities - below */}
      <FloatingUtilities />
    </div>
  );
}
