import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Clock, Eye, Calendar, Tag, ChevronRight, Play } from "lucide-react";
import { videosData } from "../data/multimedia";
import { Breadcrumb } from "../components/shared/Breadcrumb";

export function VideoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const video = id ? videosData[id] : null;

  if (!video) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#c41e2a] mb-4">
            Không tìm thấy video
          </h1>
          <Link
            to="/"
            className="text-[#c0891f] hover:underline"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", path: "/" },
          { label: "Video", path: "/#multimedia" },
          { label: video.title },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-black rounded-xl overflow-hidden mb-6"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="w-20 h-20 rounded-full bg-[#c41e2a] flex items-center justify-center hover:bg-[#a01823] transition-colors">
                  <Play className="text-white ml-1" size={32} fill="white" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-3 py-1 rounded-md text-white text-sm uppercase tracking-wide"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    backgroundColor: "#c41e2a",
                  }}
                >
                  {video.category}
                </span>
              </div>

              <h1
                className="text-[#1a1a1a] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 4vw, 32px)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {video.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {video.date}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye size={16} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {video.views.toLocaleString()} lượt xem
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {video.duration}
                  </span>
                </div>
              </div>

              <div
                className="text-[#333] leading-relaxed mb-6"
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "16px",
                  lineHeight: 1.8,
                }}
              >
                {video.description}
              </div>

              {/* Tags */}
              {video.tags.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={18} className="text-gray-400" />
                    {video.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#fff8f0] cursor-pointer transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-[4px] h-[24px] rounded-sm"
                  style={{
                    background: "linear-gradient(180deg, #c41e2a 0%, #d4a853 100%)",
                  }}
                />
                <h2
                  className="text-[#1a1a1a] uppercase tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  Video liên quan
                </h2>
              </div>

              <div className="space-y-4">
                {video.relatedVideos.map((related) => (
                  <Link
                    key={related.id}
                    to={`/video/${related.id}`}
                    className="group flex gap-3 p-3 rounded-lg hover:bg-[#fff8f0] transition-colors"
                  >
                    <div className="relative w-32 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={related.thumbnail}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={20} className="text-white" fill="white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-[#1a1a1a] line-clamp-2 group-hover:text-[#c41e2a] transition-colors"
                        style={{
                          fontFamily: "'Lora', serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/#multimedia"
                className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-[#c41e2a] text-white rounded-lg hover:bg-[#a01823] transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Xem tất cả video
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}