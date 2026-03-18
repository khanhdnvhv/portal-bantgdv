// ── Mock data for documents (Văn bản) ──────────────────────────────

export interface Document {
  id: string;
  title: string;
  code: string; // Số ký hiệu văn bản
  type: string; // Loại văn bản: Nghị quyết, Chỉ thị, Quyết định, etc.
  issuer: string; // Cơ quan ban hành
  signDate: string; // Ngày ký
  effectiveDate: string; // Ngày hiệu lực
  category: string; // Lĩnh vực
  summary: string;
  content: string;
  attachments: { name: string; url: string; size: string }[];
  tags: string[];
  views: number;
  downloads: number;
}

export const documentsData: Record<string, Document> = {
  "d1": {
    id: "d1",
    title: "Nghị quyết số 57-NQ/TW về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia",
    code: "57-NQ/TW",
    type: "Nghị quyết",
    issuer: "Ban Chấp hành Trung ương Đảng",
    signDate: "22/12/2024",
    effectiveDate: "22/12/2024",
    category: "Khoa học - Công nghệ",
    summary: "Nghị quyết xác định đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia là nhiệm vụ trọng tâm, then chốt để đưa đất nước phát triển nhanh và bền vững.",
    content: `
      <h2>I. QUAN ĐIỂM CHỈ ĐẠO</h2>
      <p>Phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là quốc sách hàng đầu, động lực quan trọng nhất để nâng cao năng suất, chất lượng, hiệu quả, sức cạnh tranh của nền kinh tế; là đột phá chiến lược để phát triển nhanh và bền vững đất nước.</p>
      
      <p>Chuyển đổi số quốc gia là yêu cầu khách quan, xu thế tất yếu và là cơ hội lớn để Việt Nam phát triển nhanh, bền vững. Tận dụng thời cơ, vượt qua thách thức của cách mạng công nghiệp lần thứ tư để rút ngắn khoảng cách phát triển so với các nước trong khu vực và thế giới.</p>

      <h2>II. MỤC TIÊU TỔNG QUÁT</h2>
      <p>Đến năm 2030, khoa học, công nghệ, đổi mới sáng tạo trở thành động lực chính, có đóng góp quan trọng vào tăng trưởng kinh tế và chuyển dịch cơ cấu kinh tế theo hướng hiện đại; nâng cao năng suất lao động, chất lượng cuộc sống của nhân dân; bảo vệ môi trường và ứng phó với biến đổi khí hậu.</p>

      <h3>Mục tiêu cụ thể đến năm 2030:</h3>
      <ul>
        <li>Đóng góp của năng suất các nhân tố tổng hợp (TFP) vào tăng trưởng GDP đạt trên 50%</li>
        <li>Chi cho nghiên cứu và phát triển đạt tối thiểu 2% GDP</li>
        <li>Nền kinh tế số đạt 30% GDP; kinh tế xã hội số được hình thành và phát triển toàn diện</li>
        <li>Số doanh nghiệp công nghệ số tăng gấp đôi so với năm 2025</li>
        <li>Có ít nhất 5 trường đại học Việt Nam trong top 500 châu Á về nghiên cứu khoa học</li>
        <li>Xếp hạng chỉ số đổi mới sáng tạo toàn cầu (GII) thuộc nhóm 35 nước dẫn đầu</li>
      </ul>

      <h2>III. NHIỆM VỤ VÀ GIẢI PHÁP CHỦ YẾU</h2>

      <h3>1. Về hoàn thiện thể chế, chính sách</h3>
      <p>Xây dựng, hoàn thiện hệ thống thể chế, chính sách đồng bộ, thống nhất, hiện đại, minh bạch, thuận lợi cho phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số. Tập trung ưu tiên nguồn lực cho phát triển khoa học, công nghệ, đổi mới sáng tạo.</p>

      <h3>2. Về phát triển nguồn nhân lực</h3>
      <p>Đào tạo, thu hút, trọng dụng nhân tài; xây dựng đội ngũ trí thức khoa học và công nghệ đủ về số lượng, có cơ cấu hợp lý và chất lượng cao. Đẩy mạnh đào tạo nguồn nhân lực chất lượng cao, đặc biệt trong các lĩnh vực công nghệ tiên tiến.</p>

      <h3>3. Về ứng dụng, chuyển giao công nghệ</h3>
      <p>Đẩy mạnh nghiên cứu, ứng dụng, chuyển giao công nghệ tiên tiến, đặc biệt là công nghệ số, công nghệ sinh học, công nghệ mới, công nghệ vật liệu mới, năng lượng mới, bền vững.</p>

      <h3>4. Về chuyển đổi số quốc gia</h3>
      <p>Triển khai toàn diện, đồng bộ chuyển đổi số trong các cơ quan Đảng, Nhà nước, các tổ chức chính trị - xã hội, doanh nghiệp và xã hội. Phát triển Chính phủ số, kinh tế số, xã hội số. Xây dựng hạ tầng số hiện đại, an toàn, bảo mật.</p>

      <h3>5. Về phát triển doanh nghiệp công nghệ</h3>
      <p>Tạo môi trường thuận lợi để phát triển mạnh mẽ các doanh nghiệp khoa học và công nghệ, doanh nghiệp công nghệ số, nhất là các doanh nghiệp công nghệ cao, doanh nghiệp đổi mới sáng tạo. Hỗ trợ doanh nghiệp nâng cao năng lực nghiên cứu, phát triển và ứng dụng công nghệ.</p>

      <h2>IV. TỔ CHỨC THỰC HIỆN</h2>
      <p>Ban Chấp hành Trung ương, Bộ Chính trị, Ban Bí thư lãnh đạo, chỉ đạo toàn Đảng, toàn dân, toàn quân triển khai thực hiện Nghị quyết. Các cấp ủy đảng, chính quyền, đoàn thể, doanh nghiệp, tổ chức và mỗi người dân tích cực tham gia thực hiện.</p>

      <p>Ban Tuyên giáo Trung ương chủ trì, phối hợp với các cơ quan liên quan theo dõi, đôn đốc, kiểm tra, sôi nổi, báo cáo kết quả thực hiện Nghị quyết.</p>
    `,
    attachments: [
      { name: "Nghị quyết 57-NQ/TW (bản đầy đủ).pdf", url: "#", size: "2.5 MB" },
      { name: "Kế hoạch triển khai Nghị quyết 57.pdf", url: "#", size: "1.8 MB" },
    ],
    tags: ["Nghị quyết 57", "Khoa học công nghệ", "Chuyển đổi số", "Đổi mới sáng tạo"],
    views: 25678,
    downloads: 4532,
  },
  "d2": {
    id: "d2",
    title: "Chỉ thị số 05-CT/TW về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    code: "05-CT/TW",
    type: "Chỉ thị",
    issuer: "Bộ Chính trị",
    signDate: "15/05/2016",
    effectiveDate: "15/05/2016",
    category: "Xây dựng Đảng",
    summary: "Chỉ thị về việc tiếp tục đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh nhằm xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh.",
    content: `
      <h2>I. SỰ CẦN THIẾT</h2>
      <p>Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh là nhiệm vụ lâu dài, thường xuyên của toàn Đảng, toàn dân, toàn quân; là yêu cầu khách quan, vừa là động lực to lớn thúc đẩy sự nghiệp cách mạng của Đảng và dân tộc ta tiến lên.</p>

      <h2>II. MỤC ĐÍCH, YÊU CẦU</h2>
      <p>Nâng cao nhận thức, trách nhiệm của các cấp ủy đảng, chính quyền, cơ quan, đơn vị, địa phương, tổ chức đảng, đoàn thể, mỗi cán bộ, đảng viên và các tầng lớp nhân dân về học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.</p>

      <h2>III. NỘI DUNG VÀ GIẢI PHÁP</h2>
      <h3>1. Đối với cán bộ, đảng viên</h3>
      <ul>
        <li>Học tập, quán triệt sâu sắc tư tưởng, đạo đức, phong cách Hồ Chí Minh</li>
        <li>Kiên định mục tiêu, lý tưởng cách mạng; giữ gìn phẩm chất đạo đức trong sáng</li>
        <li>Nêu cao tinh thần trách nhiệm, gương mẫu, đi đầu trong học tập và làm theo Bác</li>
      </ul>

      <h3>2. Đối với tổ chức đảng</h3>
      <ul>
        <li>Xây dựng tổ chức đảng trong sạch, vững mạnh</li>
        <li>Thường xuyên tự phê bình và phê bình, kiểm điểm</li>
        <li>Chăm lo xây dựng đội ngũ cán bộ, đảng viên</li>
      </ul>

      <h2>IV. TỔ CHỨC THỰC HIỆN</h2>
      <p>Các cấp ủy đảng, người đứng đầu cấp ủy, chính quyền, cơ quan, đơn vị, địa phương chịu trách nhiệm tổ chức triển khai thực hiện Chỉ thị.</p>
    `,
    attachments: [
      { name: "Chỉ thị 05-CT/TW.pdf", url: "#", size: "1.2 MB" },
      { name: "Hướng dẫn triển khai Chỉ thị 05.docx", url: "#", size: "850 KB" },
    ],
    tags: ["Chỉ thị 05", "Học tập Bác Hồ", "Xây dựng Đảng"],
    views: 18765,
    downloads: 3421,
  },
  "d3": {
    id: "d3",
    title: "Nghị quyết số 04-NQ/TW về tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, những biểu hiện 'tự diễn biến', 'tự chuyển hóa' trong nội bộ",
    code: "04-NQ/TW",
    type: "Nghị quyết",
    issuer: "Ban Chấp hành Trung ương Đảng khóa XIII",
    signDate: "07/01/2022",
    effectiveDate: "07/01/2022",
    category: "Xây dựng Đảng",
    summary: "Nghị quyết về tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống trong nội bộ.",
    content: `
      <h2>I. BỐI CẢNH VÀ SỰ CẦN THIẾT</h2>
      <p>Tình hình thế giới và trong nước tiếp tục có nhiều diễn biến phức tạp, khó lường. Các thế lực thù địch gia tăng hoạt động "diễn biến hòa bình", chống phá Đảng, Nhà nước và chế độ ta.</p>

      <h2>II. MỤC ĐÍCH, YÊU CẦU</h2>
      <p>Nâng cao nhận thức, trách nhiệm của toàn Đảng, toàn dân, toàn quân về tình hình suy thoái về tư tưởng chính trị, đạo đức, lối sống và "tự diễn biến", "tự chuyển hóa" trong nội bộ; kiên quyết ngăn chặn, đẩy lùi có hiệu quả.</p>

      <h2>III. NHIỆM VỤ VÀ GIẢI PHÁP</h2>
      <h3>1. Nâng cao nhận thức, trách nhiệm</h3>
      <p>Tăng cường giáo dục chính trị, tư tưởng cho cán bộ, đảng viên; nâng cao cảnh giác cách mạng, kiên định lý tưởng, mục tiêu của Đảng.</p>

      <h3>2. Xây dựng Đảng trong sạch, vững mạnh</h3>
      <p>Thực hiện nghiêm nguyên tắc tập trung dân chủ, tự phê bình và phê bình; kiên quyết đấu tranh chống những biểu hiện suy thoái, "tự diễn biến", "tự chuyển hóa".</p>

      <h3>3. Tăng cường kiểm tra, giám sát</h3>
      <p>Nâng cao chất lượng, hiệu quả công tác kiểm tra, giám sát, kỷ luật đảng; xử lý nghiêm minh cán bộ, đảng viên vi phạm.</p>
    `,
    attachments: [
      { name: "Nghị quyết 04-NQ/TW.pdf", url: "#", size: "1.9 MB" },
      { name: "Kế hoạch thực hiện NQ04.pdf", url: "#", size: "1.3 MB" },
    ],
    tags: ["Nghị quyết 04", "Xây dựng Đảng", "Chỉnh đốn Đảng"],
    views: 22345,
    downloads: 4123,
  },
  "d4": {
    id: "d4",
    title: "Quyết định số 2354/QĐ-BTGDV về ban hành Quy chế hoạt động của Ban Tuyên giáo và Dân vận",
    code: "2354/QĐ-BTGDV",
    type: "Quyết định",
    issuer: "Ban Tuyên giáo và Dân vận",
    signDate: "15/01/2026",
    effectiveDate: "01/02/2026",
    category: "Tổ chức - Nhân sự",
    summary: "Quyết định ban hành Quy chế hoạt động của Ban Tuyên giáo và Dân vận, quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức.",
    content: `
      <h2>Chương I: QUY ĐỊNH CHUNG</h2>
      <h3>Điều 1. Phạm vi điều chỉnh và đối tượng áp dụng</h3>
      <p>Quy chế này quy định chức năng, nhiệm vụ, quyền hạn, cơ cấu tổ chức và mối quan hệ công tác của Ban Tuyên giáo và Dân vận.</p>

      <h3>Điều 2. Vị trí và chức năng</h3>
      <p>Ban Tuyên giáo và Dân vận là cơ quan tham mưu, giúp việc cấp ủy về công tác tuyên giáo, công tác dân vận và công tác văn hóa tư tưởng.</p>

      <h2>Chương II: NHIỆM VỤ VÀ QUYỀN HẠN</h2>
      <h3>Điều 3. Nhiệm vụ chính</h3>
      <ul>
        <li>Tham mưu cho cấp ủy về công tác tuyên giáo, dân vận</li>
        <li>Theo dõi, kiểm tra việc thực hiện nghị quyết, chỉ thị của Đảng</li>
        <li>Tổ chức tuyên truyền, giáo dục chính trị, tư tưởng</li>
        <li>Quản lý hoạt động báo chí, xuất bản, văn hóa văn nghệ</li>
      </ul>

      <h2>Chương III: TỔ CHỨC BỘ MÁY</h2>
      <h3>Điều 4. Cơ cấu tổ chức</h3>
      <p>Ban Tuyên giáo và Dân vận gồm:</p>
      <ul>
        <li>Lãnh đạo: Trưởng ban, các Phó Trưởng ban</li>
        <li>Các phòng chuyên môn, nghiệp vụ</li>
        <li>Các đơn vị trực thuộc</li>
      </ul>
    `,
    attachments: [
      { name: "Quyết định 2354-BTGDV.pdf", url: "#", size: "2.1 MB" },
      { name: "Quy chế hoạt động (toàn văn).pdf", url: "#", size: "3.2 MB" },
    ],
    tags: ["Quy chế", "Ban Tuyên giáo", "Tổ chức"],
    views: 8765,
    downloads: 2134,
  },
  "d5": {
    id: "d5",
    title: "Kế hoạch số 156-KH/BTGDV triển khai Nghị quyết 57-NQ/TW năm 2026",
    code: "156-KH/BTGDV",
    type: "Kế hoạch",
    issuer: "Ban Tuyên giáo và Dân vận",
    signDate: "10/02/2026",
    effectiveDate: "10/02/2026",
    category: "Kế hoạch",
    summary: "Kế hoạch triển khai thực hiện Nghị quyết 57-NQ/TW về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số.",
    content: `
      <h2>I. MỤC ĐÍCH, YÊU CẦU</h2>
      <p>Triển khai thực hiện có hiệu quả Nghị quyết 57-NQ/TW trong toàn hệ thống; nâng cao nhận thức, trách nhiệm của cán bộ, đảng viên về vai trò của khoa học công nghệ.</p>

      <h2>II. NỘI DUNG TRIỂN KHAI</h2>
      <h3>1. Công tác tuyên truyền</h3>
      <ul>
        <li>Tổ chức hội nghị, tập huấn về Nghị quyết 57</li>
        <li>Xuất bản tài liệu hướng dẫn, tuyên truyền</li>
        <li>Đưa tin, bài trên các phương tiện thông tin đại chúng</li>
      </ul>

      <h3>2. Chuyển đổi số nội bộ</h3>
      <ul>
        <li>Xây dựng cổng thông tin điện tử hiện đại</li>
        <li>Số hóa hồ sơ, tài liệu</li>
        <li>Ứng dụng công nghệ trong quản lý, điều hành</li>
      </ul>

      <h3>3. Đào tạo nguồn nhân lực</h3>
      <ul>
        <li>Tổ chức đào tạo, bồi dưỡng về chuyển đổi số</li>
        <li>Nâng cao năng lực ứng dụng công nghệ cho cán bộ</li>
      </ul>

      <h2>III. TỔ CHỨC THỰC HIỆN</h2>
      <p>Giao Văn phòng chủ trì, phối hợp các phòng, đơn vị liên quan triển khai thực hiện Kế hoạch; định kỳ báo cáo kết quả về Ban Lãnh đạo.</p>
    `,
    attachments: [
      { name: "Kế hoạch 156-BTGDV.pdf", url: "#", size: "1.5 MB" },
      { name: "Phụ lục kế hoạch chi tiết.xlsx", url: "#", size: "450 KB" },
    ],
    tags: ["Kế hoạch", "Nghị quyết 57", "Triển khai"],
    views: 6543,
    downloads: 1876,
  },
  "d6": {
    id: "d6",
    title: "Thông báo số 789-TB/BTGDV kết luận của Trưởng ban tại Hội nghị giao ban tháng 3/2026",
    code: "789-TB/BTGDV",
    type: "Thông báo",
    issuer: "Ban Tuyên giáo và Dân vận",
    signDate: "05/03/2026",
    effectiveDate: "05/03/2026",
    category: "Văn bản hành chính",
    summary: "Thông báo kết luận của Trưởng ban tại Hội nghị giao ban tháng 3/2026 về nhiệm vụ trọng tâm và giải pháp thực hiện.",
    content: `
      <h2>NỘI DUNG KẾT LUẬN</h2>
      
      <h3>I. Đánh giá kết quả tháng 2/2026</h3>
      <p>Các phòng, đơn vị đã tích cực triển khai nhiệm vụ, hoàn thành cơ bản kế hoạch đề ra. Công tác tuyên truyền Hội nghị Trung ương được thực hiện kịp thời, hiệu quả.</p>

      <h3>II. Nhiệm vụ trọng tâm tháng 3/2026</h3>
      <ul>
        <li>Tập trung tuyên truyền Nghị quyết Hội nghị Trung ương 15</li>
        <li>Triển khai xây dựng cổng thông tin điện tử mới</li>
        <li>Tổ chức Hội nghị tập huấn nghiệp vụ cho cán bộ</li>
        <li>Chuẩn bị Đại hội Chi bộ nhiệm kỳ 2026-2028</li>
      </ul>

      <h3>III. Yêu cầu</h3>
      <p>Trưởng ban yêu cầu các phòng, đơn vị khẩn trương triển khai nhiệm vụ được giao; chủ động phối hợp, báo cáo kết quả thực hiện theo quy định.</p>
    `,
    attachments: [
      { name: "Thông báo 789-TB.pdf", url: "#", size: "800 KB" },
    ],
    tags: ["Thông báo", "Giao ban", "Kết luận"],
    views: 4321,
    downloads: 987,
  },
  "d7": {
    id: "d7",
    title: "Công văn số 1234/CV-BTGDV về việc tổ chức Hội nghị tập huấn nghiệp vụ năm 2026",
    code: "1234/CV-BTGDV",
    type: "Công văn",
    issuer: "Ban Tuyên giáo và Dân vận",
    signDate: "20/02/2026",
    effectiveDate: "20/02/2026",
    category: "Văn bản hành chính",
    summary: "Công văn về việc tổ chức Hội nghị tập huấn nghiệp vụ công tác tuyên giáo cho cán bộ các phòng, đơn vị năm 2026.",
    content: `
      <h2>NỘI DUNG CÔNG VĂN</h2>
      
      <p>Để nâng cao năng lực, trình độ nghiệp vụ cho đội ngũ cán bộ làm công tác tuyên giáo, Ban Tuyên giáo và Dân vận tổ chức Hội nghị tập huấn nghiệp vụ năm 2026.</p>

      <h3>I. Thời gian, địa điểm</h3>
      <ul>
        <li>Thời gian: Ngày 15-17/4/2026</li>
        <li>Địa điểm: Trung tâm Hội nghị quốc gia</li>
      </ul>

      <h3>II. Đối tượng tham dự</h3>
      <ul>
        <li>Toàn thể cán bộ, công chức, viên chức của Ban</li>
        <li>Đại diện Ban Tuyên giáo các tỉnh, thành phố</li>
      </ul>

      <h3>III. Nội dung tập huấn</h3>
      <ul>
        <li>Nghị quyết, chỉ thị mới của Đảng về công tác tuyên giáo</li>
        <li>Kỹ năng nghiệp vụ trong công tác tuyên truyền</li>
        <li>Ứng dụng công nghệ số trong công tác tuyên giáo</li>
      </ul>

      <h3>IV. Yêu cầu</h3>
      <p>Các phòng, đơn vị cử đại biểu tham dự đầy đủ; chuẩn bị tài liệu, báo cáo theo hướng dẫn.</p>
    `,
    attachments: [
      { name: "Công văn 1234-CV.pdf", url: "#", size: "650 KB" },
      { name: "Chương trình tập huấn.pdf", url: "#", size: "1.1 MB" },
      { name: "Danh sách tham dự.xlsx", url: "#", size: "120 KB" },
    ],
    tags: ["Công văn", "Tập huấn", "Hội nghị"],
    views: 5678,
    downloads: 1543,
  },
};

// Helper functions
export function getAllDocuments(): Document[] {
  return Object.values(documentsData);
}

export function getDocumentsByType(type: string): Document[] {
  return getAllDocuments().filter(doc => doc.type === type);
}

export function getDocumentsByCategory(category: string): Document[] {
  return getAllDocuments().filter(doc => doc.category === category);
}

export function getFeaturedDocuments(limit: number = 6): Document[] {
  return getAllDocuments()
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getRecentDocuments(limit: number = 5): Document[] {
  return getAllDocuments()
    .sort((a, b) => {
      const dateA = a.signDate.split('/').reverse().join('-');
      const dateB = b.signDate.split('/').reverse().join('-');
      return dateB.localeCompare(dateA);
    })
    .slice(0, limit);
}
