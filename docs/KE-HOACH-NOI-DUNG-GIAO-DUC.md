# Kế hoạch nội dung chuyên mục Giáo dục — Nhìn lại giáo dục qua dòng lịch sử thế giới

**Ngày lập:** 27/11/2026  
**Chuyên mục đề xuất:** `giao-duc` (Giáo dục)  
**Phạm vi mùa đầu:** 24 bài / 6 chặng / 12 tuần  
**Nhịp xuất bản gợi ý:** 2 bài/tuần (Thứ Tư và Chủ nhật), bắt đầu 02/12/2026  
**Tên hiển thị đề xuất:** **Giáo dục — Từ trường học đến đời sống**

> **Cập nhật 27/11/2026:** bài 1 đã biên soạn và đưa vào `src/content/giao-duc/vi-sao-con-nguoi-bat-dau-lap-truong.md`, chuyên mục `giao-duc` đã khai báo trong `src/data/posts.ts`, xuất hiện trên menu, trang chủ (`CHỌN MỘT LỐI ĐI`, ô 08), trang `/chuyen-muc/giao-duc`, tìm kiếm, RSS và sitemap. `npm run build` thành công. Các bài 2–24 vẫn là dự kiến.

> Đây là kế hoạch biên soạn. Các bài chưa viết giữ trong `docs/` dạng định hướng; khi hoàn tất được đưa vào `src/content/giao-duc/`.

## 1. Mục tiêu và phạm vi

Xây dựng một chuỗi bài tổng quát về **các vấn đề của giáo dục được nhìn theo dòng lịch sử thế giới**: vì sao con người lập trường, ai được phép học, người thầy được hiểu ra sao, nhà trường ra đời và thay đổi thế nào, và vì sao những câu hỏi cũ vẫn còn sống trong lớp học hôm nay.

Chuỗi không phải là giáo trình lịch sử giáo dục, cũng không nhằm liệt kê mốc năm sinh – năm mất của từng nhà tư tưởng. Mỗi bài đi từ một câu hỏi gần gũi của người đọc hiện đại, dừng lại ở một khoảnh khắc hoặc một ý niệm trong lịch sử, rồi trở về đời sống với một câu hỏi có thể mang theo.

Mùa đầu gồm **24 bài**, chia thành **6 chặng**: cổ đại, trung cổ, phục hưng – khai sáng, thế kỷ 19, thế kỷ 20 và đương đại. Người đọc có thể bắt đầu từ bất kỳ bài nào; khi đọc theo thứ tự, các bài tạo thành một mạch chuyển từ "học để sống" đến "học để cùng sống".

## 2. Về việc mở chuyên mục mới

Các tài liệu hiện hành (`AGENTS.md`, `docs/TAO-BAI-VIET.md`, `src/data/posts.ts`) ghi nhận **6 chuyên mục cố định**. Chuyên mục Giáo dục là một mở rộng có chủ đích theo yêu cầu biên tập. Trước khi đăng bài đầu tiên, cần hoàn tất:

1. Thêm vào `src/data/posts.ts` một dòng:
   `{ slug: 'giao-duc', name: 'Giáo dục', description: 'Nhìn lại việc học và dạy qua dòng lịch sử thế giới, để hiểu lớp học hôm nay rõ hơn.' }`
2. Tạo thư mục `src/content/giao-duc/` để lưu bài.
3. **Không cần sửa `src/content.config.ts`**: loader `glob` đã nhận mọi tệp `.md` trong `src/content`.
4. Sau khi thêm vào `posts.ts`, chuyên mục tự xuất hiện trên thanh điều hướng của `SiteHeader`, tự có trang `/chuyen-muc/giao-duc` (do `getStaticPaths()` tạo), tự nằm trong ô tìm kiếm, RSS, sitemap và trang chủ theo cơ chế hiện có của blog.
5. Cập nhật `docs/TAO-BAI-VIET.md` để danh sách 6 chuyên mục thành 7; nếu giữ nguyên văn bản "6 chuyên mục cố định" trong `AGENTS.md`, cần ghi chú rõ đây là chuyên mục thứ bảy được thêm theo kế hoạch này.
6. Mọi trang công khai mới (nếu có) đều dùng `BaseLayout` để bảo đảm header, footer và nút về đầu trang nhất quán. Kế hoạch này chưa dự kiến trang lộ trình riêng; nếu sau này cần sơ đồ 24 bài, lập kế hoạch riêng như trường hợp `/trang-tu`.

