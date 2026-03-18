import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Eye, Tag, ChevronRight, X } from "lucide-react";
import { galleriesData } from "../data/multimedia";
import { Breadcrumb } from "../components/shared/Breadcrumb";
import { useState } from "react";

export function GalleryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gallery = id ? galleriesData[id] : null;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!gallery) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#c41e2a] mb-4">
            Không tìm thấy thư viện ảnh
          </h1>
          <Link to="/" className="text-[#c0891f] hover:underline">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + gallery.images.length) % gallery.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", path: "/" },
          { label: "Thư viện ảnh", path: "/#multimedia" },
          { label: gallery.title },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto py-8 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
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
              {gallery.category}
            </span>
          </div>

          <h1
            className="text-[#1a1a1a] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {gallery.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                {gallery.date}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={16} />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                {gallery.views.toLocaleString()} lượt xem
              </span>
            </div>
            <div
              className="text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {gallery.images.length} ảnh
            </div>
          </div>

          <p
            className="text-[#333] leading-relaxed mb-4"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            {gallery.description}
          </p>

          {/* Tags */}
          {gallery.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={18} className="text-gray-400" />
              {gallery.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#fff8f0] cursor-pointer transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative cursor-pointer rounded-lg overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="text-white text-sm"
                    style={{
                      fontFamily: "'Lora', serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/#multimedia"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e2a] text-white rounded-lg hover:bg-[#a01823] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            <ChevronRight size={18} className="rotate-180" />
            Quay lại Thư viện
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronRight size={48} className="rotate-180" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery.images[currentImageIndex].url}
              alt={gallery.images[currentImageIndex].caption}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <p
              className="text-white text-center mt-4"
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "16px",
              }}
            >
              {gallery.images[currentImageIndex].caption}
            </p>
            <p
              className="text-gray-400 text-center mt-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
              }}
            >
              {currentImageIndex + 1} / {gallery.images.length}
            </p>
          </div>

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
