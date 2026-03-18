// ── Mock data for articles ──────────────────────────────

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  author: string;
  views: number;
  readTime: string;
  tags: string[];
  thumbnail: string;
  summary?: string;
  content: string;
  relatedArticles: { id: string; title: string; date: string }[];
}

export const articlesData: Record<string, Article> = {
  "1": {
    id: "1",
    title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII",
    category: "Tin tức chính",
    date: "16/03/2026",
    time: "08:30",
    author: "Ban Biên tập",
    views: 1234,
    readTime: "5 phút đọc",
    tags: ["Hội nghị", "Trung ương", "Đảng"],
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=600&fit=crop",
    summary: "Sáng 16/3/2026, tại Hội trường Diên Hồng, Trung tâm Hội nghị Quốc gia, Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII đã chính thức khai mạc.",
    content: `
      <p class="lead">Sáng 16/3/2026, tại Hội trường Diên Hồng, Trung tâm Hội nghị Quốc gia, Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII đã chính thức khai mạc, với sự tham dự của đầy đủ các đồng chí Ủy viên Trung ương Đảng.</p>
      
      <h2>Nội dung chính của Hội nghị</h2>
      <p>Hội nghị tập trung thảo luận và quyết định những vấn đề quan trọng về công tác xây dựng Đảng, phát triển kinh tế - xã hội, đối ngoại và an ninh quốc phòng. Đây là dịp để Ban Chấp hành Trung ương Đảng đánh giá tình hình thực hiện các nhiệm vụ đã đề ra và xác định phương hướng, nhiệm vụ cho giai đoạn tiếp theo.</p>

      <h2>Phát biểu khai mạc</h2>
      <p>Trong bài phát biểu khai mạc, Tổng Bí thư Đảng Cộng sản Việt Nam đã nhấn mạnh tầm quan trọng của việc tiếp tục đổi mới, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, xây dựng Đảng trong sạch, vững mạnh.</p>

      <blockquote>"Trong bối cảnh tình hình thế giới và trong nước có nhiều biến động phức tạp, đòi hỏi Đảng ta phải luôn nâng cao cảnh giác, kiên định đường lối, sáng tạo trong lãnh đạo, chỉ đạo."</blockquote>

      <h2>Chương trình làm việc</h2>
      <p>Theo chương trình, Hội nghị sẽ diễn ra trong 5 ngày với nhiều nội dung quan trọng:</p>
      <ul>
        <li>Đánh giá tình hình thực hiện Nghị quyết Trung ương 4 khóa XIII về xây dựng, chỉnh đốn Đảng</li>
        <li>Xem xét, quyết định các chủ trương, chính sách phát triển kinh tế - xã hội</li>
        <li>Thảo luận về công tác nhân sự cấp cao</li>
        <li>Các vấn đề quan trọng khác về xây dựng Đảng và hệ thống chính trị</li>
      </ul>

      <h2>Ý nghĩa quan trọng</h2>
      <p>Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII có ý nghĩa đặc biệt quan trọng, tạo cơ sở vững chắc cho việc thực hiện thắng lợi các mục tiêu, nhiệm vụ phát triển đất nước trong thời gian tới, góp phần xây dựng đất nước ngày càng giàu mạnh, văn minh, hạnh phúc.</p>
    `,
    relatedArticles: [
      { id: "2", title: "Tổng Bí thư chủ trì họp Bộ Chính trị về công tác cán bộ", date: "15/03/2026" },
      { id: "3", title: "Hội nghị toàn quốc triển khai nhiệm vụ năm 2026", date: "14/03/2026" },
    ],
  },
  "2": {
    id: "2",
    title: "Tổng Bí thư chủ trì họp Bộ Chính trị về công tác cán bộ",
    category: "Công tác Đảng",
    date: "15/03/2026",
    time: "10:15",
    author: "Ban Biên tập",
    views: 987,
    readTime: "4 phút đọc",
    tags: ["Bộ Chính trị", "Cán bộ"],
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
    summary: "Chiều 15/3/2026, tại trụ sở Trung ương Đảng, Tổng Bí thư đã chủ trì phiên họp Bộ Chính trị bàn về công tác cán bộ.",
    content: `
      <p class="lead">Chiều 15/3/2026, tại trụ sở Trung ương Đảng, Tổng Bí thư đã chủ trì phiên họp Bộ Chính trị bàn về công tác cán bộ, một trong những nhiệm vụ then chốt trong công tác xây dựng Đảng.</p>

      <h2>Trọng tâm cuộc họp</h2>
      <p>Cuộc họp tập trung đánh giá tình hình thực hiện công tác cán bộ trong thời gian qua, đặc biệt là việc thực hiện Nghị quyết Trung ương 4 về xây dựng, chỉnh đốn Đảng gắn với thực hiện Chỉ thị 05 của Bộ Chính trị.</p>
      
      <h2>Phương hướng hoạt động</h2>
      <p>Bộ Chính trị nhấn mạnh cần tiếp tục đổi mới mạnh mẽ công tác cán bộ, coi trọng công tác quy hoạch, đào tạo, bồi dưỡng cán bộ, đặc biệt là cán bộ trẻ, cán bộ nữ, cán bộ dân tộc thiểu số.</p>
    `,
    relatedArticles: [
      { id: "1", title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII", date: "16/03/2026" },
      { id: "4", title: "GDP quý I/2026 tăng trưởng 7.8%, cao nhất trong 5 năm qua", date: "13/03/2026" },
    ],
  },
  "3": {
    id: "3",
    title: "Quốc hội thông qua Luật Đất đai sửa đổi, có hiệu lực từ ngày 01/07/2026",
    category: "Pháp luật",
    date: "14/03/2026",
    time: "09:45",
    author: "Nguyễn Minh Tuấn",
    views: 2156,
    readTime: "6 phút đọc",
    tags: ["Quốc hội", "Luật Đất đai", "Pháp luật"],
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
    summary: "Quốc hội đã chính thức thông qua Luật Đất đai (sửa đổi) với 92,5% đại biểu tán thành, tạo hành lang pháp lý mới cho thị trường bất động sản.",
    content: `
      <p class="lead">Với 92,5% đại biểu Quốc hội tán thành, Luật Đất đai (sửa đổi) đã chính thức được thông qua tại kỳ họp thứ 7, Quốc hội khóa XV. Luật có hiệu lực thi hành từ ngày 01/07/2026.</p>

      <h2>Những điểm mới quan trọng</h2>
      <p>Luật Đất đai sửa đổi có nhiều điểm mới quan trọng, trong đó nổi bật là:</p>
      <ul>
        <li>Cơ chế quản lý giá đất minh bạch, sát với thị trường</li>
        <li>Đơn giản hóa thủ tục hành chính liên quan đến đất đai</li>
        <li>Tăng cường quyền của người sử dụng đất</li>
        <li>Quy định rõ ràng về đất nông nghiệp, đất phi nông nghiệp</li>
        <li>Cơ chế bồi thường, hỗ trợ, tái định cư công bằng hơn</li>
      </ul>

      <h2>Tác động đến thị trường</h2>
      <p>Các chuyên gia đánh giá Luật Đất đai sửa đổi sẽ tạo nền tảng pháp lý vững chắc cho thị trường bất động sản phát triển lành mạnh, minh bạch và bền vững. Đặc biệt, cơ chế định giá đất mới sẽ giúp hạn chế tình trạng chênh lệch giữa giá đất Nhà nước và giá thị trường.</p>

      <h2>Lộ trình triển khai</h2>
      <p>Chính phủ đã được giao nhiệm vụ ban hành các nghị định hướng dẫn chi tiết trước ngày 01/06/2026 để đảm bảo Luật có thể triển khai thống nhất trên toàn quốc kể từ ngày có hiệu lực.</p>
    `,
    relatedArticles: [
      { id: "5", title: "Việt Nam - Nhật Bản nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện", date: "13/03/2026" },
      { id: "6", title: "Ban Chấp hành Trung ương ban hành Nghị quyết mới về xây dựng đội ngũ cán bộ chiến lược", date: "13/03/2026" },
    ],
  },
  "4": {
    id: "4",
    title: "GDP quý I/2026 tăng trưởng 7.8%, cao nhất trong 5 năm qua - động lực từ xuất khẩu và đầu tư công",
    category: "Kinh tế",
    date: "13/03/2026",
    time: "16:00",
    author: "Phạm Hoàng Nam",
    views: 3421,
    readTime: "7 phút đọc",
    tags: ["GDP", "Kinh tế", "Tăng trưởng", "Xuất khẩu"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    summary: "Tổng cục Thống kê công bố GDP quý I/2026 tăng 7.8% so với cùng kỳ năm trước, đánh dấu mức tăng trưởng cao nhất trong 5 năm qua.",
    content: `
      <p class="lead">Tổng cục Thống kê vừa công bố GDP quý I/2026 tăng 7.8% so với cùng kỳ năm 2025, cao nhất trong 5 năm trở lại đây. Đây là tín hiệu tích cực cho thấy nền kinh tế Việt Nam đang phục hồi mạnh mẽ.</p>

      <h2>Động lực tăng trưởng chính</h2>
      <p>Theo báo cáo của Tổng cục Thống kê, có 3 động lực chính thúc đẩy tăng trưởng quý I:</p>
      <ul>
        <li><strong>Xuất khẩu tăng mạnh:</strong> Kim ngạch xuất khẩu đạt 98.2 tỷ USD, tăng 18.5% so với cùng kỳ năm trước</li>
        <li><strong>Đầu tư công giải ngân tốt:</strong> Giải ngân đầu tư công đạt 28.7% kế hoạch năm, cao hơn nhiều so với cùng kỳ</li>
        <li><strong>Tiêu dùng nội địa phục hồi:</strong> Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng tăng 10.3%</li>
      </ul>

      <h2>Các ngành tăng trưởng nổi bật</h2>
      <p>Ngành công nghiệp chế biến, chế tạo tiếp tục là động lực chính với mức tăng 9.8%. Trong đó, sản xuất điện tử, dệt may, giày da đều có mức tăng trưởng 2 con số. Ngành dịch vụ tăng 7.2%, trong đó du lịch phục hồi mạnh với số lượng khách quốc tế đạt 4.8 triệu lượt người.</p>

      <h2>Dự báo cả năm</h2>
      <p>Với đà tăng trưởng tích cực trong quý I, các chuyên gia kinh tế đánh giá Việt Nam hoàn toàn có thể đạt mục tiêu tăng trưởng 6.5-7% cả năm 2026, thậm chí có thể vượt mục tiêu nếu duy trì được đà tăng trưởng này.</p>
    `,
    relatedArticles: [
      { id: "8", title: "Đại hội XIV của Đảng: Khát vọng đưa Việt Nam bước vào kỷ nguyên mới", date: "13/03/2026" },
      { id: "11", title: "Nông nghiệp thông minh: Xuất khẩu nông sản đạt kỷ lục 65 tỷ USD", date: "11/03/2026" },
    ],
  },
  "5": {
    id: "5",
    title: "Việt Nam - Nhật Bản nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện vì hòa bình và thịnh vượng",
    category: "Đối ngoại",
    date: "13/03/2026",
    time: "14:30",
    author: "Lê Thị Mai",
    views: 1876,
    readTime: "5 phút đọc",
    tags: ["Đối ngoại", "Nhật Bản", "Quan hệ song phương"],
    thumbnail: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=600&fit=crop",
    summary: "Trong chuyến thăm chính thức Nhật Bản, Chủ tịch nước Lương Cường và Thủ tướng Nhật Bản đã nhất trí nâng cấp quan hệ hai nước.",
    content: `
      <p class="lead">Ngày 13/3/2026, tại Tokyo, Chủ tịch nước Lương Cường và Thủ tướng Nhật Bản Ishiba Shigeru đã chứng kiến lễ ký kết Tuyên bố chung về nâng cấp quan hệ Việt Nam - Nhật Bản lên Đối tác Chiến lược Toàn diện vì hòa bình và thịnh vượng ở châu Á.</p>

      <h2>Ý nghĩa của việc nâng cấp quan hệ</h2>
      <p>Đây là bước phát triển mới quan trọng trong quan hệ Việt Nam - Nhật Bản, thể hiện sự tin cậy chính trị cao độ và quyết tâm của lãnh đạo hai nước trong việc đưa quan hệ song phương lên tầm cao mới, đáp ứng lợi ích của nhân dân hai nước và vì hòa bình, ổn định, hợp tác và phát triển ở khu vực và trên thế giới.</p>

      <h2>Các lĩnh vực hợp tác</h2>
      <p>Hai bên nhất trí đẩy mạnh hợp tác trên nhiều lĩnh vực:</p>
      <ul>
        <li>Hợp tác kinh tế, thương mại, đầu tư</li>
        <li>Khoa học - công nghệ, chuyển đổi số</li>
        <li>Giáo dục - đào tạo, văn hóa, du lịch</li>
        <li>An ninh - quốc phòng</li>
        <li>Ứng phó biến đổi khí hậu</li>
      </ul>

      <h2>Cam kết cụ thể</h2>
      <p>Nhật Bản cam kết tiếp tục là đối tác ODA lớn nhất của Việt Nam, hỗ trợ phát triển hạ tầng giao thông, năng lượng sạch, phát triển nguồn nhân lực. Việt Nam khẳng định tạo điều kiện thuận lợi cho doanh nghiệp Nhật Bản đầu tư, kinh doanh tại Việt Nam.</p>
    `,
    relatedArticles: [
      { id: "3", title: "Quốc hội thông qua Luật Đất đai sửa đổi", date: "14/03/2026" },
      { id: "10", title: "Khánh thành cầu Mỹ Thuận 2", date: "12/03/2026" },
    ],
  },
  "6": {
    id: "6",
    title: "Ban Chấp hành Trung ương ban hành Nghị quyết mới về xây dựng đội ngũ cán bộ chiến lược",
    category: "Xây dựng Đảng",
    date: "13/03/2026",
    time: "11:20",
    author: "Hoàng Văn Sơn",
    views: 1543,
    readTime: "5 phút đọc",
    tags: ["Nghị quyết", "Cán bộ", "Xây dựng Đảng"],
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    summary: "Nghị quyết đặt mục tiêu xây dựng đội ngũ cán bộ các cấp đủ phẩm chất, năng lực, uy tín, ngang tầm nhiệm vụ trong giai đoạn mới.",
    content: `
      <p class="lead">Ban Chấp hành Trung ương Đảng khóa XIII vừa ban hành Nghị quyết về "Xây dựng đội ngũ cán bộ các cấp, nhất là cấp chiến lược, đủ phẩm chất, năng lực và uy tín, ngang tầm nhiệm vụ".</p>

      <h2>Mục tiêu của Nghị quyết</h2>
      <p>Nghị quyết đặt ra mục tiêu tổng quát là xây dựng đội ngũ cán bộ các cấp, nhất là cán bộ cấp chiến lược có bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, năng lực chuyên môn cao, tư duy đổi mới, sáng tạo, có tầm nhìn chiến lược, thực sự tiên phong, gương mẫu.</p>

      <h2>Các giải pháp chủ yếu</h2>
      <ul>
        <li>Đổi mới công tác quy hoạch, đào tạo, bồi dưỡng cán bộ</li>
        <li>Hoàn thiện tiêu chuẩn, quy trình đánh giá cán bộ</li>
        <li>Đẩy mạnh công tác luân chuyển, điều động cán bộ</li>
        <li>Tăng cường kiểm tra, giám sát cán bộ</li>
        <li>Nâng cao chất lượng công tác quy hoạch cán bộ</li>
      </ul>

      <h2>Lộ trình thực hiện</h2>
      <p>Nghị quyết yêu cầu các cấp ủy đảng, chính quyền khẩn trương xây dựng chương trình, kế hoạch triển khai thực hiện với lộ trình cụ thể, rõ ràng. Ban Tổ chức Trung ương được giao nhiệm vụ theo dõi, đôn đốc, kiểm tra việc thực hiện.</p>
    `,
    relatedArticles: [
      { id: "2", title: "Tổng Bí thư chủ trì họp Bộ Chính trị về công tác cán bộ", date: "15/03/2026" },
      { id: "13", title: "Hội nghị Trung ương lần thứ 3 khóa XIV", date: "10/03/2026" },
    ],
  },
  "7": {
    id: "7",
    title: "Chủ tịch nước Lương Cường tiếp đoàn đại biểu người có công với cách mạng tiêu biểu toàn quốc",
    category: "Chính trị",
    date: "12/03/2026",
    time: "15:00",
    author: "Nguyễn Thị Lan",
    views: 1234,
    readTime: "4 phút đọc",
    tags: ["Chủ tịch nước", "Người có công"],
    thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=600&fit=crop",
    summary: "Chủ tịch nước nhấn mạnh chính sách đền ơn đáp nghĩa là trách nhiệm thiêng liêng của Đảng, Nhà nước và toàn xã hội.",
    content: `
      <p class="lead">Chiều 12/3/2026, tại Phủ Chủ tịch, Chủ tịch nước Lương Cường đã tiếp đoàn đại biểu người có công với cách mạng tiêu biểu toàn quốc nhân dịp kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2026).</p>

      <h2>Tri ân sâu sắc</h2>
      <p>Chủ tịch nước khẳng định, chính sách đền ơn đáp nghĩa là trách nhiệm thiêng liêng, sự tri ân sâu sắc của Đảng, Nhà nước và toàn xã hội đối với những người có công với cách mạng. Đây là truyền thống "Uống nước nhớ nguồn", "Đền ơn đáp nghĩa" tốt đẹp của dân tộc Việt Nam.</p>

      <h2>Chính sách mới</h2>
      <p>Chủ tịch nước thông báo, Chính phủ đã ban hành nhiều chính sách mới nhằm nâng cao đời sống vật chất và tinh thần của người có công, bảo đảm người có công được chăm sóc tốt hơn về mọi mặt.</p>

      <h2>Phát huy truyền thống</h2>
      <p>Chủ tịch nước đề nghị các thế hệ người có công tiếp tục phát huy truyền thống cách mạng, tích cực tham gia các phong trào thi đua yêu nước, góp phần xây dựng đất nước ngày càng giàu mạnh.</p>
    `,
    relatedArticles: [
      { id: "1", title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII", date: "16/03/2026" },
    ],
  },
  "8": {
    id: "8",
    title: "Đại hội XIV của Đảng: Khát vọng đưa Việt Nam bước vào kỷ nguyên mới của dân tộc",
    category: "Đại hội Đảng",
    date: "13/03/2026",
    time: "08:00",
    author: "Ban Biên tập",
    views: 5432,
    readTime: "10 phút đọc",
    tags: ["Đại hội Đảng", "Kỷ nguyên mới", "Phát triển"],
    thumbnail: "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=1200&h=600&fit=crop",
    summary: "Đại hội XIV của Đảng dự kiến diễn ra vào đầu năm 2026, với chủ đề 'Đoàn kết, dân chủ, kỷ cương, sáng tạo, quyết tâm đưa nước ta trở thành nước phát triển'.",
    content: `
      <p class="lead">Đại hội đại biểu toàn quốc lần thứ XIV của Đảng Cộng sản Việt Nam dự kiến diễn ra vào đầu năm 2026, đánh dấu cột mốc quan trọng trong hành trình phát triển của đất nước, với khát vọng đưa Việt Nam bước vào kỷ nguyên mới - kỷ nguyên vươn mình của dân tộc.</p>

      <h2>Chủ đề Đại hội</h2>
      <p>Đại hội XIV sẽ diễn ra với chủ đề: "Đoàn kết, dân chủ, kỷ cương, sáng tạo, quyết tâm xây dựng nước Việt Nam xã hội chủ nghĩa ngày càng giàu mạnh, dân chủ, công bằng, văn minh, vững bước vào kỷ nguyên mới - kỷ nguyên vươn mình của dân tộc".</p>

      <h2>Mục tiêu đến năm 2030</h2>
      <p>Theo dự thảo Báo cáo chính trị, Đại hội đề ra mục tiêu đến năm 2030:</p>
      <ul>
        <li>Việt Nam trở thành nước đang phát triển có thu nhập trung bình cao</li>
        <li>GDP bình quân đầu người đạt khoảng 7.500 - 8.000 USD</li>
        <li>Tốc độ tăng trưởng GDP bình quân giai đoạn 2026-2030 đạt 7-8%/năm</li>
        <li>Năng suất lao động tăng bình quân 6,5-7%/năm</li>
        <li>Tỷ lệ đô thị hóa đạt khoảng 50%</li>
      </ul>

      <h2>Đột phá chiến lược</h2>
      <p>Đại hội xác định 3 đột phá chiến lược:</p>
      <ul>
        <li><strong>Thể chế:</strong> Hoàn thiện đồng bộ thể chế phát triển, tạo môi trường thuận lợi cho phát triển kinh tế - xã hội</li>
        <li><strong>Hạ tầng:</strong> Phát triển hạ tầng đồng bộ, hiện đại, nhất là hạ tầng giao thông, năng lượng, chuyển đổi số</li>
        <li><strong>Nhân lực:</strong> Phát triển nguồn nhân lực chất lượng cao, nhất là trong lĩnh vực khoa học công nghệ, đổi mới sáng tạo</li>
      </ul>

      <h2>Ý nghĩa lịch sử</h2>
      <p>Đại hội XIV có ý nghĩa lịch sử đặc biệt quan trọng, khẳng định quyết tâm chính trị cao nhất của toàn Đảng, toàn dân, toàn quân ta trong việc hiện thực hóa khát vọng phát triển đất nước, đưa Việt Nam vững bước vào kỷ nguyên mới - kỷ nguyên vươn mình của dân tộc.</p>
    `,
    relatedArticles: [
      { id: "4", title: "GDP quý I/2026 tăng trưởng 7.8%", date: "13/03/2026" },
      { id: "12", title: "Trung tâm AI quốc gia chính thức hoạt động", date: "11/03/2026" },
    ],
  },
  "9": {
    id: "9",
    title: "Đổi mới giáo dục đại học: 5 trường đại học Việt Nam lọt top 500 châu Á năm 2026",
    category: "Giáo dục",
    date: "12/03/2026",
    time: "10:30",
    author: "Trần Minh Quang",
    views: 2876,
    readTime: "6 phút đọc",
    tags: ["Giáo dục", "Đại học", "Xếp hạng"],
    thumbnail: "https://images.unsplash.com/photo-1743327572772-eca3c63b029e?w=1200&h=600&fit=crop",
    summary: "Kết quả xếp hạng QS Asia 2026 cho thấy sự tiến bộ vượt bậc của giáo dục đại học Việt Nam.",
    content: `
      <p class="lead">Theo kết quả xếp hạng QS Asia University Rankings 2026 vừa công bố, có 5 trường đại học Việt Nam lọt top 500 châu Á, đánh dấu bước tiến vượt bậc trong công cuộc đổi mới giáo dục đại học của Việt Nam.</p>

      <h2>5 trường đại học tiêu biểu</h2>
      <p>Các trường lọt top 500 châu Á gồm:</p>
      <ul>
        <li>Đại học Quốc gia Hà Nội (thứ hạng 138)</li>
        <li>Đại học Quốc gia TP.HCM (thứ hạng 165)</li>
        <li>Đại học Bách khoa Hà Nội (thứ hạng 247)</li>
        <li>Đại học Kinh tế Quốc dân (thứ hạng 356)</li>
        <li>Đại học Cần Thơ (thứ hạng 478)</li>
      </ul>

      <h2>Yếu tố thành công</h2>
      <p>Theo các chuyên gia, sự tiến bộ này đến từ nhiều yếu tố:</p>
      <ul>
        <li>Tăng cường đầu tư cho nghiên cứu khoa học</li>
        <li>Nâng cao chất lượng đội ngũ giảng viên</li>
        <li>Đẩy mạnh hợp tác quốc tế</li>
        <li>Cải thiện cơ sở vật chất, trang thiết bị</li>
        <li>Đổi mới phương pháp giảng dạy</li>
      </ul>

      <h2>Định hướng phát triển</h2>
      <p>Bộ Giáo dục và Đào tạo khẳng định sẽ tiếp tục đẩy mạnh công cuộc đổi mới giáo dục đại học, với mục tiêu đến năm 2030 có ít nhất 10 trường đại học Việt Nam lọt top 500 châu Á và ít nhất 2 trường lọt top 1000 thế giới.</p>
    `,
    relatedArticles: [
      { id: "12", title: "Trung tâm AI quốc gia chính thức hoạt động", date: "11/03/2026" },
    ],
  },
  "10": {
    id: "10",
    title: "Khánh thành cầu Mỹ Thuận 2: Nối liền tuyến cao tốc Bắc - Nam phía Đông hoàn chỉnh",
    category: "Hạ tầng",
    date: "12/03/2026",
    time: "09:00",
    author: "Lê Văn Hùng",
    views: 3210,
    readTime: "5 phút đọc",
    tags: ["Hạ tầng", "Giao thông", "Cao tốc"],
    thumbnail: "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?w=1200&h=600&fit=crop",
    summary: "Cầu Mỹ Thuận 2 chính thức thông xe, hoàn thiện tuyến cao tốc Bắc - Nam phía Đông, rút ngắn thời gian di chuyển giữa các tỉnh ĐBSCL.",
    content: `
      <p class="lead">Sáng 12/3/2026, Thủ tướng Chính phủ Phạm Minh Chính đã dự lễ khánh thành và thông xe cầu Mỹ Thuận 2 bắc qua sông Tiền, nối liền tuyến cao tốc Bắc - Nam phía Đông đoạn qua khu vực Đồng bằng sông Cửu Long.</p>

      <h2>Quy mô công trình</h2>
      <p>Cầu Mỹ Thuận 2 có các thông số kỹ thuật:</p>
      <ul>
        <li>Tổng chiều dài: 1.870m</li>
        <li>Quy mô: 4 làn xe, tốc độ thiết kế 100km/h</li>
        <li>Tổng mức đầu tư: 5.000 tỷ đồng</li>
        <li>Thời gian thi công: 36 tháng</li>
      </ul>

      <h2>Ý nghĩa kinh tế - xã hội</h2>
      <p>Cầu Mỹ Thuận 2 có ý nghĩa quan trọng:</p>
      <ul>
        <li>Hoàn thiện tuyến cao tốc Bắc - Nam phía Đông</li>
        <li>Rút ngắn thời gian di chuyển từ TP.HCM đến Cần Thơ xuống còn 2 giờ</li>
        <li>Thúc đẩy phát triển kinh tế - xã hội khu vực ĐBSCL</li>
        <li>Tạo động lực cho du lịch, logistics phát triển</li>
      </ul>

      <h2>Kế hoạch tiếp theo</h2>
      <p>Theo Bộ Giao thông Vận tải, toàn bộ tuyến cao tốc Bắc - Nam phía Đông sẽ hoàn thành và đưa vào khai thác trong năm 2026, tạo hành lang giao thông hiện đại nhất Việt Nam.</p>
    `,
    relatedArticles: [
      { id: "5", title: "Việt Nam - Nhật Bản nâng cấp quan hệ", date: "13/03/2026" },
      { id: "11", title: "Xuất khẩu nông sản đạt kỷ lục 65 tỷ USD", date: "11/03/2026" },
    ],
  },
  "11": {
    id: "11",
    title: "Nông nghiệp thông minh: Xuất khẩu nông sản Việt Nam đạt kỷ lục 65 tỷ USD trong năm 2025",
    category: "Nông nghiệp",
    date: "11/03/2026",
    time: "14:15",
    author: "Nguyễn Thị Hoa",
    views: 1987,
    readTime: "6 phút đọc",
    tags: ["Nông nghiệp", "Xuất khẩu", "Nông sản"],
    thumbnail: "https://images.unsplash.com/photo-1556762163-542910c8765d?w=1200&h=600&fit=crop",
    summary: "Kim ngạch xuất khẩu nông sản năm 2025 đạt 65 tỷ USD, tăng 12% so với năm 2024, nhờ ứng dụng công nghệ cao.",
    content: `
      <p class="lead">Bộ Nông nghiệp và Phát triển nông thôn công bố kim ngạch xuất khẩu nông sản năm 2025 đạt kỷ lục 65 tỷ USD, tăng 12% so với năm 2024, đánh dấu bước tiến lớn trong chuyển đổi số ngành nông nghiệp.</p>

      <h2>Các mặt hàng xuất khẩu chủ lực</h2>
      <p>Một số mặt hàng nông sản xuất khẩu đạt kim ngạch cao:</p>
      <ul>
        <li>Gạo: 4.8 tỷ USD (tăng 15%)</li>
        <li>Cà phê: 5.2 tỷ USD (tăng 18%)</li>
        <li>Rau quả: 6.5 tỷ USD (tăng 20%)</li>
        <li>Hạt điều: 4.1 tỷ USD (tăng 10%)</li>
        <li>Thuỷ sản: 9.8 tỷ USD (tăng 8%)</li>
      </ul>

      <h2>Yếu tố thành công</h2>
      <p>Sự tăng trưởng ấn tượng đến từ:</p>
      <ul>
        <li>Ứng dụng công nghệ cao trong sản xuất</li>
        <li>Nâng cao chất lượng sản phẩm</li>
        <li>Mở rộng thị trường xuất khẩu</li>
        <li>Xây dựng thương hiệu quốc gia mạnh</li>
        <li>Phát triển chuỗi giá trị bền vững</li>
      </ul>

      <h2>Định hướng 2026</h2>
      <p>Năm 2026, ngành nông nghiệp đặt mục tiêu kim ngạch xuất khẩu nông sản đạt 70 tỷ USD, tiếp tục đẩy mạnh ứng dụng công nghệ cao, nông nghiệp thông minh, nông nghiệp hữu cơ.</p>
    `,
    relatedArticles: [
      { id: "4", title: "GDP quý I/2026 tăng trưởng 7.8%", date: "13/03/2026" },
      { id: "10", title: "Khánh thành cầu Mỹ Thuận 2", date: "12/03/2026" },
    ],
  },
  "12": {
    id: "12",
    title: "Trung tâm AI quốc gia chính thức hoạt động, đặt mục tiêu đưa Việt Nam vào top 3 ASEAN về AI",
    category: "Công nghệ",
    date: "11/03/2026",
    time: "10:00",
    author: "Phạm Đức Anh",
    views: 4123,
    readTime: "7 phút đọc",
    tags: ["AI", "Công nghệ", "Chuyển đổi số"],
    thumbnail: "https://images.unsplash.com/photo-1768364635815-01516ab502f4?w=1200&h=600&fit=crop",
    summary: "Trung tâm Trí tuệ nhân tạo quốc gia chính thức đi vào hoạt động với sứ mệnh đưa Việt Nam trở thành cường quốc AI trong khu vực.",
    content: `
      <p class="lead">Ngày 11/3/2026, Trung tâm Trí tuệ nhân tạo (AI) quốc gia chính thức đi vào hoạt động tại Khu Công nghệ cao TP.HCM, đánh dấu bước ngoặt quan trọng trong chiến lược chuyển đổi số quốc gia.</p>

      <h2>Sứ mệnh và tầm nhìn</h2>
      <p>Trung tâm AI quốc gia được thành lập với sứ mệnh:</p>
      <ul>
        <li>Nghiên cứu, phát triển công nghệ AI tiên tiến</li>
        <li>Đào tạo nguồn nhân lực AI chất lượng cao</li>
        <li>Hỗ trợ doanh nghiệp ứng dụng AI</li>
        <li>Xây dựng hệ sinh thái AI Việt Nam</li>
      </ul>

      <h2>Cơ sở vật chất</h2>
      <p>Trung tâm được đầu tư hiện đại với:</p>
      <ul>
        <li>Hệ thống máy tính hiệu năng cao (HPC) công suất 1000 TFLOPS</li>
        <li>Phòng lab AI, Machine Learning, Deep Learning</li>
        <li>Không gian làm việc chung cho startup AI</li>
        <li>Trang thiết bị nghiên cứu đạt chuẩn quốc tế</li>
      </ul>

      <h2>Đội ngũ chuyên gia</h2>
      <p>Trung tâm quy tụ hơn 100 chuyên gia AI hàng đầu từ trong và ngoài nước, bao gồm nhiều tiến sĩ tốt nghiệp từ các trường đại học danh tiếng như MIT, Stanford, CMU.</p>

      <h2>Mục tiêu 2030</h2>
      <p>Đến năm 2030, Trung tâm đặt mục tiêu:</p>
      <ul>
        <li>Đưa Việt Nam vào top 3 ASEAN về AI</li>
        <li>Đào tạo 10.000 chuyên gia AI</li>
        <li>Hỗ trợ 1.000 doanh nghiệp ứng dụng AI</li>
        <li>Phát triển 50 sản phẩm AI made in Vietnam</li>
      </ul>
    `,
    relatedArticles: [
      { id: "8", title: "Đại hội XIV của Đảng: Khát vọng đưa Việt Nam bước vào kỷ nguyên mới", date: "13/03/2026" },
      { id: "9", title: "5 trường đại học Việt Nam lọt top 500 châu Á", date: "12/03/2026" },
    ],
  },
  "13": {
    id: "13",
    title: "Hội nghị Trung ương lần thứ 3 khóa XIV: Xác định đột phá chiến lược về thể chế và nhân lực",
    category: "Xây dựng Đảng",
    date: "10/03/2026",
    time: "08:30",
    author: "Lê Minh Châu",
    views: 2345,
    readTime: "8 phút đọc",
    tags: ["Hội nghị Trung ương", "Thể chế", "Nhân lực"],
    thumbnail: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=1200&h=600&fit=crop",
    summary: "Hội nghị Trung ương 3 khóa XIV thảo luận và thống nhất các giải pháp đột phá về thể chế và phát triển nguồn nhân lực chất lượng cao.",
    content: `
      <p class="lead">Hội nghị lần thứ 3 Ban Chấp hành Trung ương Đảng khóa XIV đã thành công tốt đẹp, thống nhất cao về các giải pháp đột phá chiến lược nhằm hoàn thiện thể chế và phát triển nguồn nhân lực chất lượng cao.</p>

      <h2>Đột phá về thể chế</h2>
      <p>Hội nghị nhấn mạnh cần đẩy mạnh cải cách thể chế theo hướng:</p>
      <ul>
        <li>Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa</li>
        <li>Cải cách hành chính mạnh mẽ, hiệu quả</li>
        <li>Tạo môi trường đầu tư kinh doanh thuận lợi, cạnh tranh lành mạnh</li>
        <li>Hoàn thiện pháp luật về đất đai, tài nguyên, môi trường</li>
      </ul>

      <h2>Phát triển nhân lực chất lượng cao</h2>
      <p>Về nhân lực, Hội nghị xác định:</p>
      <ul>
        <li>Đổi mới căn bản, toàn diện giáo dục và đào tạo</li>
        <li>Phát triển nguồn nhân lực khoa học công nghệ, đổi mới sáng tạo</li>
        <li>Thu hút, trọng dụng nhân tài</li>
        <li>Nâng cao chất lượng đào tạo nghề</li>
      </ul>

      <h2>Lộ trình thực hiện</h2>
      <p>Hội nghị yêu cầu Chính phủ, các bộ, ngành, địa phương khẩn trương xây dựng kế hoạch hành động cụ thể, lộ trình rõ ràng để triển khai thực hiện các nghị quyết của Hội nghị.</p>
    `,
    relatedArticles: [
      { id: "6", title: "Ban Chấp hành Trung ương ban hành Nghị quyết mới về xây dựng đội ngũ cán bộ chiến lược", date: "13/03/2026" },
      { id: "1", title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII", date: "16/03/2026" },
    ],
  },
};

// Helper function to get all articles as array
export function getAllArticles(): Article[] {
  return Object.values(articlesData);
}

// Helper function to get articles by category
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.category === category);
}

// Helper function to get featured articles
export function getFeaturedArticles(limit: number = 6): Article[] {
  return getAllArticles()
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}