## 3. Đối tượng đọc và giọng viết

**Đối tượng:** giáo viên, phụ huynh, người đang học hoặc tự học, và độc giả quan tâm đến vì sao nhà trường lại như hiện nay. Không giả định người đọc có kiến thức chuyên ngành lịch sử giáo dục.

**Giọng viết:** điềm tĩnh, cụ thể, có người và có việc. Tiêu đề gợi một câu hỏi hoặc một lợi ích, không giật tít. Một bài giữ một ý chính; không biến lịch sử thành bài giảng, cũng không dùng quá khứ để kết án hiện tại. Tránh các từ tuyệt đối như "duy nhất", "chắc chắn", "luôn luôn"; không hứa hẹn thay đổi đời người.

## 4. Nguyên tắc biên tập riêng của chuyên mục

- **Đi từ hiện tại đến quá khứ, rồi trở lại hiện tại.** Mở bài bằng một tình huống lớp học, gia đình hoặc công việc; không mở bằng danh sách năm tháng.
- **Phân biệt tư tưởng với bằng chứng.** Khi kể về Socrates hay Khổng Tử, nói rõ đó là tư tưởng được truyền lại qua văn bản, không phải lời ghi âm hay sự kiện được xác minh từng chi tiết.
- **Không chỉ nhìn từ châu Âu.** Các chặng cổ đại và trung cổ luôn có đối trọng từ Trung Hoa, Ấn Độ và thế giới Hồi giáo. Không gộp các truyền thống thành "một lời dạy chung".
- **Không dùng thước đo một thời kỳ để chấm điểm thời kỳ khác.** Nói rõ điều kiện lịch sử (ai được học, học để làm gì, ai trả tiền cho việc học) trước khi nhận xét.
- **Giữ người học ở trung tâm.** Mỗi bài hỏi: điều này ảnh hưởng thế nào đến đứa trẻ, người thầy và người học trưởng thành đang ngồi trước trang viết?
- **Nguồn phải truy ngược được.** Ghi tên văn bản, người dịch/ấn bản (nếu trích), và đường dẫn hoặc số trang. Với tài liệu học thuật hiện đại, chỉ tóm lược và ghi rõ đây là diễn ý của người viết.
- **Tránh trích dài từ bản dịch có bản quyền.** Ưu tiên diễn giải bằng lời của blog; khi trích, dùng đoạn ngắn phục vụ bình luận và nêu nguồn ngay tại bài.

## 5. Cấu trúc một bài chuẩn

1. **Mở cảnh:** 100–150 từ, một người đang học hoặc đang dạy trong một tình huống cụ thể.
2. **Câu hỏi lịch sử:** một câu dẫn từ cảnh ấy sang vấn đề được xét trong bài.
3. **Dừng lại tại một mốc hoặc ý niệm:** kể lại bằng lời người viết, nêu thời kỳ, địa điểm và nguồn nền; chỉ đưa chi tiết thật sự cần phân tích.
4. **Đọc kỹ 2–3 ý:** giải thích thuật ngữ lần đầu xuất hiện (paideia, scribal school, madrasa, tự nhiên, trực quan, vùng phát triển gần…).
5. **Trở về lớp học hôm nay:** một liên hệ cụ thể, có thể là lớp học, gia đình hoặc nơi làm việc; phân biệt rõ đâu là lịch sử, đâu là đề xuất của người viết.
6. **Giới hạn cần lưu ý:** điều không nên suy diễn từ ví dụ lịch sử (ví dụ: không đồng nhất "để trẻ tự do" của Rousseau với việc không hướng dẫn).
7. **Câu hỏi mang theo:** 1–2 câu, có thể kèm một việc quan sát nhỏ, không bắt buộc bài nào cũng có bài tập.
8. **Nguồn và đường đọc tiếp:** văn bản/ấn bản đối chiếu, liên kết tới bài đã có trong chuyên mục hoặc các chuyên mục Đạo & đời, Phật giáo khi thật sự liên quan.

