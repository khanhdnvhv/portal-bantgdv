import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { Camera, BarChart3, ChevronLeft, ChevronRight, Eye, Calendar, ZoomIn, BookOpen, Clock, Play, Pause, Volume2, VolumeX, Maximize2, Film, Headphones, Music, Radio } from "lucide-react";

type MediaItem = {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  views: string;
  photoCount?: number;
  category: string;
  readTime?: string;
  excerpt?: string;
  duration?: string;
};

const PHOTOS: MediaItem[] = [
  {
    id: 1,
    title: "Đại hội Đại biểu toàn quốc lần thứ XIV của Đảng Cộng sản Việt Nam",
    thumbnail: "https://images.unsplash.com/photo-1750231211707-e2cd6e304584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXN0JTIwcGFydHklMjBjb25ncmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczNTk4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "14/03/2026",
    views: "245.8K",
    photoCount: 86,
    category: "Đại hội Đảng",
  },
  {
    id: 2,
    title: "Tổng Bí thư tiếp xúc cử tri và nhân dân tại các tỉnh phía Bắc",
    thumbnail: "https://images.unsplash.com/photo-1710141968143-7ea1f6d89025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFub2klMjBnb3Zlcm5tZW50JTIwcGxhemElMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzM1OTgyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "12/03/2026",
    views: "178.4K",
    photoCount: 52,
    category: "Lãnh đạo Đảng",
  },
  {
    id: 3,
    title: "Lễ dâng hương tưởng niệm Chủ tịch Hồ Chí Minh tại Lăng Bác",
    thumbnail: "https://images.unsplash.com/photo-1707132940730-00deb43f7b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIbyUyMENoaSUyME1pbmglMjBtYXVzb2xldW0lMjBIYW5vaSUyMG1vbnVtZW50fGVufDF8fHx8MTc3MzU5ODIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "10/03/2026",
    views: "132.6K",
    photoCount: 38,
    category: "Tưởng niệm",
  },
  {
    id: 4,
    title: "Hội nghị Ban Chấp hành Trung ương Đảng khóa XIV phiên họp lần thứ 3",
    thumbnail: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYXVkaXRvcml1bSUyMHN0YWdlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NzM1OTgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "08/03/2026",
    views: "98.3K",
    photoCount: 44,
    category: "Trung ương Đảng",
  },
  {
    id: 5,
    title: "Đảng lãnh đạo công cuộc xây dựng nông thôn mới kiểu mẫu toàn quốc",
    thumbnail: "https://images.unsplash.com/photo-1707235163396-fb91d3353a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwYWdyaWN1bHR1cmUlMjByaWNlJTIwZmllbGQlMjBmYXJtZXJ8ZW58MXx8fHwxNzczNTk4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "06/03/2026",
    views: "67.5K",
    photoCount: 30,
    category: "Xây dựng Đảng",
  },
  {
    id: 6,
    title: "Kỷ niệm 96 năm Ngày thành lập Đảng Cộng sản Việt Nam (3/2/1930 – 3/2/2026)",
    thumbnail: "https://images.unsplash.com/photo-1763475775358-07a65aed4e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZmxhZyUyMHJlZCUyMHN0YXIlMjBwYXRyaW90aWN8ZW58MXx8fHwxNzczNTk4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "03/02/2026",
    views: "312.7K",
    photoCount: 64,
    category: "Ngày lễ Đảng",
  },
  {
    id: 7,
    title: "Đảng ủy Quân sự Trung ương kiểm tra công tác quốc phòng tại biên giới phía Bắc",
    thumbnail: "https://images.unsplash.com/photo-1733605921102-65d046a3d928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwc29sZGllciUyMG1pbGl0YXJ5JTIwZGVmZW5zZSUyMHBhdHJpb3RpY3xlbnwxfHx8fDE3NzM1OTgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "01/03/2026",
    views: "89.1K",
    photoCount: 26,
    category: "Quốc phòng",
  },
  {
    id: 8,
    title: "Đảng bộ TP. Đà Nẵng triển khai chương trình phát triển hạ tầng trọng điểm",
    thumbnail: "https://images.unsplash.com/photo-1702467190910-8ca84d09601e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwRGElMjBOYW5nJTIwZ29sZGVuJTIwYnJpZGdlJTIwbGFuZG1hcmt8ZW58MXx8fHwxNzczNTk4MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "28/02/2026",
    views: "74.2K",
    photoCount: 32,
    category: "Đảng bộ địa phương",
  },
];

const INFOGRAPHICS: MediaItem[] = [
  {
    id: 101,
    title: "Infographic: Toàn cảnh Đại hội XIV — Nhân sự, Nghị quyết và Nhiệm vụ trọng tâm",
    thumbnail: "https://images.unsplash.com/photo-1626234736261-f50c9ff94bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGluZm9ncmFwaGljJTIwY2hhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM1OTgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "13/03/2026",
    views: "198.4K",
    category: "Đại hội Đảng",
  },
  {
    id: 102,
    title: "96 năm Đảng Cộng sản Việt Nam: Những dấu mốc lịch sử quan trọng",
    thumbnail: "https://images.unsplash.com/photo-1763475775358-07a65aed4e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZmxhZyUyMHJlZCUyMHN0YXIlMjBwYXRyaW90aWN8ZW58MXx8fHwxNzczNTk4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "11/03/2026",
    views: "156.3K",
    category: "Lịch sử Đảng",
  },
  {
    id: 103,
    title: "Công tác xây dựng, chỉnh đốn Đảng: Kết quả kỷ luật và phát triển đảng viên 2025",
    thumbnail: "https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvZ3JhcGhpYyUyMGNoYXJ0JTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNDgyNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "09/03/2026",
    views: "134.7K",
    category: "Xây dựng Đảng",
  },
  {
    id: 104,
    title: "Đảng lãnh đạo phát triển kinh tế - xã hội: Các chỉ tiêu đạt và vượt kế hoạch",
    thumbnail: "https://images.unsplash.com/photo-1762089422012-518772ffd549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZWNvbm9taWMlMjBncm93dGglMjBtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzM1OTgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "07/03/2026",
    views: "112.1K",
    category: "Kinh tế",
  },
  {
    id: 105,
    title: "Phòng, chống tham nhũng, tiêu cực: Kết quả nổi bật nhiệm kỳ XIII của Đảng",
    thumbnail: "https://images.unsplash.com/photo-1605858299286-6d53703cca91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRhdGElMjBwcmVzZW50YXRpb24lMjBncmFwaGljfGVufDF8fHx8MTc3MzQ4MjUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "05/03/2026",
    views: "187.9K",
    category: "Phòng chống tham nhũng",
  },
  {
    id: 106,
    title: "Công tác cán bộ: Quy hoạch, đào tạo và bổ nhiệm cấp chiến lược",
    thumbnail: "https://images.unsplash.com/photo-1723186051621-5c9de14e1a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcG9saXRpY2FsJTIwZWR1Y2F0aW9uJTIwc2VtaW5hciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzM1OTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "03/03/2026",
    views: "95.6K",
    category: "Công tác cán bộ",
  },
];

