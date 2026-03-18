import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  Eye,
  Download,
  FileText,
  Tag,
  ChevronRight,
  File,
} from "lucide-react";
import { documentsData } from "../data/documents";
import { Breadcrumb } from "../components/shared/Breadcrumb";

export function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const document = id ? documentsData[id] : null;

  if (!document) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#c41e2a] mb-4">
            Không tìm thấy văn bản
          </h1>
          <Link to="/" className="text-[#c0891f] hover:underline">
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
          { label: "Văn bản", path: "/van-ban" },
          { label: document.title },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Document Type Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-3 py-1 rounded-md text-white text-sm uppercase tracking-wide"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    backgroundColor: "#c41e2a",
                  }}
                >
                  {document.type}
                </span>
                <span
                  className="px-3 py-1 rounded-md text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: "#c0891f",
                    backgroundColor: "#fff8f0",
                  }}
                >
                  {document.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-[#1a1a1a] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {document.title}
              </h1>

              {/* Metadata */}
              <div className="bg-[#fff8f0] rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 font-medium">Số ký hiệu:</span>
                    <p className="text-[#c41e2a] font-bold mt-1">
                      {document.code}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Cơ quan ban hành:</span>
                    <p className="text-gray-800 mt-1">{document.issuer}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Ngày ký:</span>
                    <p className="text-gray-800 mt-1">{document.signDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Ngày hiệu lực:</span>
                    <p className="text-gray-800 mt-1">{document.effectiveDate}</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div
                className="text-[#333] leading-relaxed mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#c41e2a]"
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                {document.summary}
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none mb-6"
                style={{
                  fontFamily: "'Lora', serif",
                }}
                dangerouslySetInnerHTML={{ __html: document.content }}
              />

              {/* Tags */}
              {document.tags.length > 0 && (
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={18} className="text-gray-400" />
                    {document.tags.map((tag, index) => (
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

              {/* Attachments */}
              {document.attachments.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText size={20} className="text-[#c41e2a]" />
                    <h3
                      className="text-[#1a1a1a]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      Tài liệu đính kèm
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {document.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#fff8f0] transition-colors group"
                      >
                        <File size={20} className="text-[#c41e2a]" />
                        <div className="flex-1">
                          <p
                            className="text-[#1a1a1a] group-hover:text-[#c41e2a] transition-colors"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 600,
                            }}
                          >
                            {attachment.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {attachment.size}
                          </p>
                        </div>
                        <Download
                          size={20}
                          className="text-gray-400 group-hover:text-[#c41e2a] transition-colors"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-4"
            >
              {/* Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3
                  className="text-[#1a1a1a] mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Thống kê
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Eye size={16} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
                        Lượt xem
                      </span>
                    </div>
                    <span
                      className="text-[#c41e2a] font-bold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {document.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Download size={16} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
                        Tải xuống
                      </span>
                    </div>
                    <span
                      className="text-[#c41e2a] font-bold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {document.downloads.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
                        Ngày ban hành
                      </span>
                    </div>
                    <span
                      className="text-gray-800"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                    >
                      {document.signDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#c41e2a] to-[#a01823] rounded-lg p-6 text-white">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Thao tác nhanh
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <Download size={18} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Tải văn bản
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <FileText size={18} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      In văn bản
                    </span>
                  </button>
                </div>
              </div>

              {/* Back to List */}
              <Link
                to="/van-ban"
                className="mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                <ChevronRight size={18} className="rotate-180" />
                Quay lại Danh sách văn bản
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
