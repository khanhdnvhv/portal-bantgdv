// ── Mock data for leaders ──────────────────────────────

// Leader portrait images (same as HeroLeaders component)
import imgLeaderHead from "figma:asset/946d2cc7f80da0d513b0c3c5ddd062bc6e165b1f.png";
import imgLeader1 from "figma:asset/c4a08a3040b1f26ec084b5ca94d7fe5d850de0c1.png";
import imgLeader2 from "figma:asset/5c33fea94ac9a91154dc31cc837ac43a13246038.png";
import imgLeader3 from "figma:asset/14014738289fad25004c8c9a0b1e226fa1ed0e08.png";
import imgLeader4 from "figma:asset/51ba6fc55d95397c456e9429d6da24523b72191a.png";
import imgLeader5 from "figma:asset/c7132adc8e22e55bdea45ba237b6876a7fde292e.png";
import imgLeader6 from "figma:asset/8570baf431a87b6b19489371bc9fd1c85b889798.png";
import imgLeader7 from "figma:asset/f94a54b920cf1705633d5fc0267259282d6cfc0b.png";
import imgLeader8 from "figma:asset/55198c5299e28cc060bf3a747aecb1213b2beb37.png";

export interface Leader {
  id: string;
  name: string;
  position: string;
  rank: string;
  avatar: string;
  birthDate: string;
  birthPlace: string;
  email: string;
  phone: string;
  education: string[];
  career: { year: string; position: string }[];
  achievements: string[];
  bio: string;
}