**Độ dài gợi ý:** 900–1.300 từ/bài. Bài mở đầu (bài 1) và bài tổng kết (bài 24) có thể ngắn hơn, khoảng 700–1.000 từ.

## 6. Lộ trình 24 bài

Tiêu đề và câu hỏi dưới đây là định hướng biên tập, có thể chỉnh khi viết nhưng giữ nguyên chặng và ý chính. Mỗi chặng 4 bài; bài 1 làm cửa vào chuỗi, bài 24 khép chuỗi.

### Chặng 1 — Khởi đầu: học để sống và để thành người (bài 1–4)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 1 | Vì sao con người bắt đầu lập trường? | Trường văn thư ở Lưỡng Hà và Ai Cập cổ đại; chữ viết, sổ đất sét và nghề thầy tế | Khi mình dạy một người khác, mình đang truyền điều gì ngoài thông tin? |
| 2 | Paideia: người Hy Lạp cổ đại muốn đứa trẻ thành ai? | Socrates, Plato, Aristotle; Academy và Lyceum | Thành công mà mình đang hướng cho con mình được đo bằng gì? |
| 3 | Khổng Tử, Mạnh Tử: học để thành người, không chỉ để làm quan | Luận Ngữ, Mạnh Tử; giáo dục Nho học trong bối cảnh loạn lạc | Mình đang học để biết thêm, hay để được công nhận? |
| 4 | Ngồi dưới chân thầy: học bằng sống cùng người biết | Truyền thống guru–śiṣya và các trung tâm tu học Phật giáo ở Ấn Độ | Điều gì chỉ có thể học được khi ở bên một người giỏi, không phải chỉ đọc về họ? |

### Chặng 2 — Trung cổ: giữ tri thức trong khuôn đức tin (bài 5–8)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 5 | Khi trường học là nơi giữ lửa | Tu viện châu Âu trung cổ; chép sách, latin và kỷ luật ngày giờ | Điều gì trong lịch hôm nay đang giữ mình khỏi rơi rạc? |
| 6 | Nhà thông thái và câu hỏi được phép hỏi | Bayt al-Hikma, Al-Azhar; dịch thuật và học vòng tròn trong thế giới Hồi giáo | Mình có đang đặt câu hỏi trước khi tìm câu trả lời không? |
| 7 | Bologna, Oxford: thầy trò tự quản và tấm bằng đầu tiên | Đại học trung cổ; guild giảng viên, sinh viên và bằng cấp | Bằng cấp đang đo năng lực hay đang đo thời gian ngồi học? |
| 8 | Học nghề, học trong bếp và trong nhà | Truyền nghề, học việc và giáo dục gia đình thời trung cổ | Kỹ năng nào mình đang có mà không nhớ từng được "dạy" lúc nào? |

### Chặng 3 — Phục hưng đến khai sáng: cá nhân và quốc gia (bài 9–12)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 9 | Học lại tiếng người, không chỉ tiếng Latin | Phục hưng; Erasmus, Montaigne và ngôn ngữ bản địa | Mình có đang dùng ngôn ngữ của người khác để nghĩ về đời mình? |
| 10 | Khi đọc sách trở thành việc của mọi người | Cải cách tôn giáo, Luther và các trường dạy đọc phổ thông | Việc phổ biến tri thức mang theo trách nhiệm gì? |
| 11 | Comenius và giấc mộng dạy tất cả mọi người | *Didactica Magna*; sách in, hình ảnh và lớp học cho trẻ nhỏ | Mình đang dạy cho người trước mặt hay cho một "học sinh lý tưởng"? |
| 12 | Để trẻ lớn theo tự nhiên — và cái giá của tự do | Rousseau, *Émile*; giáo dục tự nhiên và giới hạn của nó | "Tự do" trong học tập cần có những giới hạn nào để không thành bỏ mặc? |