const MEGASTORIES: MediaItem[] = [
  {
    id: 201,
    title: "Kỷ nguyên vươn mình: Đảng lãnh đạo đất nước bước vào giai đoạn phát triển mới",
    thumbnail: "https://images.unsplash.com/photo-1763475775358-07a65aed4e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZmxhZyUyMHJlZCUyMHN0YXIlMjBwYXRyaW90aWN8ZW58MXx8fHwxNzczNTk4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "14/03/2026",
    views: "345.8K",
    readTime: "25 phút đọc",
    excerpt: "Đại hội XIV đã mở ra kỷ nguyên vươn mình của dân tộc. Dưới sự lãnh đạo của Đảng, Việt Nam quyết tâm trở thành nước phát triển vào năm 2045...",
    category: "Đại hội Đảng",
  },
  {
    id: 202,
    title: "96 năm Đảng Cộng sản Việt Nam: Từ Đảng cách mạng đến Đảng cầm quyền",
    thumbnail: "https://images.unsplash.com/photo-1750231211707-e2cd6e304584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXN0JTIwcGFydHklMjBjb25ncmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczNTk4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "12/03/2026",
    views: "289.3K",
    readTime: "30 phút đọc",
    excerpt: "Nhìn lại hành trình 96 năm vẻ vang, từ Hội nghị thành lập Đảng ngày 3/2/1930 đến Đại hội XIV — sứ mệnh lịch sử chưa bao giờ dừng lại...",
    category: "Lịch sử Đảng",
  },
  {
    id: 203,
    title: "Xây dựng, chỉnh đốn Đảng: Cuộc chiến chống tham nhũng không có vùng cấm",
    thumbnail: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYXVkaXRvcml1bSUyMHN0YWdlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NzM1OTgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "10/03/2026",
    views: "256.7K",
    readTime: "22 phút đọc",
    excerpt: "Từ 'lò' nóng phòng chống tham nhũng đến cơ chế kiểm soát quyền lực — Đảng kiên quyết loại bỏ những 'con sâu' để giữ vững niềm tin nhân dân...",
    category: "Xây dựng Đảng",
  },
  {
    id: 204,
    title: "Nghị quyết Đại hội XIV: 6 nhiệm vụ trọng tâm và 3 đột phá chiến lược",
    thumbnail: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwbmF0aW9uYWwlMjBhc3NlbWJseSUyMGJ1aWxkaW5nJTIwSGFub2l8ZW58MXx8fHwxNzczNTk4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "08/03/2026",
    views: "198.4K",
    readTime: "18 phút đọc",
    excerpt: "Phân tích chuyên sâu Nghị quyết Đại hội XIV: Hoàn thiện thể chế, phát triển nguồn nhân lực chất lượng cao và xây dựng hạ tầng đồng bộ...",
    category: "Nghị quyết",
  },
  {
    id: 205,
    title: "Đảng với đồng bào dân tộc thiểu số: Chính sách đại đoàn kết và phát triển bền vững",
    thumbnail: "https://images.unsplash.com/photo-1768236872831-7a76f520b1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZXRobmljJTIwbWlub3JpdHklMjBoaWdobGFuZCUyMHBlb3BsZXxlbnwxfHx8fDE3NzM1OTgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "06/03/2026",
    views: "145.2K",
    readTime: "20 phút đọc",
    excerpt: "54 dân tộc anh em — Đảng thực hiện chính sách đại đoàn kết dân tộc, xoá đói giảm nghèo và bảo tồn bản sắc văn hoá vùng cao...",
    category: "Dân tộc - Tôn giáo",
  },
  {
    id: 206,
    title: "Đảng lãnh đạo chuyển đổi số quốc gia: Từ Chính phủ điện tử đến kinh tế số",
    thumbnail: "https://images.unsplash.com/photo-1768005867860-7371c47e660d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwU2FpZ29uJTIwSG8lMjBDaGklMjBNaW5oJTIwQ2l0eSUyMG1vZGVybiUyMHNreWxpbmV8ZW58MXx8fHwxNzczNTk4MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "04/03/2026",
    views: "167.8K",
    readTime: "17 phút đọc",
    excerpt: "Nghị quyết số 52-NQ/TW về chủ động tham gia cách mạng công nghiệp 4.0 — Đảng định hướng chiến lược số hoá toàn diện...",
    category: "Chuyển đổi số",
  },
  {
    id: 207,
    title: "Đảng bộ các địa phương: Mô hình sáng tạo trong xây dựng Đảng ở cơ sở",
    thumbnail: "https://images.unsplash.com/photo-1525383033081-6088a7a5affa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcnVyYWwlMjBkZXZlbG9wbWVudCUyMHBvdmVydHklMjByZWR1Y3Rpb258ZW58MXx8fHwxNzczNTk4MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "02/03/2026",
    views: "118.5K",
    readTime: "19 phút đọc",
    excerpt: "Từ mô hình 'Dân vận khéo' đến 'Chi bộ bốn tốt' — những sáng tạo trong công tác xây dựng Đảng tại các đảng bộ địa phương...",
    category: "Đảng bộ cơ sở",
  },
];

const VIDEOS: MediaItem[] = [
  {
    id: 301,
    title: "Phim tài liệu: Đại hội XIV — Mở ra kỷ nguyên vươn mình của dân tộc",
    thumbnail: "https://images.unsplash.com/photo-1750231211707-e2cd6e304584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXN0JTIwcGFydHklMjBjb25ncmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczNTk4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "52:30",
    date: "14/03/2026",
    views: "328.5K",
    category: "Đại hội Đảng",
  },
  {
    id: 302,
    title: "Tổng Bí thư phát biểu chỉ đạo Hội nghị Trung ương 3 khóa XIV",
    thumbnail: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYXVkaXRvcml1bSUyMHN0YWdlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NzM1OTgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "38:15",
    date: "13/03/2026",
    views: "215.2K",
    category: "Lãnh đạo Đảng",
  },
  {
    id: 303,
    title: "Công tác xây dựng, chỉnh đốn Đảng: Kết quả kiểm tra, giám sát và kỷ luật Đảng",
    thumbnail: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwbmF0aW9uYWwlMjBhc3NlbWJseSUyMGJ1aWxkaW5nJTIwSGFub2l8ZW58MXx8fHwxNzczNTk4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "28:40",
    date: "12/03/2026",
    views: "156.8K",
    category: "Xây dựng Đảng",
  },
  {
    id: 304,
    title: "Đảng với công tác dân vận: Lắng nghe tiếng nói nhân dân từ cơ sở",
    thumbnail: "https://images.unsplash.com/photo-1684664888066-5de18c97b3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIweW91dGglMjB2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzU5ODIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "22:55",
    date: "11/03/2026",
    views: "98.1K",
    category: "Dân vận",
  },
  {
    id: 305,
    title: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trong giai đoạn mới",
    thumbnail: "https://images.unsplash.com/photo-1707132940730-00deb43f7b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIbyUyMENoaSUyME1pbmglMjBtYXVzb2xldW0lMjBIYW5vaSUyMG1vbnVtZW50fGVufDF8fHx8MTc3MzU5ODIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:30",
    date: "10/03/2026",
    views: "134.3K",
    category: "Học tập Bác",
  },
  {
    id: 306,
    title: "Đảng lãnh đạo phát triển hạ tầng giao thông: Cao tốc Bắc - Nam và các dự án trọng điểm",
    thumbnail: "https://images.unsplash.com/photo-1758738880454-7a81de45a0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwaW5mcmFzdHJ1Y3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBicmlkZ2UlMjBoaWdod2F5fGVufDF8fHx8MTc3MzU5ODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "25:10",
    date: "09/03/2026",
    views: "87.6K",
    category: "Phát triển",
  },
  {
    id: 307,
    title: "Bồi dưỡng lý luận chính trị: Nâng cao năng lực lãnh đạo của đội ngũ cán bộ Đảng",
    thumbnail: "https://images.unsplash.com/photo-1723186051621-5c9de14e1a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcG9saXRpY2FsJTIwZWR1Y2F0aW9uJTIwc2VtaW5hciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzM1OTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:45",
    date: "08/03/2026",
    views: "62.4K",
    category: "Đào tạo cán bộ",
  },
  {
    id: 308,
    title: "Đảng ủy Công an Trung ương: Bảo đảm an ninh trật tự phục vụ Đại hội Đảng",
    thumbnail: "https://images.unsplash.com/photo-1733605921102-65d046a3d928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwc29sZGllciUyMG1pbGl0YXJ5JTIwZGVmZW5zZSUyMHBhdHJpb3RpY3xlbnwxfHx8fDE3NzM1OTgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "20:00",
    date: "07/03/2026",
    views: "76.9K",
    category: "An ninh",
  },
];

