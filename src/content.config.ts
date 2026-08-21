import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Gom tất cả file .md từ mọi thư mục chuyên mục vào 1 collection "blog"
// Khi thêm chuyên mục mới chỉ cần tạo thư mục src/content/<slug>/ — không cần sửa file này
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // YYYY-MM-DD
    category: z.string(), // slug chuyên mục
  }),
});

export const collections = { blog };