### Chặng 4 — Thế kỷ 19: nhà trường của quốc gia và công dân (bài 13–16)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 13 | Trực quan, vui chơi và cái mầm non đầu tiên | Pestalozzi, Froebel; Kindergarten và đồ chơi giáo dục | Trẻ học bằng tay và bằng chơi ở chỗ nào trong ngày của mình? |
| 14 | Mô hình Phổ: trường bắt buộc, đồng nhất và cái được của nó | Cải cách giáo dục Phổ; phổ thông, kỷ luật, giáo viên được đào tạo | Mình đang giữ điều gì tốt từ kỷ luật mà không cần giữ sự cứng nhắc? |
| 15 | Kiến thức nào đáng học nhất? | Spencer và cuộc tranh luận kinh điển – khoa học trong thế kỷ 19 | Nếu chỉ dạy được một điều trong tuần này, mình chọn điều gì? |
| 16 | Môi trường chuẩn bị và đứa trẻ tự chọn | Montessori; đầu thế kỷ XX, nhưng bắt nguồn từ câu hỏi thế kỷ XIX về trẻ nhỏ | Mình đang sửa trẻ hay đang sửa chỗ trẻ ngồi? |

### Chặng 5 — Thế kỷ 20: học bằng làm, giải phóng và công bằng (bài 17–20)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 17 | Học bằng làm: Dewey và trường học như xã hội nhỏ | John Dewey, Laboratory School ở Chicago; *Experience and Education* | Điều mình học hôm nay có chỗ nào được áp dụng ngay không? |
| 18 | Trẻ tự dựng hiểu biết; thầy là người nâng đỡ | Piaget và Vygotsky; kiến tạo và vùng phát triển gần | Mình đang giải thích thay người học, hay đang tạo chỗ cho họ tự hiểu? |
| 19 | Đừng "gửi" tri thức vào đầu người học | Paulo Freire, *Pedagogy of the Oppressed*; giáo dục đối thoại | Trong cuộc trò chuyện hôm nay, ai đang chỉ được nghe? |
| 20 | Ai được ngồi vào bàn học? | Phong trào dân quyền, *Brown v. Board of Education*; giáo dục nữ và bất bình đẳng tiếp cận | Cơ hội học tập ở nơi mình đang sống đang mở cho ai, khép với ai? |

### Chặng 6 — Đương đại: kế thừa và câu hỏi mới (bài 21–24)

| Bài | Tiêu đề dự kiến | Điểm dừng lịch sử | Câu hỏi mang về |
|---:|---|---|---|
| 21 | Học suốt đời: khi trường học không còn là một giai đoạn | UNESCO và báo cáo Faure, *Learning to Be*; Knowles và giáo dục người lớn | Việc tự học của mình đang có chỗ trong lịch hay chỉ là phần dư? |
| 22 | Điểm số đo được gì, bỏ sót gì | Từ bài kiểm tra truyền thống đến đánh giá năng lực và phản hồi | Điều gì mình giỏi mà không bao giờ xuất hiện trên bảng điểm? |
| 23 | Màn hình, MOOC và trí tuệ nhân tạo | Giáo dục mở, học trực tuyến và trợ lý AI trong lớp học | Khi câu trả lời ở ngay đầu ngón tay, mình còn cần người thầy để làm gì? |
| 24 | Mang câu hỏi lịch sử trở lại lớp học hôm nay | Tổng kết chuỗi; nối bài 1–23 | Trong các câu hỏi đã đi qua, câu nào vẫn đang chờ mình trả lời bằng việc làm? |