const AUDIOS: MediaItem[] = [
  {
    id: 401,
    title: "Podcast: Đại hội XIV và kỷ nguyên vươn mình — Phân tích Nghị quyết của Đảng",
    thumbnail: "https://images.unsplash.com/photo-1655947715189-e7edcae154cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NzM1MTEzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "48:30",
    date: "14/03/2026",
    views: "89.3K",
    category: "Đại hội Đảng",
  },
  {
    id: 402,
    title: "Phóng sự âm thanh: Đảng viên trẻ vùng biên giới — Gác rừng giữ đất",
    thumbnail: "https://images.unsplash.com/photo-1713281318623-eb73e86e23c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMGJyb2FkY2FzdCUyMHN0YXRpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczNTk4MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "32:15",
    date: "13/03/2026",
    views: "56.8K",
    category: "Phóng sự Đảng",
  },
  {
    id: 403,
    title: "Chuyên đề: Xây dựng Đảng trong sạch, vững mạnh — Bài học từ lịch sử",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NzM0ODI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "35:20",
    date: "12/03/2026",
    views: "72.1K",
    category: "Xây dựng Đảng",
  },
  {
    id: 404,
    title: "Bình luận: Đảng lãnh đạo phòng chống tham nhũng — Không có vùng cấm",
    thumbnail: "https://images.unsplash.com/photo-1641135698530-8d919344c0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcnZpZXclMjBqb3VybmFsaXN0JTIwbWljcm9waG9uZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM1OTgyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "25:50",
    date: "11/03/2026",
    views: "68.6K",
    category: "Phòng chống tham nhũng",
  },
  {
    id: 405,
    title: "Sách nói: 'Đường Cách Mệnh' — Tác phẩm nền tảng tư tưởng của Đảng",
    thumbnail: "https://images.unsplash.com/photo-1624590522803-fc1dc76d7651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb2Jvb2slMjBoZWFkcGhvbmVzJTIwcmVhZGluZyUyMGJvb2t8ZW58MXx8fHwxNzczNTk4MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1:15:30",
    date: "10/03/2026",
    views: "112.4K",
    category: "Sách nói Đảng",
  },
  {
    id: 406,
    title: "Phỏng vấn: Công tác cán bộ của Đảng — Chuẩn hoá tiêu chuẩn lãnh đạo cấp chiến lược",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMGJyb2FkY2FzdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzM0ODI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "38:15",
    date: "09/03/2026",
    views: "54.2K",
    category: "Công tác cán bộ",
  },
  {
    id: 407,
    title: "Radio Đảng: Tổng hợp tin tức Đảng nổi bật tuần 10-16 tháng 3 năm 2026",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwc291bmR8ZW58MXx8fHwxNzczNDgyNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "18:45",
    date: "08/03/2026",
    views: "43.7K",
    category: "Radio Đảng",
  },
  {
    id: 408,
    title: "Tuyển tập ca khúc cách mạng: Ca ngợi Đảng quang vinh — 96 năm đồng hành cùng dân tộc",
    thumbnail: "https://images.unsplash.com/photo-1594328082907-cd93c1c518d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpbnlsJTIwcmVjb3JkJTIwdmludGFnZSUyMHBsYXllcnxlbnwxfHx8fDE3NzM1OTgyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "55:00",
    date: "07/03/2026",
    views: "156.5K",
    category: "Ca khúc Đảng",
  },
];

const TABS = [
  { key: "video" as const, label: "Video", icon: Film },
  { key: "audio" as const, label: "Audio", icon: Headphones },
  { key: "photos" as const, label: "Ảnh", icon: Camera },
  { key: "infographics" as const, label: "Infographic", icon: BarChart3 },
  { key: "megastory" as const, label: "Megastory", icon: BookOpen },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.95,
  }),
};

