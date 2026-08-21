# Hướng dẫn làm việc

- Mọi trang công khai sử dụng `BaseLayout` để bảo đảm tính nhất quán giao diện (header, footer, nút về đầu trang).
- Bài viết được quản lý tự động qua **Astro Content Collections** đặt tại `src/content/<category-slug>/*.md`.
- Cấu hình schema collection khai báo tại `src/content.config.ts`.
- Danh mục chuyên mục cố định tập trung trong `src/data/posts.ts` với 6 category slug chuẩn: `cuoc-song`, `dao-va-doi`, `phat-giao`, `dao-duc-kinh`, `kinh-dich`, `thien-va-thuc-hanh`.
- Hệ thống tự động đồng bộ bài viết vào trang chuyên mục, trang chủ, thanh tìm kiếm, RSS feed (`/rss.xml`), trang sơ đồ (`/sitemap`) và XML Sitemap (`/sitemap-index.xml`).
- Giữ phong cách thiết kế tao nhã, văn phong tiếng Việt điềm tĩnh, sâu lắng; luôn chạy `npm run build` để kiểm thử sau mỗi thay đổi.
