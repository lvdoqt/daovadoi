# Đạo & Đời

> *Đi qua đời sống bằng một trái tim sáng.*

Website blog tĩnh chiêm nghiệm về triết học phương Đông, đời sống tỉnh thức, Đạo gia, Phật giáo, Kinh Dịch và các thực hành nuôi dưỡng thân tâm.

---

## ✦ Công nghệ sử dụng

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation - SSG)
- **Quản lý nội dung:** Astro Content Collections (Markdown `.md` + YAML Frontmatter)
- **Giao diện & Mỹ thuật:** Vanilla CSS, nghệ thuật SVG cổ phong, typography Noto Serif Display & DM Mono
- **Đồng bộ tự động:** RSS 2.0 Feed, Sơ đồ trang web HTML (`/sitemap`) & XML Sitemap (`/sitemap-index.xml`)

---

## ✦ Cấu trúc thư mục

```text
src/
├── content/              # Tàng thư bài viết Markdown theo chuyên mục
│   ├── cuoc-song/
│   ├── dao-va-doi/
│   ├── phat-giao/
│   ├── dao-duc-kinh/
│   ├── kinh-dich/
│   └── thien-va-thuc-hanh/
├── content.config.ts     # Cấu hình schema Content Collections (glob loader)
├── data/
│   └── posts.ts          # Định nghĩa 6 chuyên mục cố định
├── pages/
│   ├── index.astro       # Trang chủ hiên trà
│   ├── bai-viet/         # Dynamic route tự động render bài viết (/bai-viet/[...slug].astro)
│   ├── chuyen-muc/       # Trang danh mục (/chuyen-muc/[category].astro)
│   ├── gioi-thieu.astro  # Duyên khởi & Tôn chỉ
│   ├── huong-dan.astro   # Tâm pháp đọc sách
│   ├── quy-dinh.astro    # Thanh quy đồng hành
│   ├── lien-he.astro     # Thư phòng tĩnh quán
│   ├── sitemap.astro     # Sơ đồ tàng thư toàn trang
│   ├── rss.xml.ts        # Kênh cấp tin RSS tĩnh
│   └── sitemap-index.xml.ts # Tệp sitemap XML chuẩn SEO
├── components/           # SiteHeader (kèm tìm kiếm ⌕), SiteFooter
└── layouts/              # BaseLayout
```

---

## ✦ Cài đặt & Vận hành

```bash
# Cài đặt các gói phụ thuộc
npm install

# Khởi chạy máy chủ phát triển (mặc định tại http://localhost:4321)
npm run dev

# Kiểm tra & đóng gói bản phát hành tĩnh (thư mục dist/)
npm run build

# Xem thử bản đóng gói
npm run preview
```

---

## ✦ Viết bài mới

Để thêm một bài viết mới, bạn chỉ cần tạo tệp `.md` trong thư mục chuyên mục tại `src/content/<chuyen-muc>/<ten-bai>.md`:

```markdown
---
title: "Làm sao để sống một ngày không vội?"
excerpt: "Chậm lại không phải là bỏ cuộc. Đó là cách ta trở về với nhịp điệu riêng."
date: "2026-08-21"
category: "cuoc-song"
---

Nội dung bài viết bắt đầu tại đây...
```

Hệ thống sẽ **tự động kết xuất** bài viết thành trang blog hoàn chỉnh tại `/bai-viet/<chuyen-muc>/<ten-bai>` và đồng bộ toàn bộ trang chủ, chuyên mục, tìm kiếm, RSS và Sitemap.

👉 Xem hướng dẫn chi tiết tại: [docs/TAO-BAI-VIET.md](docs/TAO-BAI-VIET.md).
