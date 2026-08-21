# Khuôn mẫu tạo bài viết

1. Thêm metadata vào `posts` trong `src/data/posts.ts`: `slug`, `title`, `excerpt`, `date`, `category`.
2. `category` phải là một trong: `cuoc-song`, `dao-va-doi`, `phat-giao`, `dao-duc-kinh`, `kinh-dich`, `thien-va-thuc-hanh`.
3. Sao chép một trang `src/pages/*.astro`, đổi tên `<slug>.astro` và giữ `BaseLayout`, `article-page`, `article-heading`, `article-body`.
4. Thêm URL vào sitemap; thêm RSS khi bài dành cho người theo dõi feed.
5. Chạy `npm run build`.
