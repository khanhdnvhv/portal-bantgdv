import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Clock } from "lucide-react";

// Video section background - warm golden/amber color scheme
const VIDEO_BG = {
  gradient:
    "radial-gradient(ellipse at 15% 25%, rgba(192,137,31,0.10) 0%, transparent 50%), radial-gradient(ellipse at 85% 75%, rgba(218,165,32,0.07) 0%, transparent 50%), radial-gradient(ellipse at 50% 10%, rgba(184,134,11,0.05) 0%, transparent 40%), linear-gradient(135deg, rgba(192,137,31,0.04) 0%, rgba(255,253,245,0.96) 25%, rgba(218,165,32,0.03) 50%, rgba(255,253,245,0.96) 75%, rgba(192,137,31,0.03) 100%)",
  border: "rgba(192,137,31,0.12)",
  pattern: "rgba(192,137,31,0.3)",
};

const VIDEOS = [
  {
    id: 1,
    title: "Hội nghị toàn quốc triển khai công tác tuyên giáo năm 2026",
    thumbnail: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29uZmVyZW5jZSUyMHBvbGl0aWNhbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzczNDgxODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "45:20",
    date: "14/03/2026",
    views: "128.5K",
    category: "Tuyên giáo",
  },
  {
    id: 2,
    title: "Tuyên truyền sâu rộng Nghị quyết Đại hội XIV của Đảng đến cơ sở",
    thumbnail: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcG9saXRpY2FsJTIwdGhlb3J5JTIwZWR1Y2F0aW9uJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzM1OTIwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "32:15",
    date: "13/03/2026",
    views: "95.2K",
    category: "Tuyên giáo",
  },
  {
    id: 3,
    title: "Đổi mới công tác dân vận trong tình hình mới: Gắn kết Đảng với nhân dân",
    thumbnail: "https://images.unsplash.com/photo-1756806481284-d7c9342c5afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXR5JTIwZ3Jhc3Nyb290cyUyMG1lZXRpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzczNTkyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "28:40",
    date: "12/03/2026",
    views: "72.8K",
    category: "Dân vận",
  },
  {
    id: 4,
    title: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    thumbnail: "https://images.unsplash.com/photo-1740540230606-8e2033c88e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcmljZSUyMGZpZWxkJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzczNDgxODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:55",
    date: "11/03/2026",
    views: "54.1K",
    category: "Giáo dục",
  },
  {
    id: 5,
    title: "Nâng cao chất lượng công tác báo chí, xuất bản phục vụ sự nghiệp cách mạng",
    thumbnail: "https://images.unsplash.com/photo-1701398690557-5f51adfbbc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwbmV3c3BhcGVyJTIwbWVkaWElMjBqb3VybmFsaXNtJTIwcHJlc3N8ZW58MXx8fHwxNzczNTkyMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "22:30",
    date: "10/03/2026",
    views: "48.3K",
    category: "Báo chí",
  },
  {
    id: 6,
    title: "Bồi dưỡng lý luận chính trị cho cán bộ trẻ: Nâng cao bản lĩnh chính trị",
    thumbnail: "https://images.unsplash.com/photo-1723186051621-5c9de14e1a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZWR1Y2F0aW9uJTIwc2Nob29sJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzM3NzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:10",
    date: "09/03/2026",
    views: "36.7K",
    category: "Giáo dục",
  },
  {
    id: 7,
    title: "Đại hội thi đua yêu nước toàn quốc lần thứ XI: Gương mẫu tiên phong",
    thumbnail: "https://images.unsplash.com/photo-1750231211713-014e956f7caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIweW91dGglMjB1bmlvbiUyMHZvbHVudGVlciUyMGFjdGl2aXR5fGVufDF8fHx8MTc3MzU5MjA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "20:45",
    date: "08/03/2026",
    views: "62.4K",
    category: "Dân vận",
  },
  {
    id: 8,
    title: "Xây dựng đội ngũ cán bộ tuyên giáo có bản lĩnh chính trị vững vàng",
    thumbnail: "https://images.unsplash.com/photo-1758738880454-7a81de45a0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwaW5mcmFzdHJ1Y3R1cmUlMjBicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczNDgxODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "25:00",
    date: "07/03/2026",
    views: "41.9K",
    category: "Tuyên giáo",
  },
  {
    id: 9,
    title: "Phát huy vai trò của Mặt trận Tổ quốc và các đoàn thể chính trị - xã hội",
    thumbnail: "https://images.unsplash.com/photo-1758782963666-fb4cf416d117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY3VsdHVyYWwlMjBoZXJpdGFnZSUyMHRlbXBsZXxlbnwxfHx8fDE3NzM0ODE4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "19:35",
    date: "06/03/2026",
    views: "33.6K",
    category: "Dân vận",
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);

  // Simulate video progress
  useEffect(() => {
    if (isPlaying) {
      progressRef.current = window.setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            return 100;
          }
          return p + 0.15;
        });
      }, 100);
    }
    return () => {
      if (progressRef.current) window.clearInterval(progressRef.current);
    };
  }, [isPlaying]);

  // Stop playing when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      setIsPlaying(false);
    }
  }, [progress]);

  const handleSelectVideo = (video: typeof VIDEOS[0]) => {
    setActiveVideo(video);
    setProgress(0);
    setIsPlaying(true);
  };

  // Playlist = all except active, take first 4
  const playlist = VIDEOS.filter((v) => v.id !== activeVideo.id).slice(0, 4);
  // Bottom cards = 6 videos not in playlist and not active
  const bottomCards = VIDEOS.filter(
    (v) => v.id !== activeVideo.id && !playlist.find((p) => p.id === v.id)
  ).slice(0, 6);
  // If not enough, fill from beginning
  const allBottomCards =
    bottomCards.length >= 6
      ? bottomCards
      : [
          ...bottomCards,
          ...VIDEOS.filter(
            (v) =>
              v.id !== activeVideo.id &&
              !playlist.find((p) => p.id === v.id) &&
              !bottomCards.find((b) => b.id === v.id)
          ),
        ].slice(0, 6);

  return (
    <div className="relative flex flex-col gap-6 rounded-2xl overflow-hidden" style={{ padding: "28px 24px" }}>
      {/* Dynamic background - navy/teal theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: VIDEO_BG.gradient,
          borderRadius: "inherit",
        }}
      />
      {/* Subtle decorative pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, ${VIDEO_BG.pattern} 40px, ${VIDEO_BG.pattern} 41px)`,
          borderRadius: "inherit",
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          border: `2px solid ${VIDEO_BG.border}`,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.7),
            inset 0 -2px 6px rgba(192,137,31,0.04),
            0 2px 4px rgba(0,0,0,0.04),
            0 6px 16px -4px rgba(192,137,31,0.12),
            0 16px 40px -8px rgba(192,137,31,0.15),
            0 24px 64px -16px rgba(0,0,0,0.10)
          `,
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-[5px] h-[36px] rounded-full"
              style={{ background: "linear-gradient(180deg, #c41e2a 0%, #8b1a1a 100%)" }}
            />
            <h2
              style={{
                fontFamily: "'Protest Strike', sans-serif",
                fontSize: "30px",
                color: "#c41e2a",
                letterSpacing: "1px",
              }}
            >
              VIDEO
            </h2>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c41e2a]/30 to-transparent" />
          <a
            href="#"
            className="text-[#c41e2a] hover:text-[#8b1a1a] transition-colors uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Xem tất cả →
          </a>
        </motion.div>

        {/* Top: Main video (2/3) + Playlist (1/3) */}
        <div className="flex gap-5" style={{ height: "440px" }}>
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-2/3 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              boxShadow:
                "0 20px 50px -12px rgba(0,0,0,0.3), 0 8px 20px -8px rgba(0,0,0,0.15)",
            }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {/* Thumbnail as "video" */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeVideo.id}
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.1) 100%)",
              }}
            />

            {/* Play/Pause overlay center */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(196,30,42,0.9)",
                  boxShadow: "0 0 30px rgba(196,30,42,0.4)",
                }}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" fill="white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                )}
              </motion.div>
            </div>

            {/* LIVE / AUTOPLAY badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className="px-3 py-1.5 rounded-md text-white flex items-center gap-1.5"
                style={{
                  background: "#c41e2a",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ĐANG PHÁT
              </span>
              <span
                className="px-3 py-1.5 rounded-md text-white/90"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                {activeVideo.category}
              </span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              {/* Progress bar */}
              <div className="relative h-[3px] bg-white/20 rounded-full mb-4 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #c41e2a 0%, #e74c3c 100%)",
                    boxShadow: "0 0 8px rgba(196,30,42,0.6)",
                  }}
                />
              </div>

              <div className="flex items-end justify-between">
                <div className="flex-1 pr-4">
                  <h3
                    className="text-white line-clamp-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "28px",
                    }}
                  >
                    {activeVideo.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className="text-white/60 flex items-center gap-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {activeVideo.duration}
                    </span>
                    <span className="text-white/30">•</span>
                    <span
                      className="text-white/60"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                    >
                      {activeVideo.date}
                    </span>
                    <span className="text-white/30">•</span>
                    <span
                      className="text-white/60"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                    >
                      {activeVideo.views} lượt xem
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Playlist (1/3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-1/3 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(180deg, #1a1012 0%, #0f0a0c 100%)",
              boxShadow:
                "0 20px 50px -12px rgba(0,0,0,0.3), 0 8px 20px -8px rgba(0,0,0,0.15)",
            }}
          >
            {/* Playlist header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(90deg, rgba(196,30,42,0.12) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#c41e2a]" fill="#c41e2a" />
                <span
                  className="text-white uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  Danh sách phát
                </span>
              </div>
              <span
                className="text-white/40"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
              >
                {playlist.length} video
              </span>
            </div>

            {/* Playlist items */}
            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#c41e2a33 transparent" }}>
              {playlist.map((video, i) => (
                <motion.button
                  key={video.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  onClick={() => handleSelectVideo(video)}
                  className="w-full flex items-start gap-3 p-3.5 cursor-pointer text-left transition-all duration-300 hover:bg-white/[0.06] group/pl"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Index */}
                  <span
                    className="text-white/30 mt-1 w-5 shrink-0 text-center group-hover/pl:text-[#c41e2a] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600 }}
                  >
                    {i + 1}
                  </span>

                  {/* Thumbnail */}
                  <div className="w-[110px] h-[66px] shrink-0 rounded-lg overflow-hidden relative">
                    <img
                      src={video.thumbnail}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/pl:scale-105"
                    />
                    {/* Duration badge */}
                    <div
                      className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-white"
                      style={{
                        background: "rgba(0,0,0,0.75)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {video.duration}
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/pl:opacity-100 transition-opacity duration-300">
                      <Play className="w-5 h-5 text-white" fill="white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-white/80 line-clamp-2 group-hover/pl:text-white transition-colors"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        lineHeight: "18px",
                      }}
                    >
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span
                        className="text-[#c41e2a]/70"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
                      >
                        {video.category}
                      </span>
                      <span className="text-white/20">•</span>
                      <span
                        className="text-white/35"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
                      >
                        {video.views}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: 6 video cards - 2 rows x 3 columns */}
        <div className="grid grid-cols-3 gap-5">
          {allBottomCards.map((video, i) => (
            <motion.a
              key={video.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="group/card flex flex-col rounded-xl overflow-hidden cursor-pointer"
              style={{
                background: "#fff",
                boxShadow: "0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 16px 40px -8px rgba(196,30,42,0.15), 0 6px 16px -4px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)";
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSelectVideo(video);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ height: "165px" }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(0deg, rgba(196,30,42,0.2) 0%, transparent 60%)" }}
                />
                {/* Duration */}
                <div
                  className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-white"
                  style={{
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(4px)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  {video.duration}
                </div>
                {/* Play icon center on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(196,30,42,0.85)",
                      boxShadow: "0 0 20px rgba(196,30,42,0.3)",
                    }}
                  >
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                {/* Category badge */}
                <div
                  className="absolute top-2 left-2 px-2 py-1 rounded-md text-white"
                  style={{
                    background: "rgba(196,30,42,0.85)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h4
                  className="text-[#1a1a1a] line-clamp-2 group-hover/card:text-[#c41e2a] transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    lineHeight: "20px",
                  }}
                >
                  {video.title}
                </h4>
                <div className="flex items-center gap-2 mt-auto pt-3">
                  <Clock className="w-3.5 h-3.5 text-[#999]" />
                  <span
                    className="text-[#999]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
                  >
                    {video.date}
                  </span>
                  <span className="text-[#ddd]">•</span>
                  <span
                    className="text-[#999]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
                  >
                    {video.views} lượt xem
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}