export function MultimediaSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"video" | "audio" | "photos" | "infographics" | "megastory">("video");
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const progressRef = React.useRef<number | null>(null);

  const isVideo = activeTab === "video";
  const isAudio = activeTab === "audio";
  const items = activeTab === "video" ? VIDEOS : activeTab === "audio" ? AUDIOS : activeTab === "photos" ? PHOTOS : activeTab === "infographics" ? INFOGRAPHICS : MEGASTORIES;
  // Featured = first 4, grid = rest
  const featured = items.slice(0, 4);
  const gridCards = items.slice(0, 6);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setSlideIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return featured.length - 1;
        if (next >= featured.length) return 0;
        return next;
      });
    },
    [featured.length]
  );

  // Video/Audio progress simulation
  useEffect(() => {
    if ((isVideo || isAudio) && isPlaying) {
      progressRef.current = window.setInterval(() => {
        setVideoProgress((p) => (p >= 100 ? 100 : p + 0.15));
      }, 100);
    }
    return () => {
      if (progressRef.current) window.clearInterval(progressRef.current);
    };
  }, [isVideo, isAudio, isPlaying]);

  useEffect(() => {
    if (videoProgress >= 100) setIsPlaying(false);
  }, [videoProgress]);

  // Auto slideshow (disabled for video tab)
  useEffect(() => {
    if (isPaused || isVideo || isAudio) return;
    const timer = window.setInterval(() => {
      paginate(1);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused, paginate, isVideo, isAudio]);

  // Reset slide index on tab change
  useEffect(() => {
    setSlideIndex(0);
    setDirection(1);
    if (activeTab === "video" || activeTab === "audio") {
      setVideoProgress(0);
      setIsPlaying(true);
    }
  }, [activeTab]);

  const handleSelectVideo = (index: number) => {
    setSlideIndex(index);
    setVideoProgress(0);
    setIsPlaying(true);
  };

  const currentSlide = featured[slideIndex];

  // Dynamic background based on active tab - Party colors (red/gold) with varying intensity
  const bgConfig = {
    video: {
      gradient: "radial-gradient(ellipse at 15% 25%, rgba(192,137,31,0.10) 0%, transparent 50%), radial-gradient(ellipse at 85% 75%, rgba(218,165,32,0.07) 0%, transparent 50%), radial-gradient(ellipse at 50% 10%, rgba(184,134,11,0.05) 0%, transparent 40%), linear-gradient(135deg, rgba(192,137,31,0.04) 0%, rgba(255,253,245,0.96) 25%, rgba(218,165,32,0.03) 50%, rgba(255,253,245,0.96) 75%, rgba(192,137,31,0.03) 100%)",
      border: "rgba(192,137,31,0.12)",
    },
    audio: {
      gradient: "radial-gradient(ellipse at 20% 30%, rgba(88,28,135,0.10) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(196,30,42,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 15%, rgba(139,92,246,0.05) 0%, transparent 40%), linear-gradient(135deg, rgba(88,28,135,0.04) 0%, rgba(255,251,254,0.96) 25%, rgba(196,30,42,0.03) 50%, rgba(255,251,254,0.96) 75%, rgba(88,28,135,0.03) 100%)",
      border: "rgba(88,28,135,0.12)",
    },
    photos: {
      gradient: "radial-gradient(ellipse at 20% 20%, rgba(196,30,42,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(192,137,31,0.06) 0%, transparent 50%), linear-gradient(135deg, rgba(196,30,42,0.03) 0%, rgba(255,255,255,0.95) 30%, rgba(192,137,31,0.03) 70%, rgba(255,255,255,0.95) 100%)",
      border: "rgba(196,30,42,0.08)",
    },
    infographics: {
      gradient: "radial-gradient(ellipse at 30% 10%, rgba(196,30,42,0.14) 0%, transparent 50%), radial-gradient(ellipse at 70% 90%, rgba(192,137,31,0.10) 0%, transparent 50%), linear-gradient(135deg, rgba(196,30,42,0.06) 0%, rgba(255,248,240,0.95) 30%, rgba(192,137,31,0.06) 70%, rgba(255,248,240,0.95) 100%)",
      border: "rgba(196,30,42,0.12)",
    },
    megastory: {
      gradient: "radial-gradient(ellipse at 10% 50%, rgba(196,30,42,0.18) 0%, transparent 50%), radial-gradient(ellipse at 90% 30%, rgba(192,137,31,0.14) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(139,26,26,0.08) 0%, transparent 40%), linear-gradient(135deg, rgba(196,30,42,0.08) 0%, rgba(255,245,235,0.95) 25%, rgba(192,137,31,0.08) 50%, rgba(255,245,235,0.95) 75%, rgba(196,30,42,0.05) 100%)",
      border: "rgba(196,30,42,0.16)",
    },
  };

  const currentBg = bgConfig[activeTab];

  return (
    <div className="relative flex flex-col gap-6 rounded-2xl overflow-hidden" style={{ padding: "32px 28px" }}>
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 4,
          background: "linear-gradient(90deg, #d4a853 0%, #c41e2a 50%, #d4a853 100%)",
          borderRadius: "16px 16px 0 0",
          zIndex: 20,
        }}
      />
      {/* Dynamic animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            background: currentBg.gradient,
            borderRadius: "inherit",
          }}
        />
      </AnimatePresence>
      {/* Subtle decorative pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,30,42,0.3) 40px, rgba(196,30,42,0.3) 41px)`,
          borderRadius: "inherit",
        }}
      />
      {/* Inner subtle border */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          border: `1px solid ${currentBg.border}`,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.7)`,
          transition: "border-color 0.8s ease",
        }}
      />
      {/* Content (relative to sit above background) */}
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
              ĐA PHƯƠNG TIỆN
            </h2>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c41e2a]/30 to-transparent" />

          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: "rgba(196,30,42,0.06)" }}>
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative px-5 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#fff" : "#c41e2a",
                    background: isActive ? "linear-gradient(135deg, #c41e2a 0%, #a01520 100%)" : "transparent",
                    boxShadow: isActive ? "0 4px 12px -2px rgba(196,30,42,0.4)" : "none",
                    letterSpacing: "0.3px",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Slideshow + Thumbnails */}
        <div className="flex gap-5" style={{ height: "440px" }}>
          {/* Main area (2/3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-2/3 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              boxShadow: (isVideo || isAudio)
                ? "0 20px 50px -12px rgba(0,0,0,0.3), 0 8px 20px -8px rgba(0,0,0,0.15)"
                : "0 20px 50px -12px rgba(0,0,0,0.25), 0 8px 20px -8px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={(isVideo || isAudio) ? () => setIsPlaying(!isPlaying) : undefined}
          >
            {/* Slide/Video images */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <img
                  src={currentSlide.thumbnail}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isAudio
                  ? "linear-gradient(0deg, rgba(30,10,40,0.9) 0%, rgba(30,10,40,0.5) 35%, rgba(88,28,135,0.15) 65%, rgba(30,10,40,0.2) 100%)"
                  : isVideo
                  ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.1) 100%)"
                  : "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.15) 100%)",
              }}
            />

            {/* Video play/pause overlay */}
            {isVideo && (
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
            )}

            {/* Audio player overlay */}
            {isAudio && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {/* Vinyl disc animation */}
                <motion.div
                  className="relative"
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={isPlaying ? { duration: 8, repeat: Infinity, ease: "linear" } : {}}
                  style={{ width: 140, height: 140 }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, rgba(88,28,135,0.6), rgba(196,30,42,0.4), rgba(139,92,246,0.5), rgba(88,28,135,0.6))",
                      boxShadow: "0 0 40px rgba(139,92,246,0.3), inset 0 0 30px rgba(0,0,0,0.4)",
                      border: "3px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full"
                    style={{ background: "rgba(30,10,40,0.9)", border: "2px solid rgba(139,92,246,0.3)" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{ background: "rgba(139,92,246,0.6)" }}
                  />
                </motion.div>

                {/* Waveform equalizer bars */}
                <div className="flex items-end gap-[3px] mt-5" style={{ height: 32 }}>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full"
                      style={{
                        width: 3,
                        background: `linear-gradient(180deg, rgba(139,92,246,0.9) 0%, rgba(196,30,42,0.7) 100%)`,
                        boxShadow: "0 0 4px rgba(139,92,246,0.3)",
                      }}
                      animate={isPlaying ? {
                        height: [
                          4 + Math.random() * 8,
                          12 + Math.random() * 20,
                          4 + Math.random() * 8,
                        ],
                      } : { height: 4 }}
                      transition={isPlaying ? {
                        duration: 0.4 + Math.random() * 0.4,
                        repeat: Infinity,
                        delay: i * 0.03,
                        ease: "easeInOut",
                      } : { duration: 0.3 }}
                    />
                  ))}
                </div>

                {/* Play/Pause button (pointer-events restored) */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(196,30,42,0.8) 100%)",
                    boxShadow: "0 0 30px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)",
                    border: "2px solid rgba(255,255,255,0.15)",
                  }}
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  )}
                </motion.div>
              </div>
            )}

            {/* Top badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              {isAudio ? (
                <>
                  <span
                    className="px-3 py-1.5 rounded-md text-white flex items-center gap-1.5"
                    style={{
                      background: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    ĐANG NGHE
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
                    {currentSlide.category}
                  </span>
                </>
              ) : isVideo ? (
                <>
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
                    {currentSlide.category}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="px-3 py-1.5 rounded-md text-white flex items-center gap-1.5"
                    style={{
                      background: "linear-gradient(135deg, #c41e2a 0%, #a01520 100%)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {activeTab === "photos" ? <Camera className="w-3.5 h-3.5" /> : activeTab === "infographics" ? <BarChart3 className="w-3.5 h-3.5" /> : activeTab === "megastory" ? <BookOpen className="w-3.5 h-3.5" /> : <Headphones className="w-3.5 h-3.5" />}
                    {currentSlide.category}
                  </span>
                  {currentSlide.photoCount && (
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
                      {currentSlide.photoCount} ảnh
                    </span>
                  )}
                  {currentSlide.readTime && (
                    <span
                      className="px-3 py-1.5 rounded-md text-white/90 flex items-center gap-1"
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(8px)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      {currentSlide.readTime}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Navigation arrows (non-video/non-audio tabs only) */}
            {!isVideo && !isAudio && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              {/* Video/Audio progress bar */}
              {(isVideo || isAudio) && (
                <div className="relative h-[3px] bg-white/20 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      width: `${videoProgress}%`,
                      background: isAudio
                        ? "linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)"
                        : "linear-gradient(90deg, #c41e2a 0%, #e74c3c 100%)",
                      boxShadow: isAudio
                        ? "0 0 8px rgba(124,58,237,0.6)"
                        : "0 0 8px rgba(196,30,42,0.6)",
                    }}
                  />
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3
                    className="text-white line-clamp-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: (isVideo || isAudio) ? "28px" : "30px",
                    }}
                  >
                    {currentSlide.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2.5">
                    {(isVideo || isAudio) && currentSlide.duration && (
                      <>
                        <span
                          className="text-white/60 flex items-center gap-1"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {currentSlide.duration}
                        </span>
                        <span className="text-white/30">•</span>
                      </>
                    )}
                    <span
                      className="text-white/60 flex items-center gap-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {currentSlide.date}
                    </span>
                    <span className="text-white/30">•</span>
                    <span
                      className="text-white/60 flex items-center gap-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {currentSlide.views} lượt xem
                    </span>
                    {currentSlide.readTime && (
                      <>
                        <span className="text-white/30">•</span>
                        <span
                          className="text-white/60 flex items-center gap-1"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {currentSlide.readTime}
                        </span>
                      </>
                    )}
                  </div>
                  {currentSlide.excerpt && (
                    <p
                      className="text-white/50 line-clamp-2 mt-2"
                      style={{ fontFamily: "'Lora', serif", fontSize: "13px", lineHeight: "19px" }}
                    >
                      {currentSlide.excerpt}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Video/Audio controls */}
              {(isVideo || isAudio) && (
                <div className="flex items-center justify-end gap-2 mt-3">
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
                  {isVideo && (
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              {/* Progress dots (non-video/non-audio) */}
              {!isVideo && !isAudio && (
                <div className="flex items-center gap-2 mt-4">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > slideIndex ? 1 : -1);
                        setSlideIndex(i);
                      }}
                      className="relative h-[3px] rounded-full overflow-hidden cursor-pointer transition-all duration-300"
                      style={{
                        width: i === slideIndex ? "40px" : "20px",
                        background: i === slideIndex ? "transparent" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {i === slideIndex && (
                        <>
                          <div className="absolute inset-0 bg-white/30 rounded-full" />
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: "linear-gradient(90deg, #c41e2a, #e74c3c)",
                              transformOrigin: "left",
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 4.5, ease: "linear" }}
                            key={`progress-${slideIndex}-${currentSlide.id}`}
                          />
                        </>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Sidebar list (1/3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-1/3 rounded-2xl overflow-hidden flex flex-col"
            style={(isVideo || isAudio) ? {
              background: isAudio
                ? "linear-gradient(180deg, #1a0f20 0%, #0f0a14 100%)"
                : "linear-gradient(180deg, #1a1012 0%, #0f0a0c 100%)",
              boxShadow: "0 20px 50px -12px rgba(0,0,0,0.3), 0 8px 20px -8px rgba(0,0,0,0.15)",
            } : {
              background: "linear-gradient(180deg, #faf5ef 0%, #f5ede3 100%)",
              boxShadow: "0 20px 50px -12px rgba(139,90,43,0.15), 0 8px 20px -8px rgba(0,0,0,0.08)",
              border: "1px solid rgba(224,201,176,0.3)",
            }}
          >
            {/* List header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={(isVideo || isAudio) ? {
                borderBottom: isAudio ? "1px solid rgba(139,92,246,0.12)" : "1px solid rgba(255,255,255,0.08)",
                background: isAudio
                  ? "linear-gradient(90deg, rgba(139,92,246,0.12) 0%, transparent 100%)"
                  : "linear-gradient(90deg, rgba(196,30,42,0.12) 0%, transparent 100%)",
              } : {
                borderBottom: "1px solid rgba(196,30,42,0.1)",
                background: "linear-gradient(90deg, rgba(196,30,42,0.06) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-2">
                {isAudio ? (
                  <Headphones className="w-4 h-4 text-[#a78bfa]" />
                ) : isVideo ? (
                  <Play className="w-4 h-4 text-[#c41e2a]" fill="#c41e2a" />
                ) : activeTab === "photos" ? (
                  <Camera className="w-4 h-4 text-[#c41e2a]" />
                ) : activeTab === "infographics" ? (
                  <BarChart3 className="w-4 h-4 text-[#c41e2a]" />
                ) : (
                  <BookOpen className="w-4 h-4 text-[#c41e2a]" />
                )}
                <span
                  className={(isVideo || isAudio) ? "text-white uppercase" : "text-[#c41e2a] uppercase"}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {isAudio ? "Danh sách nghe" : isVideo ? "Danh sách phát" : activeTab === "photos" ? "Bộ ảnh mới" : activeTab === "infographics" ? "Mới nhất" : "Nổi bật"}
                </span>
              </div>
              <span
                className={(isVideo || isAudio) ? "text-white/40" : "text-[#8b5a2b]/50"}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
              >
                {featured.length} {isAudio ? "audio" : isVideo ? "video" : "mục"}
              </span>
            </div>

            {/* Thumbnail items */}
            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#c41e2a33 transparent" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {featured.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      onClick={() => {
                        if (isVideo || isAudio) {
                          handleSelectVideo(i);
                        } else {
                          setDirection(i > slideIndex ? 1 : -1);
                          setSlideIndex(i);
                        }
                      }}
                      className="w-full flex items-start gap-3 p-3.5 cursor-pointer text-left transition-all duration-300"
                      style={(isVideo || isAudio) ? {
                        borderBottom: isAudio ? "1px solid rgba(139,92,246,0.08)" : "1px solid rgba(255,255,255,0.05)",
                        background: i === slideIndex ? (isAudio ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.06)") : "transparent",
                      } : {
                        borderBottom: "1px solid rgba(196,30,42,0.06)",
                        background: i === slideIndex ? "rgba(196,30,42,0.06)" : "transparent",
                      }}
                    >
                      {/* Index (video/audio) or Active indicator */}
                      {(isVideo || isAudio) ? (
                        <span
                          className="mt-1 w-5 shrink-0 text-center transition-colors"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: i === slideIndex ? (isAudio ? "#a78bfa" : "#c41e2a") : "rgba(255,255,255,0.3)",
                          }}
                        >
                          {i + 1}
                        </span>
                      ) : (
                        <div
                          className="w-1 self-stretch rounded-full shrink-0 transition-all duration-300"
                          style={{
                            background: i === slideIndex ? "linear-gradient(180deg, #c41e2a, #a01520)" : "transparent",
                            boxShadow: i === slideIndex ? "0 0 8px rgba(196,30,42,0.3)" : "none",
                          }}
                        />
                      )}

                      {/* Thumbnail */}
                      <div className={`${(isVideo || isAudio) ? "w-[110px] h-[66px]" : "w-[100px] h-[64px]"} shrink-0 rounded-lg overflow-hidden relative group/thumb`}>
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                        />
                        {isVideo && (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                              <Play className="w-5 h-5 text-white" fill="white" />
                            </div>
                            {item.duration && (
                              <div
                                className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-white"
                                style={{
                                  background: "rgba(0,0,0,0.75)",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "10px",
                                  fontWeight: 600,
                                }}
                              >
                                {item.duration}
                              </div>
                            )}
                          </>
                        )}
                        {isAudio && (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                              <Headphones className="w-4 h-4 text-white" />
                            </div>
                            {item.duration && (
                              <div
                                className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-white"
                                style={{
                                  background: "rgba(88,28,135,0.85)",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "10px",
                                  fontWeight: 600,
                                }}
                              >
                                {item.duration}
                              </div>
                            )}
                          </>
                        )}
                        {!isVideo && !isAudio && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="w-4 h-4 text-white" />
                          </div>
                        )}
                        {item.photoCount && (
                          <div
                            className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-white"
                            style={{
                              background: "rgba(0,0,0,0.7)",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "9px",
                              fontWeight: 600,
                            }}
                          >
                            {item.photoCount} ảnh
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4
                          className="line-clamp-2 transition-colors duration-300"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: "18px",
                            color: (isVideo || isAudio)
                              ? (i === slideIndex ? "white" : "rgba(255,255,255,0.8)")
                              : (i === slideIndex ? "#c41e2a" : "#3d2b1f"),
                          }}
                        >
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span
                            className={isAudio ? "text-[#a78bfa]/80" : isVideo ? "text-[#c41e2a]/70" : "text-[#c41e2a]/60"}
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
                          >
                            {item.category}
                          </span>
                          <span className={(isVideo || isAudio) ? "text-white/20" : "text-[#8b5a2b]/20"}>•</span>
                          <span
                            className={(isVideo || isAudio) ? "text-white/35" : "text-[#8b5a2b]/40"}
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
                          >
                            {item.views}
                          </span>
                          {item.readTime && (
                            <>
                              <span className="text-[#8b5a2b]/20">•</span>
                              <span
                                className="text-[#8b5a2b]/40 flex items-center gap-0.5"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
                              >
                                <Clock className="w-3 h-3" />
                                {item.readTime}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom content - unique layout per tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {isVideo && <VideoGrid items={items} onSelect={handleSelectVideo} onNavigate={(id) => navigate(`/video/${id}`)} />}
            {isAudio && <AudioPlaylist items={items} onSelect={handleSelectVideo} />}
            {activeTab === "photos" && <PhotoMasonry items={items} onNavigate={(id) => navigate(`/gallery/${id}`)} />}
            {activeTab === "infographics" && <InfographicStrip items={items} />}
            {activeTab === "megastory" && <MegastoryEditorial items={items} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ========== LIVE VIDEO CAROUSEL - Center-focused card slider ========== */
function VideoGrid({ items, onSelect, onNavigate }: { items: MediaItem[]; onSelect: (i: number) => void; onNavigate: (id: number) => void }) {
  const [centerIdx, setCenterIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [playProgress, setPlayProgress] = useState<Record<number, number>>({});
  const progressTimers = React.useRef<Record<number, number>>({});
  const total = items.length;

  const goNext = useCallback(() => setCenterIdx((p) => (p + 1) % total), [total]);
  const goPrev = useCallback(() => setCenterIdx((p) => (p - 1 + total) % total), [total]);

  // Auto-advance every 6s
  useEffect(() => {
    if (hoveredIdx !== null) return;
    const t = window.setInterval(goNext, 6000);
    return () => window.clearInterval(t);
  }, [goNext, hoveredIdx]);

  // Simulate playback progress on hover
  const startPlay = useCallback((idx: number) => {
    setHoveredIdx(idx);
    setPlayProgress((p) => ({ ...p, [idx]: 0 }));
    progressTimers.current[idx] = window.setInterval(() => {
      setPlayProgress((p) => {
        const val = (p[idx] ?? 0) + 0.25;
        return { ...p, [idx]: val >= 100 ? 100 : val };
      });
    }, 50);
  }, []);

  const stopPlay = useCallback((idx: number) => {
    setHoveredIdx(null);
    if (progressTimers.current[idx]) {
      window.clearInterval(progressTimers.current[idx]);
      delete progressTimers.current[idx];
    }
    setPlayProgress((p) => ({ ...p, [idx]: 0 }));
  }, []);

  // Build visible cards: show 5 (center +/- 2)
  const getVisible = () => {
    const arr = [];
    for (let off = -2; off <= 2; off++) {
      const idx = (centerIdx + off + total) % total;
      arr.push({ item: items[idx], offset: off, idx });
    }
    return arr;
  };
  const visible = getVisible();

  return (
    <div className="relative">
      {/* Carousel area */}
      <div className="relative overflow-hidden" style={{ height: 380 }}>
        <div className="flex items-center justify-center h-full relative">
          <AnimatePresence mode="popLayout">
            {visible.map(({ item, offset, idx }) => {
              const isCenter = offset === 0;
              const isAdj = Math.abs(offset) === 1;
              const isEdge = Math.abs(offset) === 2;
              const isAutoPlaying = hoveredIdx === idx;

              const w = isCenter ? 440 : isAdj ? 260 : 180;
              const h = isCenter ? 280 : isAdj ? 210 : 160;
              const xOff = isCenter ? 0 : isAdj ? offset * 340 : offset * 490;
              const z = isCenter ? 20 : isAdj ? 10 : 1;
              const op = isCenter ? 1 : isAdj ? 0.75 : 0.4;

              return (
                <motion.div
                  key={`vc-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: op,
                    x: xOff,
                    zIndex: z,
                    scale: isCenter ? 1 : isAdj ? 0.92 : 0.82,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={isCenter ? {
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  } : isAdj ? {
                    scale: 0.97,
                    opacity: 0.9,
                    transition: { duration: 0.3 },
                  } : {}}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute cursor-pointer"
                  style={{ width: w }}
                  onClick={() => {
                    if (isCenter) { onSelect(idx); onNavigate(item.id); }
                    else setCenterIdx(idx);
                  }}
                  onMouseEnter={() => (isCenter || isAdj) && startPlay(idx)}
                  onMouseLeave={() => stopPlay(idx)}
                >
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{
                      height: h,
                      boxShadow: isCenter
                        ? "0 24px 60px -12px rgba(196,30,42,0.35), 0 12px 28px -6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)"
                        : isAdj
                        ? "0 12px 32px -8px rgba(0,0,0,0.2), 0 4px 14px -4px rgba(0,0,0,0.1)"
                        : "0 4px 14px -6px rgba(0,0,0,0.15)",
                      border: isCenter
                        ? "2px solid rgba(196,30,42,0.25)"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        transform: isAutoPlaying ? "scale(1.08)" : "scale(1)",
                        filter: isEdge ? "brightness(0.6)" : "none",
                      }}
                    />

                    {/* Cinematic overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: isCenter
                          ? "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.05) 65%, rgba(0,0,0,0.08) 100%)"
                          : "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)",
                      }}
                    />

                    {/* Animated scan line when auto-playing */}
                    {isAutoPlaying && (
                      <motion.div
                        className="absolute left-0 right-0 h-[2px] pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(196,30,42,0.5) 30%, rgba(255,255,255,0.3) 50%, rgba(196,30,42,0.5) 70%, transparent 100%)" }}
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                      />
                    )}

                    {/* LIVE badge (center card) */}
                    {isCenter && (
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span
                          className="px-2.5 py-1 rounded-md text-white flex items-center gap-1.5"
                          style={{
                            background: "#c41e2a",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.6px",
                          }}
                        >
                          <span
                            className="w-[6px] h-[6px] rounded-full bg-white"
                            style={{
                              animation: "livePulse 1.5s ease-in-out infinite",
                              boxShadow: "0 0 6px rgba(255,255,255,0.6)",
                            }}
                          />
                          LIVE
                        </span>
                        <span
                          className="px-2.5 py-1 rounded-md text-white/90"
                          style={{
                            background: "rgba(0,0,0,0.5)",
                            backdropFilter: "blur(6px)",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            fontWeight: 500,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Category (adj cards) */}
                    {isAdj && (
                      <div
                        className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-white"
                        style={{
                          background: "rgba(196,30,42,0.8)",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {item.category}
                      </div>
                    )}

                    {/* Duration badge */}
                    {item.duration && !isEdge && (
                      <div
                        className="absolute top-3 right-3 px-2 py-1 rounded-md text-white/90 flex items-center gap-1"
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          backdropFilter: "blur(4px)",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isCenter ? "11px" : "9px",
                          fontWeight: 600,
                        }}
                      >
                        <Film className="w-3 h-3" />
                        {item.duration}
                      </div>
                    )}

                    {/* Play / Equalizer indicator */}
                    {(isCenter || isAdj) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="rounded-full flex items-center justify-center"
                          style={{
                            width: isCenter ? 56 : 38,
                            height: isCenter ? 56 : 38,
                            background: isAutoPlaying
                              ? "rgba(196,30,42,0.95)"
                              : "rgba(255,255,255,0.15)",
                            backdropFilter: isAutoPlaying ? "none" : "blur(8px)",
                            boxShadow: isAutoPlaying
                              ? "0 0 30px rgba(196,30,42,0.5), 0 0 60px rgba(196,30,42,0.2)"
                              : "0 2px 10px rgba(0,0,0,0.2)",
                            border: isAutoPlaying ? "none" : "1px solid rgba(255,255,255,0.2)",
                          }}
                          animate={isAutoPlaying ? { scale: [1, 1.08, 1] } : {}}
                          transition={isAutoPlaying ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                        >
                          {isAutoPlaying ? (
                            <motion.div
                              className="flex items-center gap-[3px]"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {[0, 1, 2, 3].map((bar) => (
                                <motion.div
                                  key={bar}
                                  className="rounded-full"
                                  style={{ width: isCenter ? 3 : 2, background: "white" }}
                                  animate={{ height: [isCenter ? 8 : 5, isCenter ? 18 : 12, isCenter ? 8 : 5] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: bar * 0.12, ease: "easeInOut" }}
                                />
                              ))}
                            </motion.div>
                          ) : (
                            <Play
                              className="text-white"
                              style={{ width: isCenter ? 22 : 14, height: isCenter ? 22 : 14, marginLeft: isCenter ? 3 : 2 }}
                              fill="white"
                            />
                          )}
                        </motion.div>
                      </div>
                    )}

                    {/* Bottom info bar */}
                    {(isCenter || isAdj) && (
                      <div className="absolute bottom-0 left-0 right-0 p-3" style={{ paddingTop: isCenter ? 16 : 10 }}>
                        {/* Playback progress bar (on hover) */}
                        {isAutoPlaying && (
                          <div className="relative h-[2px] bg-white/15 rounded-full mb-2.5 overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full rounded-full"
                              style={{
                                width: `${playProgress[idx] ?? 0}%`,
                                background: "linear-gradient(90deg, #c41e2a 0%, #ff4757 100%)",
                                boxShadow: "0 0 8px rgba(196,30,42,0.6)",
                                transition: "width 0.05s linear",
                              }}
                            />
                          </div>
                        )}
                        <h4
                          className="text-white line-clamp-2"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: isCenter ? "17px" : "12.5px",
                            fontWeight: 700,
                            lineHeight: isCenter ? "23px" : "17px",
                            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                          }}
                        >
                          {item.title}
                        </h4>
                        {isCenter && (
                          <div className="flex items-center gap-2.5 mt-2">
                            <span className="text-white/50 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                              <Eye className="w-3 h-3" /> {item.views}
                            </span>
                            <span className="text-white/25">&bull;</span>
                            <span className="text-white/50" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                              {item.date}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform"
          style={{ background: "rgba(196,30,42,0.85)", boxShadow: "0 4px 16px rgba(196,30,42,0.35)", zIndex: 30, border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform"
          style={{ background: "rgba(196,30,42,0.85)", boxShadow: "0 4px 16px rgba(196,30,42,0.35)", zIndex: 30, border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators with progress */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {items.map((_, i) => {
          const isActive = i === centerIdx;
          return (
            <button
              key={i}
              onClick={() => setCenterIdx(i)}
              className="relative cursor-pointer transition-all duration-300"
              style={{
                width: isActive ? 28 : 8,
                height: 8,
                background: isActive ? "transparent" : "rgba(196,30,42,0.2)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {isActive && (
                <>
                  <div className="absolute inset-0 rounded-full" style={{ background: "rgba(196,30,42,0.2)" }} />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(90deg, #c41e2a, #e74c3c)", transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`dot-${centerIdx}`}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Pulse keyframes */}
      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </div>
  );
}

/* ========== AUDIO PLAYLIST - Podcast/Radio style card list ========== */
function AudioPlaylist({ items, onSelect }: { items: MediaItem[]; onSelect: (i: number) => void }) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const togglePlay = (idx: number) => {
    setPlayingIdx(playingIdx === idx ? null : idx);
  };

  // Hero card (first item) + list (rest)
  const hero = items[0];
  const rest = items.slice(1);

  return (
    <div className="flex flex-col gap-5">
      {/* Hero audio card */}
      {hero && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden cursor-pointer group/hero"
          style={{
            background: "linear-gradient(135deg, #1a0f20 0%, #0f0a14 40%, #1a1025 100%)",
            boxShadow: "0 16px 48px -12px rgba(88,28,135,0.3), 0 6px 20px -6px rgba(0,0,0,0.2)",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
          onClick={() => onSelect(0)}
          onMouseEnter={() => setHoveredIdx(-1)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <div className="flex items-stretch" style={{ minHeight: 180 }}>
            {/* Album art */}
            <div className="relative w-[240px] shrink-0 overflow-hidden">
              <img
                src={hero.thumbnail}
                alt={hero.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent 60%, #1a0f20 100%)" }}
              />
              {/* Vinyl disc overlay */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-[40px]">
                <motion.div
                  animate={playingIdx === 0 ? { rotate: 360 } : {}}
                  transition={playingIdx === 0 ? { duration: 6, repeat: Infinity, ease: "linear" } : {}}
                  className="w-[100px] h-[100px] rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(88,28,135,0.5), rgba(139,92,246,0.3), rgba(88,28,135,0.5))",
                    boxShadow: "0 0 20px rgba(139,92,246,0.2), inset 0 0 15px rgba(0,0,0,0.5)",
                    border: "2px solid rgba(139,92,246,0.2)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full" style={{ background: "#1a0f20", border: "1px solid rgba(139,92,246,0.3)" }} />
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 p-6 flex flex-col justify-center relative">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-2.5 py-1 rounded-md text-white flex items-center gap-1.5"
                  style={{
                    background: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  <Radio className="w-3 h-3" />
                  {hero.category}
                </span>
                <span
                  className="px-2 py-1 rounded-md text-[#a78bfa]"
                  style={{
                    background: "rgba(139,92,246,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  {hero.duration}
                </span>
              </div>
              <h3
                className="text-white line-clamp-2 group-hover/hero:text-[#c4b5fd] transition-colors"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "28px",
                }}
              >
                {hero.title}
              </h3>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-white/40 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                  <Eye className="w-3 h-3" /> {hero.views} lượt nghe
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="text-white/40" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                  {hero.date}
                </span>
              </div>

              {/* Waveform bar decoration */}
              <div className="flex items-end gap-[2px] mt-4" style={{ height: 20 }}>
                {Array.from({ length: 40 }).map((_, i) => {
                  const h = 3 + Math.sin(i * 0.5) * 8 + Math.random() * 6;
                  return (
                    <motion.div
                      key={i}
                      className="rounded-sm"
                      style={{
                        width: 2.5,
                        height: h,
                        background: i < 16
                          ? "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)"
                          : "rgba(139,92,246,0.2)",
                      }}
                      animate={playingIdx === 0 ? {
                        height: [h, h * 0.3 + Math.random() * 12, h],
                      } : {}}
                      transition={playingIdx === 0 ? {
                        duration: 0.5 + Math.random() * 0.3,
                        repeat: Infinity,
                        delay: i * 0.02,
                        ease: "easeInOut",
                      } : {}}
                    />
                  );
                })}
              </div>

              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #c41e2a 100%)",
                  boxShadow: "0 0 24px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
                onClick={(e) => { e.stopPropagation(); togglePlay(0); }}
              >
                {playingIdx === 0 ? (
                  <Pause className="w-6 h-6 text-white" fill="white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of remaining audio cards */}
      <div className="grid grid-cols-2 gap-4">
        {rest.slice(0, 4).map((audio, i) => {
          const realIdx = i + 1;
          const isCurrentlyPlaying = playingIdx === realIdx;
          const isHovered = hoveredIdx === realIdx;

          return (
            <motion.div
              key={audio.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="flex items-stretch rounded-xl overflow-hidden cursor-pointer group/audio"
              style={{
                background: isCurrentlyPlaying
                  ? "linear-gradient(135deg, rgba(88,28,135,0.08) 0%, rgba(139,92,246,0.04) 100%)"
                  : "#fff",
                boxShadow: isCurrentlyPlaying
                  ? "0 8px 24px -6px rgba(88,28,135,0.2), 0 4px 12px -4px rgba(0,0,0,0.08)"
                  : "0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)",
                border: isCurrentlyPlaying
                  ? "1px solid rgba(139,92,246,0.2)"
                  : "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                minHeight: 96,
              }}
              onClick={() => onSelect(realIdx)}
              onMouseEnter={() => setHoveredIdx(realIdx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Thumbnail */}
              <div className="relative w-[96px] shrink-0 overflow-hidden">
                <img
                  src={audio.thumbnail}
                  alt={audio.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/audio:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.3) 0%, rgba(0,0,0,0.2) 100%)" }}
                />
                {/* Play/Pause mini button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: isCurrentlyPlaying
                        ? "rgba(139,92,246,0.9)"
                        : "rgba(255,255,255,0.2)",
                      backdropFilter: isCurrentlyPlaying ? "none" : "blur(4px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      opacity: (isCurrentlyPlaying || isHovered) ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    animate={isCurrentlyPlaying ? { scale: [1, 1.06, 1] } : {}}
                    transition={isCurrentlyPlaying ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                    onClick={(e) => { e.stopPropagation(); togglePlay(realIdx); }}
                  >
                    {isCurrentlyPlaying ? (
                      <div className="flex items-center gap-[2px]">
                        {[0, 1, 2].map((bar) => (
                          <motion.div
                            key={bar}
                            className="w-[2px] rounded-full bg-white"
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: bar * 0.1, ease: "easeInOut" }}
                          />
                        ))}
                      </div>
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                    )}
                  </motion.div>
                </div>
                {/* Duration */}
                {audio.duration && (
                  <div
                    className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded text-white"
                    style={{
                      background: "rgba(88,28,135,0.85)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                    }}
                  >
                    {audio.duration}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 p-3.5 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className="px-1.5 py-0.5 rounded text-[#7c3aed]"
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                    }}
                  >
                    {audio.category}
                  </span>
                </div>
                <h4
                  className="line-clamp-2 group-hover/audio:text-[#7c3aed] transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: isCurrentlyPlaying ? "#581c87" : "#1a1a1a",
                  }}
                >
                  {audio.title}
                </h4>
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <span className="text-[#999] flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
                    <Headphones className="w-3 h-3" /> {audio.views}
                  </span>
                  <span className="text-[#ddd]">&bull;</span>
                  <span className="text-[#999]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
                    {audio.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ========== PHOTO MASONRY - Staggered grid gallery ========== */
function PhotoMasonry({ items, onNavigate }: { items: MediaItem[]; onNavigate: (id: number) => void }) {
  // Create a masonry-like layout: col1 (tall, short), col2 (short, tall), col3 (medium, medium)
  const heights = [
    [280, 200], // col 1
    [200, 280], // col 2
    [240, 240], // col 3
  ];
  const cols = [
    [items[0], items[3]],
    [items[1], items[4]],
    [items[2], items[5]],
  ];

  return (
    <div className="flex gap-4">
      {cols.map((colItems, colIdx) => (
        <div key={colIdx} className="flex-1 flex flex-col gap-4">
          {colItems.filter(Boolean).map((item, rowIdx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (colIdx * 2 + rowIdx) * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group/photo"
              style={{
                height: heights[colIdx][rowIdx],
                boxShadow: "0 4px 16px -4px rgba(0,0,0,0.1), 0 2px 6px -2px rgba(0,0,0,0.05)",
                border: "1px solid rgba(224,201,176,0.2)",
                transition: "box-shadow 0.4s ease",
              }}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 50px -10px rgba(196,30,42,0.18), 0 8px 20px -4px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 16px -4px rgba(0,0,0,0.1), 0 2px 6px -2px rgba(0,0,0,0.05)";
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-110"
              />
              {/* Dark gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-400"
              />
              {/* Always-visible category + photo count */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span
                  className="px-2.5 py-1 rounded-md text-white"
                  style={{
                    background: "rgba(196,30,42,0.85)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.category}
                </span>
                {item.photoCount && (
                  <span
                    className="px-2 py-1 rounded-md text-white/90 flex items-center gap-1"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(6px)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  >
                    <Camera className="w-3 h-3" />
                    {item.photoCount}
                  </span>
                )}
              </div>
              {/* Zoom icon center on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Title overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover/photo:translate-y-0 transition-transform duration-400">
                <h4
                  className="text-white line-clamp-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                  }}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-white/60" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                    {item.date}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/60" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                    {item.views}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ========== INFOGRAPHIC STRIP - Horizontal scroll portrait cards ========== */
function InfographicStrip({ items }: { items: MediaItem[] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-3"
        style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="shrink-0 cursor-pointer group/info rounded-2xl overflow-hidden"
            style={{
              width: 220,
              scrollSnapAlign: "start",
              boxShadow: "0 8px 24px -6px rgba(0,0,0,0.12), 0 4px 10px -4px rgba(0,0,0,0.06)",
              border: "1px solid rgba(224,201,176,0.25)",
              background: "linear-gradient(180deg, #fffcf4 0%, #faf5ef 100%)",
              transition: "box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 24px 56px -12px rgba(196,30,42,0.2), 0 10px 24px -6px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px -6px rgba(0,0,0,0.12), 0 4px 10px -4px rgba(0,0,0,0.06)";
            }}
          >
            {/* Tall portrait image */}
            <div className="relative overflow-hidden" style={{ height: 300 }}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover/info:scale-108"
                style={{ transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)" }}
              />
              {/* Category tag */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-white"
                style={{
                  background: "linear-gradient(135deg, #c41e2a 0%, #a01520 100%)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                }}
              >
                INFOGRAPHIC
              </div>
              {/* Magnify icon */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover/info:opacity-100 transition-opacity duration-300">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="p-4">
              <h4
                className="text-[#1a1a1a] line-clamp-3 group-hover/info:text-[#c41e2a] transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  lineHeight: "19px",
                }}
              >
                {item.title}
              </h4>
              <div className="flex items-center gap-2 mt-2.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#c41e2a]/50" />
                <span className="text-[#8b5a2b]/50" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                  {item.category}
                </span>
                <span className="text-[#8b5a2b]/20">•</span>
                <span className="text-[#8b5a2b]/40" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                  {item.views}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Navigation arrows */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ background: "rgba(163,0,0,0.85)", boxShadow: "0 4px 14px rgba(163,0,0,0.35)", zIndex: 10 }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ background: "rgba(163,0,0,0.85)", boxShadow: "0 4px 14px rgba(163,0,0,0.35)", zIndex: 10 }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ========== MEGASTORY EDITORIAL - Magazine layout ========== */
function MegastoryEditorial({ items }: { items: MediaItem[] }) {
  const hero = items[0];
  const secondary = items.slice(1, 3);
  const bottomRow = items.slice(3, 7);

  return (
    <div className="flex flex-col gap-5">
      {/* Top: Hero (2/3) + 2 stacked cards (1/3) */}
      <div className="flex gap-5" style={{ height: 340 }}>
        {/* Hero story */}
        {hero && (
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.008 }}
            className="w-2/3 relative rounded-2xl overflow-hidden cursor-pointer group/hero"
            style={{
              boxShadow: "0 16px 40px -8px rgba(196,30,42,0.18), 0 6px 16px -4px rgba(0,0,0,0.1)",
              border: "1px solid rgba(196,30,42,0.1)",
            }}
            onClick={(e) => e.preventDefault()}
          >
            <img src={hero.thumbnail} alt={hero.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.1) 100%)" }} />
            {/* Megastory badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className="px-3 py-1.5 rounded-md text-white flex items-center gap-1.5"
                style={{
                  background: "linear-gradient(135deg, #c41e2a 0%, #8b1a1a 100%)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                MEGASTORY
              </span>
              {hero.readTime && (
                <span
                  className="px-3 py-1.5 rounded-md text-white/90 flex items-center gap-1"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
                >
                  <Clock className="w-3 h-3" />
                  {hero.readTime}
                </span>
              )}
            </div>
            {/* Hero content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className="text-white line-clamp-2 group-hover/hero:text-[#ffd700] transition-colors duration-400"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, lineHeight: "34px" }}
              >
                {hero.title}
              </h3>
              {hero.excerpt && (
                <p
                  className="text-white/55 line-clamp-2 mt-2.5"
                  style={{ fontFamily: "'Lora', serif", fontSize: "14px", lineHeight: "22px" }}
                >
                  {hero.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-white/50 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}>
                  <Calendar className="w-3.5 h-3.5" /> {hero.date}
                </span>
                <span className="text-white/25">•</span>
                <span className="text-white/50 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}>
                  <Eye className="w-3.5 h-3.5" /> {hero.views}
                </span>
              </div>
            </div>
          </motion.a>
        )}

        {/* 2 stacked editorial cards */}
        <div className="w-1/3 flex flex-col gap-4">
          {secondary.map((item, i) => (
            <motion.a
              key={item.id}
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              whileHover={{ x: -4 }}
              className="flex-1 relative rounded-xl overflow-hidden cursor-pointer group/sec"
              style={{
                boxShadow: "0 6px 20px -6px rgba(0,0,0,0.1), 0 3px 8px -3px rgba(0,0,0,0.05)",
                border: "1px solid rgba(224,201,176,0.25)",
              }}
              onClick={(e) => e.preventDefault()}
            >
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-600 group-hover/sec:scale-110" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
              {/* Category */}
              <div
                className="absolute top-3 left-3 px-2 py-1 rounded text-white"
                style={{ background: "rgba(196,30,42,0.85)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4px" }}
              >
                {item.category}
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4
                  className="text-white line-clamp-2 group-hover/sec:text-[#ffd700] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, lineHeight: "20px" }}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-white/50" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>{item.date}</span>
                  {item.readTime && (
                    <>
                      <span className="text-white/25">•</span>
                      <span className="text-white/50 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
                        <Clock className="w-3 h-3" /> {item.readTime}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom: 4 horizontal editorial cards */}
      <div className="grid grid-cols-4 gap-4">
        {bottomRow.filter(Boolean).map((item, i) => (
          <motion.a
            key={item.id}
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer group/bot"
            style={{
              background: "linear-gradient(180deg, #fffcf4 0%, #faf5ef 100%)",
              boxShadow: "0 4px 14px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)",
              border: "1px solid rgba(224,201,176,0.2)",
              transition: "box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(196,30,42,0.14), 0 6px 14px -4px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)";
            }}
            onClick={(e) => e.preventDefault()}
          >
            <div className="relative overflow-hidden" style={{ height: 130 }}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/bot:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover/bot:opacity-100 transition-opacity" style={{ background: "linear-gradient(0deg, rgba(196,30,42,0.15) 0%, transparent 60%)" }} />
              {item.readTime && (
                <div
                  className="absolute top-2 right-2 px-2 py-0.5 rounded text-white/90 flex items-center gap-1"
                  style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500 }}
                >
                  <Clock className="w-2.5 h-2.5" /> {item.readTime}
                </div>
              )}
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <span
                className="text-[#c41e2a]/70"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3px" }}
              >
                {item.category}
              </span>
              <h4
                className="text-[#1a1a1a] line-clamp-2 mt-1 group-hover/bot:text-[#c41e2a] transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "13.5px", fontWeight: 700, lineHeight: "18px" }}
              >
                {item.title}
              </h4>
              <div className="flex items-center gap-2 mt-auto pt-2">
                <span className="text-[#999]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>{item.date}</span>
                <span className="text-[#ddd]">•</span>
                <span className="text-[#999]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>{item.views}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}