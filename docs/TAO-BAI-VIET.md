# Hướng Dẫn Tạo Bài Viết Mới

Trang web sử dụng **Astro Content Collections** chuẩn. Để viết một bài blog mới, bạn chỉ cần tạo một tệp tin Markdown (`.md`) vào thư mục chuyên mục tương ứng. Hệ thống sẽ tự động hiển thị bài viết lên website, trang chuyên mục, trang chủ, thanh tìm kiếm, RSS và Sitemap.

---

## 1. Vị trí lưu trữ bài viết

Tạo tệp `.md` tại thư mục chuyên mục tương ứng trong `src/content/`:

```text
src/content/
├── cuoc-song/          # Cuộc sống (sống chậm, an trú đời thường)
├── dao-va-doi/         # Đạo & đời (tư tưởng phương Đông giữa đời)
├── phat-giao/          # Phật giáo (con đường tỉnh thức)
├── dao-duc-kinh/       # Đạo Đức Kinh (Lão Tử, vô vi, bất tranh)
├── kinh-dich/          # Kinh Dịch (quan sát biến đổi, âm dương)
└── thien-va-thuc-hanh/ # Thiền & thực hành (tọa thiền, hơi thở)
```

> **Quy tắc đặt tên tệp:** Sử dụng chữ thường, không dấu, nối nhau bằng dấu gạch ngang (ví dụ: `mot-ngay-khong-voi.md`, `tam-binh-van-su-binh.md`). Tên tệp sẽ trở thành đường dẫn (slug) của bài viết: `/bai-viet/<category>/<ten-tep>`.

---

## 2. Khuôn mẫu nội dung (Markdown Template)

Mỗi tệp bài viết bắt đầu bằng phần **Frontmatter** (đặt giữa cặp dấu `---`) và theo sau là nội dung bài viết:

```markdown
---
title: "Tên bài viết (ngắn gọn, hàm súc)"
excerpt: "Đoạn mô tả ngắn gọn hoặc lời dẫn nhập cho bài viết (khoảng 1-2 câu)."
date: "2026-08-21"
category: "cuoc-song"
---

Đoạn văn mở đầu bài viết...

## Tiêu đề phụ (Phần 1)

Nội dung chi tiết của phần thứ nhất. Bạn có thể sử dụng các định dạng chuẩn Markdown như chữ **đậm**, chữ *nghiêng*, hoặc danh sách gạch đầu dòng:

- Ý thứ nhất
- Ý thứ hai

## Tiêu đề phụ (Phần 2)

Đoạn văn tiếp theo. Để tạo một khối trích dẫn phong cách cổ điển, hãy dùng dấu `>`:

> "Đạo pháp tự nhiên, tâm an vạn sự an."

Đoạn kết thúc bài viết...
```

---

## 3. Các trường thông tin Frontmatter

| Trường | Bắt buộc | Định dạng | Mô tả |
| :--- | :---: | :--- | :--- |
| `title` | **Có** | Chuỗi ký tự | Tiêu đề hiển thị của bài viết |
| `excerpt` | **Có** | Chuỗi ký tự | Tóm tắt ngắn xuất hiện ở trang chủ, thẻ bài viết, SEO |
| `date` | **Có** | `YYYY-MM-DD` | Ngày đăng bài (ví dụ: `"2026-08-21"`) |
| `category` | **Có** | Khóa chuyên mục | Phải là 1 trong 6 mã: `cuoc-song`, `dao-va-doi`, `phat-giao`, `dao-duc-kinh`, `kinh-dich`, `thien-va-thuc-hanh` |

---

## 4. Kiểm tra sau khi tạo bài

Sau khi tạo tệp `.md`, mở trình duyệt để kiểm tra:

1. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
2. Truy cập đường dẫn: `http://localhost:4321/bai-viet/<chuyen-muc>/<ten-tep>`
3. Kiểm tra bài viết xuất hiện trên:
   - Trang chủ (`/`)
   - Trang chuyên mục tương ứng (`/chuyen-muc/<category>`)
   - Khung tìm kiếm ở đầu trang (`⌕`)
   - Sơ đồ trang web (`/sitemap`) và RSS feed (`/rss.xml`)
4. Kiểm tra bản build tĩnh trước khi xuất bản:
   ```bash
   npm run build
   ```