export const leadersData: Record<string, Leader> = {
  "1": {
    id: "1",
    name: "Trịnh Văn Quyết",
    position: "Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng",
    avatar: imgLeaderHead,
    birthDate: "15/05/1970",
    birthPlace: "Hà Nội",
    email: "trinhvanquyet@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Kinh tế chính trị, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Thạc sĩ Quản trị kinh doanh, Đại học Quốc gia Hà Nội",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Trưởng Ban Tuyên giáo Trung ương" },
      { year: "2016 - 2021", position: "Bí thư Tỉnh ủy Hà Giang" },
      { year: "2011 - 2016", position: "Phó Bí thư Thường trực Tỉnh ủy Hà Giang" },
      { year: "2006 - 2011", position: "Trưởng Ban Tuyên giáo Tỉnh ủy Hà Giang" },
    ],
    achievements: [
      "Huân chương Lao động hạng Nhất",
      "Bằng khen của Thủ tướng Chính phủ",
      "Chiến sĩ thi đua toàn quốc",
      "Huy hiệu 30 năm tuổi Đảng",
    ],
    bio: `
      <p>Đồng chí Trịnh Văn Quyết là một trong những nhà lãnh đạo tiêu biểu trong công tác tuyên giáo và dân vận, với hơn 25 năm kinh nghiệm trong lĩnh vực xây dựng Đảng và hệ thống chính trị.</p>
      
      <h2>Quá trình công tác</h2>
      <p>Trong suốt quá trình công tác, đồng chí đã có nhiều đóng góp quan trọng vào việc đổi mới nội dung, phương thức công tác tuyên giáo, góp phần nâng cao nhận thức của cán bộ, đảng viên và nhân dân về đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước. Đặc biệt, đồng chí đã lãnh đạo thành công việc sáp nhập Ban Tuyên giáo và Ban Dân vận thành một cơ quan thống nhất.</p>

      <h2>Thành tích nổi bật</h2>
      <p>Đồng chí đã chủ trì nhiều đề tài nghiên cứu khoa học cấp Nhà nước, tham gia biên soạn nhiều giáo trình, sách chuyên khảo về lý luận chính trị. Các công trình nghiên cứu của đồng chí có giá trị lý luận và thực tiễn cao, được đánh giá là tài liệu tham khảo quan trọng cho công tác đào tạo, bồi dưỡng cán bộ.</p>

      <h2>Phong cách làm việc</h2>
      <p>Với phong cách làm việc nghiêm túc, khoa học và sâu sát thực tiễn, đồng chí luôn được đồng nghiệp và cấp dưới kính trọng, tin yêu. Đồng chí thường xuyên đi cơ sở, tìm hiểu thực tế, lắng nghe ý kiến của cán bộ, đảng viên và nhân dân để có những giải pháp phù hợp, hiệu quả.</p>
    `,
  },
  "2": {
    id: "2",
    name: "Phạm Tất Thắng",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader1,
    birthDate: "20/08/1975",
    birthPlace: "Vĩnh Phúc",
    email: "phamtatthang@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Triết học, Học viện Khoa học Xã hội",
      "Thạc sĩ Văn hóa học, Đại học Khoa học Xã hội và Nhân văn",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Chủ nhiệm Ủy ban Văn hóa, Giáo dục của Quốc hội" },
      { year: "2016 - 2021", position: "Trưởng phòng Công tác văn hóa tư tưởng, Ban Tuyên giáo TW" },
      { year: "2011 - 2016", position: "Phó Trưởng phòng Nghiên cứu lý luận" },
    ],
    achievements: [
      "Huân chương Lao động hạng Nhì",
      "Bằng khen của Bộ trưởng",
      "Chiến sĩ thi đua cấp Bộ nhiều năm liền",
    ],
    bio: `
      <p>Đồng chí Phạm Tất Thắng là chuyên gia hàng đầu trong lĩnh vực công tác văn hóa tư tưởng, có nhiều đóng góp quan trọng trong việc xây dựng và phát triển văn hóa cơ quan.</p>
      
      <h2>Chuyên môn và năng lực</h2>
      <p>Với bề dày kinh nghiệm và trình độ chuyên môn cao, đồng chí đã tham gia nhiều chương trình, đề án quan trọng về công tác văn hóa, văn nghệ. Đồng chí cũng là tác giả của nhiều công trình nghiên cứu về triết học, văn hóa có giá trị khoa học cao.</p>

      <h2>Đóng góp nổi bật</h2>
      <p>Đồng chí đã đóng góp tích cực vào việc xây dựng văn hóa doanh nghiệp, văn hóa công sở trong các cơ quan Đảng, Nhà nước. Các mô hình, sáng kiến do đồng chí đề xuất đã được nhân rộng và áp dụng hiệu quả tại nhiều địa phương.</p>
    `,
  },
  "3": {
    id: "3",
    name: "Ngô Đông Hải",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader2,
    birthDate: "10/03/1972",
    birthPlace: "Thái Bình",
    email: "ngodonghah@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Báo chí học, Đại học Khoa học Xã hội và Nhân văn",
      "Thạc sĩ Truyền thông đại chúng, Đại học Quốc gia Hà Nội",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2020 - 2025", position: "Bí thư Tỉnh ủy Thái Bình" },
      { year: "2018 - 2020", position: "Phó Bí thư Thường trực Tỉnh ủy Thái Bình" },
      { year: "2014 - 2018", position: "Vụ trưởng Vụ Tổng hợp, Ban Tuyên giáo TW" },
    ],
    achievements: [
      "Huân chương Lao động hạng Ba",
      "Giải thưởng Báo chí toàn quốc",
      "Bằng khen của Thủ tướng Chính phủ",
    ],
    bio: `
      <p>Đồng chí Ngô Đông Hải là cán bộ lãnh đạo có nhiều kinh nghiệm cả ở địa phương và trung ương, từng kinh qua nhiều vị trí quan trọng trong hệ thống chính trị.</p>
      
      <h2>Kinh nghiệm lãnh đạo</h2>
      <p>Với thời gian dài làm Bí thư Tỉnh ủy Thái Bình, đồng chí đã lãnh đạo địa phương đạt được nhiều thành tựu quan trọng trong phát triển kinh tế - xã hội, xây dựng Đảng và hệ thống chính trị.</p>

      <h2>Quản lý truyền thông</h2>
      <p>Trong vai trò lãnh đạo, đồng chí đã có những đóng góp quan trọng trong việc đổi mới công tác tuyên truyền, định hướng dư luận xã hội. Đồng chí luôn chú trọng ứng dụng công nghệ mới trong hoạt động báo chí, truyền thông.</p>
    `,
  },
  "4": {
    id: "4",
    name: "Nguyễn Quang Đức",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader3,
    birthDate: "25/11/1974",
    birthPlace: "Hà Nội",
    email: "nguyenquangduc@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Chính trị học, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Thạc sĩ Quan hệ quốc tế, Đại học Quốc gia Hà Nội",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Bí thư Thành ủy Hà Nội" },
      { year: "2017 - 2021", position: "Trưởng Ban Dân vận Thành ủy Hà Nội" },
      { year: "2013 - 2017", position: "Chủ tịch UBND quận Hoàn Kiếm" },
    ],
    achievements: [
      "Bằng khen của Ban Tuyên giáo Trung ương",
      "Giải thưởng Nghiên cứu khoa học xuất sắc",
      "Chiến sĩ thi đua cơ sở nhiều năm",
    ],
    bio: `
      <p>Đồng chí Nguyễn Quang Đức là nhà lãnh đạo có nhiều kinh nghiệm trong công tác dân vận và quản lý đô thị, đã từng đảm nhiệm nhiều vị trí quan trọng tại Hà Nội.</p>
      
      <h2>Hoạt động dân vận</h2>
      <p>Đồng chí đã chủ trì và tham gia nhiều chương trình dân vận khéo, vận động nhân dân tham gia xây dựng Đảng và hệ thống chính trị. Các mô hình do đồng chí đề xuất đã được nhân rộng tại nhiều địa phương.</p>

      <h2>Quản lý đô thị</h2>
      <p>Với kinh nghiệm quản lý đô thị, đồng chí đã có những đóng góp quan trọng trong việc phát triển kinh tế - xã hội, bảo tồn di sản văn hóa và nâng cao đời sống nhân dân.</p>
    `,
  },
  "5": {
    id: "5",
    name: "Trần Thanh Lâm",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader4,
    birthDate: "18/07/1978",
    birthPlace: "Bến Tre",
    email: "tranthanhlam@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Thạc sĩ Xây dựng Đảng, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Cử nhân Luật, Đại học Luật TP. Hồ Chí Minh",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Trưởng Ban Tuyên giáo Trung ương" },
      { year: "2016 - 2021", position: "Vụ trưởng Vụ Báo chí - Xuất bản, Ban Tuyên giáo TW" },
      { year: "2012 - 2016", position: "Phó Vụ trưởng Vụ Báo chí - Xuất bản" },
    ],
    achievements: [
      "Bằng khen của Ban Tuyên giáo Trung ương",
      "Chiến sĩ thi đua cơ sở nhiều năm",
      "Giải thưởng Văn học - Nghệ thuật",
    ],
    bio: `
      <p>Đồng chí Trần Thanh Lâm là cán bộ có trình độ chuyên môn vững vàng trong lĩnh vực báo chí, xuất bản, có nhiều đóng góp tích cực cho công tác tuyên giáo.</p>
      
      <h2>Công tác báo chí - xuất bản</h2>
      <p>Đồng chí đã tổ chức và tham gia nhiều hoạt động quản lý báo chí, xuất bản có ý nghĩa, góp phần định hướng thông tin, dư luận xã hội theo đường lối của Đảng.</p>

      <h2>Sáng tác và nghiên cứu</h2>
      <p>Ngoài công việc chuyên môn, đồng chí còn có nhiều bài viết, nghiên cứu về công tác tuyên giáo trong tình hình mới, được đăng tải trên các tạp chí chuyên ngành.</p>
    `,
  },
  "6": {
    id: "6",
    name: "Triệu Tài Vinh",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader5,
    birthDate: "12/04/1971",
    birthPlace: "Hà Giang",
    email: "trieutaivinh@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Kinh tế, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Thạc sĩ Quản lý kinh tế, Đại học Kinh tế Quốc dân",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Trưởng Ban Dân vận Trung ương" },
      { year: "2015 - 2021", position: "Bí thư Tỉnh ủy Hà Giang" },
      { year: "2010 - 2015", position: "Chủ tịch UBND tỉnh Hà Giang" },
    ],
    achievements: [
      "Huân chương Lao động hạng Ba",
      "Bằng khen của Thủ tướng Chính phủ",
      "Chiến sĩ thi đua toàn quốc",
    ],
    bio: `
      <p>Đồng chí Triệu Tài Vinh là người dân tộc Nùng, cán bộ lãnh đạo có nhiều kinh nghiệm trong công tác dân vận và quản lý tại vùng cao, biên giới.</p>
      
      <h2>Kinh nghiệm địa phương</h2>
      <p>Đồng chí đã từng giữ nhiều chức vụ quan trọng tại tỉnh Hà Giang, đặc biệt là Bí thư Tỉnh ủy — góp phần lãnh đạo phát triển kinh tế - xã hội vùng dân tộc thiểu số và miền núi.</p>

      <h2>Công tác dân vận</h2>
      <p>Với am hiểu sâu sắc về đời sống đồng bào dân tộc thiểu số, đồng chí đã có những đóng góp to lớn trong công tác dân vận, vận động đồng bào thực hiện các chủ trương, chính sách của Đảng và Nhà nước.</p>
    `,
  },
  "7": {
    id: "7",
    name: "Phan Xuân Thuỷ",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader6,
    birthDate: "05/09/1973",
    birthPlace: "Thanh Hoá",
    email: "phanxuanthuy@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Lịch sử Đảng, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Thạc sĩ Báo chí, Học viện Báo chí và Tuyên truyền",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Phó Trưởng Ban Tuyên giáo Trung ương" },
      { year: "2017 - 2021", position: "Vụ trưởng Vụ Tuyên truyền, Ban Tuyên giáo TW" },
      { year: "2013 - 2017", position: "Phó Vụ trưởng Vụ Tuyên truyền" },
    ],
    achievements: [
      "Bằng khen của Ban Tuyên giáo Trung ương",
      "Giải Báo chí cấp Bộ",
      "Chiến sĩ thi đua cơ sở nhiều năm",
    ],
    bio: `
      <p>Đồng chí Phan Xuân Thuỷ là cán bộ có nhiều kinh nghiệm trong công tác tuyên truyền, có khả năng nắm bắt và định hướng dư luận xã hội hiệu quả.</p>
      
      <h2>Năng lực chuyên môn</h2>
      <p>Với kinh nghiệm dày dạn trong lĩnh vực tuyên truyền, đồng chí đã chủ trì nhiều chiến dịch truyền thông lớn, tạo hiệu ứng tích cực trong xã hội, đặc biệt trong các dịp kỷ niệm quan trọng của Đảng và đất nước.</p>

      <h2>Ứng dụng công nghệ</h2>
      <p>Đồng chí là người tiên phong trong việc ứng dụng công nghệ số, mạng xã hội vào công tác tuyên truyền, nhờ đó tiếp cận được nhiều đối tượng, nhất là giới trẻ.</p>
    `,
  },
  "8": {
    id: "8",
    name: "Vũ Thanh Mai",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader7,
    birthDate: "14/02/1976",
    birthPlace: "Hải Dương",
    email: "vuthanhmai@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Xã hội học, Viện Hàn lâm Khoa học Xã hội Việt Nam",
      "Thạc sĩ Quản lý công, Đại học Kinh tế Quốc dân",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2022 - 2025", position: "Phó Trưởng Ban Tổ chức Trung ương" },
      { year: "2018 - 2022", position: "Vụ trưởng Vụ Tổ chức cán bộ, Ban Tổ chức TW" },
      { year: "2014 - 2018", position: "Phó Vụ trưởng Vụ Tổ chức cán bộ" },
    ],
    achievements: [
      "Huân chương Lao động hạng Ba",
      "Bằng khen của Ban Tổ chức Trung ương",
      "Chiến sĩ thi đua cấp Bộ nhiều năm",
    ],
    bio: `
      <p>Đồng chí Vũ Thanh Mai là nữ cán bộ lãnh đạo có nhiều kinh nghiệm trong công tác tổ chức cán bộ và nghiên cứu xã hội học.</p>
      
      <h2>Kinh nghiệm tổ chức</h2>
      <p>Với thời gian dài làm việc tại Ban Tổ chức Trung ương, đồng chí am hiểu sâu sắc công tác cán bộ, quy hoạch và đào tạo nguồn nhân lực lãnh đạo cấp chiến lược cho Đảng và Nhà nước.</p>

      <h2>Nghiên cứu khoa học</h2>
      <p>Đồng chí đã công bố nhiều công trình nghiên cứu về xã hội học, quản lý nhân sự, được đánh giá cao về tính khoa học và ứng dụng thực tiễn.</p>
    `,
  },
  "9": {
    id: "9",
    name: "Đinh Thị Mai",
    position: "Phó Trưởng Ban Tuyên giáo và Dân vận",
    rank: "Ủy viên Trung ương Đảng",
    avatar: imgLeader8,
    birthDate: "22/10/1977",
    birthPlace: "Nghệ An",
    email: "dinhthimai@tuyengiao.gov.vn",
    phone: "+84 24 3826 xxxx",
    education: [
      "Tiến sĩ Lý luận chính trị, Học viện Chính trị Quốc gia Hồ Chí Minh",
      "Thạc sĩ Triết học, Đại học Khoa học Xã hội và Nhân văn",
      "Cao cấp lý luận chính trị",
    ],
    career: [
      { year: "2025 - Nay", position: "Phó Trưởng Ban Tuyên giáo và Dân vận Trung ương" },
      { year: "2021 - 2025", position: "Vụ trưởng Vụ Tuyên truyền, Ban Tuyên giáo TW" },
      { year: "2017 - 2021", position: "Phó Vụ trưởng Vụ Văn hóa - Văn nghệ, Ban Tuyên giáo TW" },
      { year: "2013 - 2017", position: "Chuyên viên chính, Vụ Văn hóa - Văn nghệ" },
    ],
    achievements: [
      "Bằng khen của Ban Tuyên giáo Trung ương",
      "Giải thưởng Phụ nữ Việt Nam tiêu biểu",
      "Chiến sĩ thi đua cơ sở nhiều năm",
    ],
    bio: `
      <p>Đồng chí Đinh Thị Mai là nữ cán bộ trẻ tài năng, có nhiều đóng góp trong lĩnh vực tuyên truyền và văn hóa - văn nghệ của Đảng.</p>
      
      <h2>Công tác tuyên truyền</h2>
      <p>Đồng chí đã tổ chức thành công nhiều chiến dịch tuyên truyền lớn, đặc biệt trong các dịp kỷ niệm quan trọng của Đảng, góp phần nâng cao nhận thức và niềm tin của nhân dân vào sự lãnh đạo của Đảng.</p>

      <h2>Văn hóa - Văn nghệ</h2>
      <p>Với kinh nghiệm trong lĩnh vực văn hóa - văn nghệ, đồng chí đã đóng góp tích cực vào việc phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc theo đường lối văn hóa của Đảng.</p>
    `,
  },
};

// Helper functions
export function getAllLeaders(): Leader[] {
  return Object.values(leadersData);
}

export function getLeadersByPosition(position: string): Leader[] {
  return getAllLeaders().filter(leader => leader.position.includes(position));
}
