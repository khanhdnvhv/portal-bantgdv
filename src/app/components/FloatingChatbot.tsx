import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
  time: string;
}

const GREETING = "Xin chào! Tôi là Trợ lý ảo Ban Tuyên giáo và Dân vận. Tôi có thể giúp bạn tìm kiếm thông tin, tra cứu văn bản, hoặc giải đáp thắc mắc. Bạn cần hỗ trợ gì?";

const QUICK_ACTIONS = [
  "Tra cứu văn bản mới nhất",
  "Lịch họp tuần này",
  "Hướng dẫn nghiệp vụ Đảng",
  "Liên hệ bộ phận hỗ trợ",
];

const BOT_REPLIES: Record<string, string> = {
  "Tra cứu văn bản mới nhất": "Dưới đây là các văn bản mới nhất:\n\n📄 Công văn số 1234/CV-TGDV về tăng cường công tác tuyên giáo cơ sở (15/03/2026)\n📄 Hướng dẫn số 56-HD/TGDV về học tập chính trị năm 2026 (12/03/2026)\n📄 Kế hoạch số 89-KH/TGDV về hội nghị báo cáo viên quý II (10/03/2026)\n\nBạn muốn xem chi tiết văn bản nào?",
  "Lịch họp tuần này": "📅 Lịch họp tuần 19-23/03/2026:\n\n• Thứ 2: Giao ban đầu tuần (8:00 - Phòng A1)\n• Thứ 3: Hội nghị báo cáo viên tháng 3 (14:00 - Hội trường)\n• Thứ 5: Họp Ban chỉ đạo bảo vệ nền tảng tư tưởng (9:00 - Phòng A2)\n• Thứ 6: Sơ kết công tác tuyên giáo quý I (8:30 - Hội trường)",
  "Hướng dẫn nghiệp vụ Đảng": "Tôi có thể hướng dẫn bạn về:\n\n1️⃣ Quy trình kết nạp đảng viên\n2️⃣ Sinh hoạt chi bộ định kỳ\n3️⃣ Quản lý sổ tay đảng viên\n4️⃣ Báo cáo công tác tuyên giáo\n5️⃣ Quy trình xử lý kỷ luật\n\nBạn muốn tìm hiểu mục nào?",
  "Liên hệ bộ phận hỗ trợ": "📞 Thông tin liên hệ:\n\n• Phòng Tuyên giáo: (028) 3823-xxxx (ext. 101)\n• Phòng Dân vận: (028) 3823-xxxx (ext. 102)\n• Bộ phận CNTT: support@tgdv.gov.vn\n• Hotline: 1900-xxxx (7:30 - 17:00, T2-T6)\n\nBạn cũng có thể gửi yêu cầu qua mục 'Phản ánh kiến nghị' trong Tiện ích.",
};

const DEFAULT_REPLY = "Cảm ơn bạn đã gửi câu hỏi. Hệ thống đang xử lý yêu cầu của bạn. Trong thời gian chờ, bạn có thể tham khảo các mục Tiện ích ở bên cạnh hoặc thử các gợi ý nhanh bên dưới.";

function getTimeStr() {
  return new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: GREETING, time: getTimeStr() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Close outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: text.trim(),
      time: getTimeStr(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate bot reply
    setTimeout(() => {
      const reply = BOT_REPLIES[text.trim()] || DEFAULT_REPLY;
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: reply, time: getTimeStr() },
      ]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const resetChat = () => {
    setMessages([{ id: 0, role: "bot", text: GREETING, time: getTimeStr() }]);
    setExpandedGroup(null);
  };

  // Oops, no expandedGroup here
  const handleReset = () => {
    setMessages([{ id: 0, role: "bot", text: GREETING, time: getTimeStr() }]);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="absolute bottom-[62px] right-0 w-[320px] sm:w-[360px]"
            style={{
              transformOrigin: "bottom right",
              borderRadius: 16,
              background: "#ffffff",
              boxShadow:
                "0 20px 60px -12px rgba(0,0,0,0.25), 0 8px 24px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "min(520px, 70vh)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center justify-between shrink-0"
              style={{
                background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a28 60%, #2d8a56 100%)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  {/* Online dot */}
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                    style={{ background: "#4ade80", borderColor: "#0d4a28" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "18px",
                    }}
                  >
                    Trợ lý ảo
                  </h3>
                  <p
                    className="text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: 10.5, lineHeight: "13px" }}
                  >
                    Luôn sẵn sàng hỗ trợ bạn
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleReset}
                  className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-none"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                  title="Bắt đầu lại"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-white/70" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-none"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <X className="w-3.5 h-3.5 text-white/70" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-3 py-3 space-y-3"
              style={{ scrollbarWidth: "thin", background: "#f9fafb" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] ${msg.role === "user" ? "order-1" : ""}`}>
                    <div
                      className="px-3.5 py-2.5 rounded-2xl"
                      style={{
                        background:
                          msg.role === "user"
                            ? "linear-gradient(135deg, #C41E2A, #a01520)"
                            : "#ffffff",
                        color: msg.role === "user" ? "#fff" : "#333",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12.5,
                        lineHeight: "18px",
                        boxShadow:
                          msg.role === "bot"
                            ? "0 1px 4px rgba(0,0,0,0.06)"
                            : "0 2px 8px rgba(196,30,42,0.2)",
                        borderBottomRightRadius: msg.role === "user" ? 6 : 16,
                        borderBottomLeftRadius: msg.role === "bot" ? 6 : 16,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={`block mt-1 ${msg.role === "user" ? "text-right" : "text-left"}`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 9.5,
                        color: "#aaa",
                        paddingLeft: 4,
                        paddingRight: 4,
                      }}
                    >
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div
                    className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                    style={{
                      background: "#fff",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      borderBottomLeftRadius: 6,
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#1a6b3c" }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.1, 0.85] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions */}
            {messages.length <= 2 && (
              <div
                className="px-3 py-2 flex flex-wrap gap-1.5 shrink-0"
                style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
              >
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="px-2.5 py-1.5 rounded-full cursor-pointer border transition-colors duration-150"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: "#1a6b3c",
                      background: "rgba(26,107,60,0.06)",
                      borderColor: "rgba(26,107,60,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(26,107,60,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(26,107,60,0.06)";
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className="px-3 py-2.5 flex items-center gap-2 shrink-0"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "#fff" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Nhập câu hỏi..."
                className="flex-1 px-3 py-2 rounded-xl border-none outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12.5,
                  background: "#f3f4f6",
                  color: "#333",
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer border-none shrink-0 transition-all duration-200"
                style={{
                  background: input.trim()
                    ? "linear-gradient(135deg, #1a6b3c, #0d4a28)"
                    : "#e5e7eb",
                  boxShadow: input.trim()
                    ? "0 2px 8px rgba(26,107,60,0.3)"
                    : "none",
                }}
              >
                <Send
                  className="w-4 h-4"
                  style={{ color: input.trim() ? "#fff" : "#aaa" }}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-none outline-none"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #333 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #1a6b3c 0%, #0d4a28 60%, #2d8a56 100%)",
          boxShadow: isOpen
            ? "0 6px 20px rgba(0,0,0,0.3)"
            : "0 6px 24px rgba(26,107,60,0.4), 0 2px 8px rgba(0,0,0,0.1)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5.5 h-5.5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5.5 h-5.5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sparkle badge */}
        {!isOpen && (
          <span
            className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #facc15, #f59e0b)",
              boxShadow: "0 2px 6px rgba(245,158,11,0.5)",
            }}
          >
            <Sparkles className="w-3 h-3 text-white" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