Các bài 13 và 16 cùng xoay quanh trẻ nhỏ nhưng khác điểm nhấn: bài 13 nói về trực quan và vui chơi, bài 16 nói về môi trường và quyền tự chọn. Các bài 18 và 19 cùng bàn về vai trò người thầy nhưng khác phạm vi: một bên là nhận thức, một bên là quyền và đối thoại. Khi biên soạn, ghi rõ đoạn/ý đang dùng để tránh lặp ví dụ.

## 7. Nhịp xuất bản và lịch gợi ý

Hai bài mỗi tuần, vào Thứ Tư và Chủ nhật. Ngày dưới đây là lịch nội dung; ngày đăng thực tế ghi trong frontmatter `date` của từng bài. Bản thảo hoàn chỉnh nên có trước ngày đăng ít nhất 7 ngày.

| Tuần | Bài | Ngày đăng gợi ý | Trọng tâm |
|---:|---|---|---|
| 1 | 1–2 | 02/12, 06/12/2026 | Vì sao lập trường; paideia |
| 2 | 3–4 | 09/12, 13/12 | Khổng Tử; học bên thầy |
| 3 | 5–6 | 16/12, 20/12 | Tu viện; nhà thông thái |
| 4 | 7–8 | 23/12, 27/12 | Đại học trung cổ; học nghề |
| 5 | 9–10 | 30/12/2026, 03/01/2027 | Tiếng bản địa; dạy đọc cho mọi người |
| 6 | 11–12 | 06/01, 10/01/2027 | Comenius; Rousseau |
| 7 | 13–14 | 13/01, 17/01 | Pestalozzi, Froebel; mô hình Phổ |
| 8 | 15–16 | 20/01, 24/01 | Spencer; Montessori |
| 9 | 17–18 | 27/01, 31/01 | Dewey; Piaget–Vygotsky |
| 10 | 19–20 | 03/02, 07/02/2027 | Freire; ai được ngồi vào bàn học |
| 11 | 21–22 | 10/02, 14/02 | Học suốt đời; đánh giá |
| 12 | 23–24 | 17/02, 21/02 | AI và màn hình; tổng kết |

Tuần 10 trùng dịp Tết; có thể dời hai bài sang tuần 9 hoặc giữ nguyên nếu bản thảo đã sẵn. Không đăng bài chưa kiểm nguồn chỉ để giữ nhịp.

## 8. Nguồn và kiểm chứng

**Nguồn nền nên dùng khi lập dàn ý:**

- **Lịch sử giáo dục nói chung:** Encyclopaedia Britannica (mục *education, history of*), Stanford Encyclopedia of Philosophy (các mục Socrates, Plato, Aristotle, Rousseau, Dewey, Freire, Piaget, Vygotsky).
- **Văn bản cổ:** *Luận Ngữ*, *Mạnh Tử*; Plato (*Protagoras*, *Republic*), Aristotle (*Politics*); Comenius (*Didactica Magna*); Rousseau (*Émile*). Đối chiếu bản dịch đã chọn và ghi rõ dịch giả khi trích.
- **Hiện đại:** Dewey (*Experience and Education*), Freire (*Pedagogy of the Oppressed*), Montessori (*The Montessori Method*), báo cáo UNESCO (*Learning to Be*, 1972) và các văn bản về *Brown v. Board of Education*. Với tác phẩm còn bản quyền chỉ tóm lược, không sao chép nguyên đoạn dài.
- **Liên hệ Việt Nam:** khi nhắc đến giáo dục Việt Nam, dùng tư liệu có nguồn rõ ràng (văn bản pháp quy, công trình nghiên cứu); không kể giai thoại về thầy cô như sự kiện đã xác minh.

**Phiếu nguồn cho mỗi bài cần có:** tên văn bản/mốc, thời kỳ, nguồn tra cứu (đường dẫn hoặc số trang), người dịch hoặc ấn bản nếu trích, và một dòng ghi điều còn có thể hiểu khác. Lưu phiếu riêng trong `docs/` như cách làm của loạt Trang Tử.

## 9. Quy trình sản xuất

