import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

const slides = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzM4MjQ3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Hội nghị toàn quốc tổng kết công tác tuyên giáo và dân vận năm 2025",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1701398690557-5f51adfbbc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwcHJvcGFnYW5kYSUyMHBvc3RlciUyMHJlZHxlbnwxfHx8fDE3NzM4MjQ3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Đẩy mạnh tuyên truyền Đại hội Đảng các cấp tiến tới Đại hội XIV của Đảng",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZmxhZyUyMGNlcmVtb255fGVufDF8fHx8MTc3MzgyNDc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Kỷ niệm 95 năm Ngày thành lập Đảng Cộng sản Việt Nam (3/2/1930 – 3/2/2025)",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1707132940730-00deb43f7b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5vaSUyMGxhbmRtYXJrJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczODI0NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Triển khai nghị quyết Trung ương về xây dựng, chỉnh đốn Đảng trong tình hình mới",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1604629142570-cdbe45cbdc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaG8lMjBjaGklMjBtaW5oJTIwY2l0eSUyMGhhbGx8ZW58MXx8fHwxNzczODI0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nâng cao chất lượng công tác dân vận trong giai đoạn phát triển mới của đất nước",
  },
];

export function FeaturedSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div
      className="w-full mb-4"
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Link to={`/article/${slides[current].id}`} className="block w-full h-full">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />

            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border-none"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border-none"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-colors ${
                i === current ? "bg-[#C0891F]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}