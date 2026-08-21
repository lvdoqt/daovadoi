// Danh sách chuyên mục cố định của blog.
// Khi thêm chuyên mục mới: bổ sung vào đây và tạo thư mục src/content/<slug>/
export type Category = { slug: string; name: string; description: string };

export const categories: Category[] = [
  { slug: 'cuoc-song',          name: 'Cuộc sống',         description: 'Những ghi chép để sống chậm, sáng rõ và gần với mình hơn.' },
  { slug: 'dao-va-doi',         name: 'Đạo & đời',         description: 'Tư tưởng phương Đông trong nhịp sống thường ngày.' },
  { slug: 'phat-giao',          name: 'Phật giáo',         description: 'Con đường tỉnh thức qua những thực hành giản dị.' },
  { slug: 'dao-duc-kinh',       name: 'Đạo Đức Kinh',      description: 'Đọc Lão Tử bằng một tâm thế cởi mở và hiện đại.' },
  { slug: 'kinh-dich',          name: 'Kinh Dịch',         description: 'Quan sát biến đổi để nhận ra thời điểm và hướng đi.' },
  { slug: 'thien-va-thuc-hanh', name: 'Thiền & thực hành', description: 'Các thực hành nuôi dưỡng sự có mặt trong đời thường.' },
];

// Bài viết không còn khai báo thủ công ở đây.
// Chúng được đọc tự động từ src/content/<category>/*.md
// thông qua Astro Content Collections (getCollection('blog')).