| Mốc | Việc cần làm | Kết quả |
|---|---|---|
| Trước 2 tuần | Chốt một cặp bài, lập phiếu nguồn, viết dàn ý | 2 dàn ý có nguồn |
| Trước 1 tuần | Viết bản nháp đầy đủ, tự rà trùng lặp | 2 bản nháp |
| Trước 2 ngày | Biên tập, kiểm nguồn, thêm liên kết nội bộ, đặt metadata | 2 bài sẵn sàng |
| Ngày đăng | Tạo tệp trong `src/content/giao-duc/`, chạy `npm run build` | Bài lên site |
| Sau 1 ngày | Đọc lại trên giao diện thật, sửa chính tả và liên kết | Bản ổn định |

Nhịp làm việc nên có vùng đệm 7 ngày: chốt và viết trước tuần kế tiếp. Sau bài 12 và bài 18, dừng rà soát một lần để loại bỏ ví dụ và kết luận lặp giữa các chặng.

## 10. Checklist trước khi đăng

- [ ] Frontmatter đủ `title`, `excerpt`, `date`, `category: "giao-duc"`, `tags`.
- [ ] Slug chữ thường, không dấu, gạch ngang; kiểm tra không trùng bài đã có.
- [ ] Bài mở bằng tình huống cụ thể, không phải danh sách năm tháng.
- [ ] Mỗi bài một ý chính; có ít nhất một liên hệ rõ với lớp học hoặc đời sống người đọc.
- [ ] Phân biệt rõ lời văn bản lịch sử với lời bình luận của người viết.
- [ ] Có nguồn truy ngược được; trích ngắn và ghi bản dịch/đường dẫn nếu có trích.
- [ ] Có câu hỏi hoặc việc quan sát để mang theo; không hứa hẹn kết quả tuyệt đối.
- [ ] Có ít nhất một liên kết nội bộ tới bài đã tồn tại; không liên kết tới bài chưa build.
- [ ] `npm run build` thành công; bài xuất hiện trên `/chuyen-muc/giao-duc`, trang chủ, tìm kiếm, `/rss.xml` và sitemap.

## 11. Theo dõi tiến độ

Dùng bốn trạng thái cho mỗi vị trí: `Chưa viết` → `Có dàn ý và nguồn` → `Có bản nháp` → `Đã biên tập và build`.

| Chặng | Số bài | Mục tiêu hoàn thành |
|---|---:|---|
| 1 (bài 1–4) | 4 | Trước 01/12/2026 |
| 2 (bài 5–8) | 4 | Trước 15/12/2026 |
| 3 (bài 9–12) | 4 | Trước 29/12/2026 |
| 4 (bài 13–16) | 4 | Trước 12/01/2027 |
| 5 (bài 17–20) | 4 | Trước 26/01/2027 |
| 6 (bài 21–24) | 4 | Trước 09/02/2027 |

Nếu tiến độ chậm, rút độ dài bài trước, nhưng không bỏ bước kiểm nguồn và rà trùng lặp.

## 12. Tiêu chí hoàn thành

- Đủ 24 bài, đúng 4 bài cho mỗi chặng; bài 24 khép được mạch từ bài 1.
- 100% bài có metadata hợp lệ, nguồn truy ngược được và ít nhất một liên kết nội bộ.
- Không có bài trùng tiêu đề, trùng ý chính hoặc trùng slug với nội dung đã xuất bản.
- Chuyên mục `giao-duc` đã được khai báo trong `posts.ts` và hiển thị đầy đủ trên điều hướng, trang chuyên mục, tìm kiếm, RSS và sitemap.
- `npm run build` thành công, không có liên kết nội bộ hỏng.

## Mẫu frontmatter

```markdown
---
title: "Vì sao con người bắt đầu lập trường?"
excerpt: "Trước khi có lớp học, đã có người ngồi dạy người khác cách ghi nhớ. Điều họ truyền không chỉ là chữ viết."
date: "2026-12-02"
category: "giao-duc"
tags: ["giao-duc", "lich-su-giao-duc"]
---
```
