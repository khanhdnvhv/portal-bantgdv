// ── Mock data for multimedia (videos, audios, galleries) ──────────────────────────────

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: number;
  category: string;
  videoUrl: string; // Mock URL
  tags: string[];
  relatedVideos: { id: string; title: string; thumbnail: string }[];
}

export interface Audio {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  plays: number;
  category: string;
  audioUrl: string; // Mock URL
  tags: string[];
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  date: string;
  views: number;
  category: string;
  coverImage: string;
  images: { id: string; url: string; caption: string }[];
  tags: string[];
}

// ── Video Data ──────────────────────────────
export const videosData: Record<string, Video> = {
  "v1": {
    id: "v1",
    title: "Toàn cảnh Lễ khai mạc Hội nghị Trung ương 15 khóa XIII",
    description: "Cảnh khai mạc trang trọng của Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII với sự tham dự đầy đủ của các đồng chí Ủy viên Trung ương.",
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=450&fit=crop",
    duration: "12:34",
    date: "16/03/2026",
    views: 15234,
    category: "Sự kiện",
    videoUrl: "https://example.com/video/v1.mp4",
    tags: ["Hội nghị", "Trung ương", "Đảng"],
    relatedVideos: [
      { id: "v2", title: "Phát biểu khai mạc của Tổng Bí thư", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=225&fit=crop" },
      { id: "v3", title: "Thảo luận tại Hội nghị Trung ương", thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop" },
    ],
  },
  "v2": {
    id: "v2",
    title: "Phát biểu khai mạc của Tổng Bí thư tại Hội nghị Trung ương",
    description: "Tổng Bí thư nhấn mạnh tầm quan trọng của việc tiếp tục đổi mới, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop",
    duration: "24:15",
    date: "16/03/2026",
    views: 18765,
    category: "Phát biểu",
    videoUrl: "https://example.com/video/v2.mp4",
    tags: ["Tổng Bí thư", "Phát biểu", "Hội nghị"],
    relatedVideos: [
      { id: "v1", title: "Toàn cảnh Lễ khai mạc Hội nghị Trung ương 15", thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=225&fit=crop" },
      { id: "v4", title: "Chủ tịch nước tiếp đoàn đại biểu người có công", thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=225&fit=crop" },
    ],
  },
  "v3": {
    id: "v3",
    title: "Thảo luận tại Hội nghị Trung ương về công tác xây dựng Đảng",
    description: "Các đồng chí Ủy viên Trung ương thảo luận sôi nổi về những vấn đề quan trọng liên quan đến công tác xây dựng Đảng.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    duration: "18:47",
    date: "16/03/2026",
    views: 9876,
    category: "Sự kiện",
    videoUrl: "https://example.com/video/v3.mp4",
    tags: ["Hội nghị", "Xây dựng Đảng", "Thảo luận"],
    relatedVideos: [
      { id: "v1", title: "Toàn cảnh Lễ khai mạc", thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=225&fit=crop" },
      { id: "v2", title: "Phát biểu khai mạc của Tổng Bí thư", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=225&fit=crop" },
    ],
  },
  "v4": {
    id: "v4",
    title: "Chủ tịch nước tiếp đoàn đại biểu người có công với cách mạng",
    description: "Chủ tịch nước Lương Cường tiếp và gặp mặt đoàn đại biểu người có công với cách mạng tiêu biểu toàn quốc tại Phủ Chủ tịch.",
    thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=450&fit=crop",
    duration: "15:23",
    date: "12/03/2026",
    views: 12456,
    category: "Sự kiện",
    videoUrl: "https://example.com/video/v4.mp4",
    tags: ["Chủ tịch nước", "Người có công", "Gặp mặt"],
    relatedVideos: [
      { id: "v2", title: "Phát biểu khai mạc của Tổng Bí thư", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=225&fit=crop" },
      { id: "v5", title: "Lễ khánh thành cầu Mỹ Thuận 2", thumbnail: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=400&h=225&fit=crop" },
    ],
  },
  "v5": {
    id: "v5",
    title: "Lễ khánh thành và thông xe cầu Mỹ Thuận 2",
    description: "Thủ tướng Chính phủ Phạm Minh Chính dự lễ khánh thành cầu Mỹ Thuận 2, công trình hạ tầng giao thông trọng điểm quốc gia.",
    thumbnail: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=800&h=450&fit=crop",
    duration: "21:12",
    date: "12/03/2026",
    views: 23789,
    category: "Sự kiện",
    videoUrl: "https://example.com/video/v5.mp4",
    tags: ["Thủ tướng", "Hạ tầng", "Khánh thành"],
    relatedVideos: [
      { id: "v4", title: "Chủ tịch nước tiếp đoàn đại biểu", thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=225&fit=crop" },
      { id: "v6", title: "Khai trương Trung tâm AI quốc gia", thumbnail: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=400&h=225&fit=crop" },
    ],
  },
  "v6": {
    id: "v6",
    title: "Lễ khai trương Trung tâm Trí tuệ nhân tạo quốc gia",
    description: "Trung tâm AI quốc gia chính thức đi vào hoạt động, đánh dấu bước ngoặt trong chiến lược chuyển đổi số quốc gia.",
    thumbnail: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=800&h=450&fit=crop",
    duration: "16:45",
    date: "11/03/2026",
    views: 19234,
    category: "Sự kiện",
    videoUrl: "https://example.com/video/v6.mp4",
    tags: ["AI", "Công nghệ", "Khai trương"],
    relatedVideos: [
      { id: "v5", title: "Lễ khánh thành cầu Mỹ Thuận 2", thumbnail: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=400&h=225&fit=crop" },
      { id: "v7", title: "Hội thảo Chuyển đổi số quốc gia", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop" },
    ],
  },
  "v7": {
    id: "v7",
    title: "Hội thảo quốc gia về Chuyển đổi số và Phát triển kinh tế số",
    description: "Các chuyên gia, nhà khoa học, doanh nghiệp thảo luận về cơ hội và thách thức trong quá trình chuyển đổi số.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    duration: "45:30",
    date: "10/03/2026",
    views: 8765,
    category: "Hội thảo",
    videoUrl: "https://example.com/video/v7.mp4",
    tags: ["Chuyển đổi số", "Kinh tế số", "Hội thảo"],
    relatedVideos: [
      { id: "v6", title: "Khai trương Trung tâm AI quốc gia", thumbnail: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=400&h=225&fit=crop" },
      { id: "v1", title: "Toàn cảnh Lễ khai mạc Hội nghị Trung ương", thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=225&fit=crop" },
    ],
  },
  "v8": {
    id: "v8",
    title: "Chuyên đề: 50 năm giải phóng miền Nam thống nhất đất nước",
    description: "Chương trình đặc biệt kỷ niệm 50 năm Ngày giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2025).",
    thumbnail: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=800&h=450&fit=crop",
    duration: "52:18",
    date: "30/04/2025",
    views: 45678,
    category: "Chuyên đề",
    videoUrl: "https://example.com/video/v8.mp4",
    tags: ["30/4", "Giải phóng", "Lịch sử"],
    relatedVideos: [
      { id: "v2", title: "Phát biểu khai mạc của Tổng Bí thư", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=225&fit=crop" },
    ],
  },
};

// ── Audio Data ──────────────────────────────
export const audiosData: Record<string, Audio> = {
  "a1": {
    id: "a1",
    title: "Bài phát biểu của Tổng Bí thư tại Hội nghị Trung ương 15",
    description: "Nội dung phát biểu quan trọng của Tổng Bí thư về định hướng phát triển đất nước trong giai đoạn mới.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop",
    duration: "24:15",
    date: "16/03/2026",
    plays: 8765,
    category: "Phát biểu",
    audioUrl: "https://example.com/audio/a1.mp3",
    tags: ["Tổng Bí thư", "Hội nghị", "Phát biểu"],
  },
  "a2": {
    id: "a2",
    title: "Chương trình Thời sự Tuyên giáo - Số 12/2026",
    description: "Tổng hợp các tin tức, sự kiện nổi bật trong tuần về công tác tuyên giáo và dân vận.",
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=450&fit=crop",
    duration: "30:00",
    date: "15/03/2026",
    plays: 5432,
    category: "Podcast",
    audioUrl: "https://example.com/audio/a2.mp3",
    tags: ["Thời sự", "Tuyên giáo", "Podcast"],
  },
  "a3": {
    id: "a3",
    title: "Bình luận: Nghị quyết 57 và sự phát triển bền vững",
    description: "Phân tích chuyên sâu về Nghị quyết 57-NQ/TW và vai trò của nó trong phát triển bền vững.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    duration: "18:30",
    date: "14/03/2026",
    plays: 4321,
    category: "Bình luận",
    audioUrl: "https://example.com/audio/a3.mp3",
    tags: ["Nghị quyết 57", "Phân tích", "Bình luận"],
  },
  "a4": {
    id: "a4",
    title: "Trò chuyện với chuyên gia về chuyển đổi số",
    description: "Cuộc trò chuyện với GS.TS Nguyễn Văn A về chiến lược chuyển đổi số quốc gia.",
    thumbnail: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=800&h=450&fit=crop",
    duration: "42:20",
    date: "13/03/2026",
    plays: 6789,
    category: "Phỏng vấn",
    audioUrl: "https://example.com/audio/a4.mp3",
    tags: ["Chuyển đổi số", "Phỏng vấn", "Chuyên gia"],
  },
  "a5": {
    id: "a5",
    title: "Tìm hiểu Nghị quyết Đại hội XIII của Đảng",
    description: "Chuỗi bài giảng về nội dung và ý nghĩa của Nghị quyết Đại hội XIII - Phần 5: Phát triển kinh tế - xã hội.",
    thumbnail: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=800&h=450&fit=crop",
    duration: "35:45",
    date: "12/03/2026",
    plays: 3456,
    category: "Giảng bài",
    audioUrl: "https://example.com/audio/a5.mp3",
    tags: ["Đại hội XIII", "Giảng bài", "Kinh tế"],
  },
};

// ── Gallery Data ──────────────────────────────
export const galleriesData: Record<string, Gallery> = {
  "g1": {
    id: "g1",
    title: "Hình ảnh Hội nghị Trung ương 15 khóa XIII",
    description: "Bộ ảnh ghi lại những khoảnh khắc quan trọng tại Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII.",
    date: "16/03/2026",
    views: 12345,
    category: "Sự kiện",
    coverImage: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=600&fit=crop",
    images: [
      { id: "img1", url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=600&fit=crop", caption: "Toàn cảnh Hội trường Diên Hồng trong lễ khai mạc" },
      { id: "img2", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop", caption: "Tổng Bí thư phát biểu khai mạc Hội nghị" },
      { id: "img3", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", caption: "Các đại biểu thảo luận tại Hội nghị" },
      { id: "img4", url: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=800&h=600&fit=crop", caption: "Chủ tịch đoàn chủ tịch điều hành phiên họp" },
      { id: "img5", url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop", caption: "Đại biểu biểu quyết thông qua Nghị quyết" },
      { id: "img6", url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop", caption: "Bế mạc Hội nghị thành công tốt đẹp" },
    ],
    tags: ["Hội nghị", "Trung ương", "Sự kiện"],
  },
  "g2": {
    id: "g2",
    title: "Chủ tịch nước gặp mặt người có công",
    description: "Những hình ảnh xúc động tại buổi gặp mặt giữa Chủ tịch nước và đoàn đại biểu người có công với cách mạng.",
    date: "12/03/2026",
    views: 8765,
    category: "Sự kiện",
    coverImage: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=600&fit=crop",
    images: [
      { id: "img7", url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop", caption: "Chủ tịch nước Lương Cường tiếp đoàn đại biểu" },
      { id: "img8", url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop", caption: "Chủ tịch nước trao quà cho người có công" },
      { id: "img9", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop", caption: "Gặp gỡ thân mật với các bà mẹ Việt Nam anh hùng" },
      { id: "img10", url: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&h=600&fit=crop", caption: "Chụp ảnh lưu niệm cùng đoàn đại biểu" },
    ],
    tags: ["Chủ tịch nước", "Người có công", "Gặp mặt"],
  },
  "g3": {
    id: "g3",
    title: "Khánh thành cầu Mỹ Thuận 2",
    description: "Hình ảnh lễ khánh thành công trình cầu Mỹ Thuận 2, dự án hạ tầng giao thông trọng điểm quốc gia.",
    date: "12/03/2026",
    views: 15678,
    category: "Hạ tầng",
    coverImage: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=1200&h=600&fit=crop",
    images: [
      { id: "img11", url: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=800&h=600&fit=crop", caption: "Toàn cảnh cầu Mỹ Thuận 2 vươn mình trên sông Tiền" },
      { id: "img12", url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop", caption: "Thủ tướng Phạm Minh Chính phát biểu tại lễ khánh thành" },
      { id: "img13", url: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&h=600&fit=crop", caption: "Cắt băng khánh thành công trình" },
      { id: "img14", url: "https://images.unsplash.com/photo-1556762163-542910c8765d?w=800&h=600&fit=crop", caption: "Đoàn xe chạy thử qua cầu Mỹ Thuận 2" },
      { id: "img15", url: "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=800&h=600&fit=crop", caption: "Người dân vui mừng trước công trình mới" },
    ],
    tags: ["Cầu Mỹ Thuận", "Hạ tầng", "Khánh thành"],
  },
  "g4": {
    id: "g4",
    title: "Trung tâm AI quốc gia đi vào hoạt động",
    description: "Bộ ảnh về Trung tâm Trí tuệ nhân tạo quốc gia - cơ sở nghiên cứu và phát triển AI hiện đại nhất Việt Nam.",
    date: "11/03/2026",
    views: 11234,
    category: "Công nghệ",
    coverImage: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=1200&h=600&fit=crop",
    images: [
      { id: "img16", url: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=800&h=600&fit=crop", caption: "Tòa nhà Trung tâm AI quốc gia" },
      { id: "img17", url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop", caption: "Phòng lab AI với trang thiết bị hiện đại" },
      { id: "img18", url: "https://images.unsplash.com/photo-1743327572772-eca3c63b029e?w=800&h=600&fit=crop", caption: "Chuyên gia làm việc tại Trung tâm" },
      { id: "img19", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", caption: "Hệ thống máy chủ HPC công suất cao" },
      { id: "img20", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop", caption: "Buổi tọa đàm với các chuyên gia AI" },
    ],
    tags: ["AI", "Công nghệ", "Trung tâm"],
  },
  "g5": {
    id: "g5",
    title: "Hoạt động Ban Tuyên giáo tháng 3/2026",
    description: "Tổng hợp hình ảnh các hoạt động của Ban Tuyên giáo và Dân vận trong tháng 3/2026.",
    date: "31/03/2026",
    views: 6543,
    category: "Hoạt động",
    coverImage: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=600&fit=crop",
    images: [
      { id: "img21", url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=600&fit=crop", caption: "Hội nghị triển khai công tác tháng 3" },
      { id: "img22", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop", caption: "Lãnh đạo Ban làm việc với các địa phương" },
      { id: "img23", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", caption: "Tập huấn nghiệp vụ cho cán bộ" },
      { id: "img24", url: "https://images.unsplash.com/photo-1743327572772-eca3c63b029e?w=800&h=600&fit=crop", caption: "Tuyên truyền tại cơ sở" },
      { id: "img25", url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop", caption: "Thăm hỏi người có công" },
      { id: "img26", url: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=800&h=600&fit=crop", caption: "Họp Ban Thường vụ" },
    ],
    tags: ["Ban Tuyên giáo", "Hoạt động", "Tháng 3"],
  },
};

// Helper functions
export function getAllVideos(): Video[] {
  return Object.values(videosData);
}

export function getAllAudios(): Audio[] {
  return Object.values(audiosData);
}

export function getAllGalleries(): Gallery[] {
  return Object.values(galleriesData);
}

export function getVideosByCategory(category: string): Video[] {
  return getAllVideos().filter(video => video.category === category);
}

export function getFeaturedVideos(limit: number = 6): Video[] {
  return getAllVideos()
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}
