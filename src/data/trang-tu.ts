// Số thứ tự là bài trong loạt tuyển đọc, không phải số thiên của nguyên tác.
export const trangTuStages = [
  {
    title: 'Bước vào thế giới Trang Tử',
    description: 'Làm quen với tác phẩm, rồi mở một khoảng nhìn khác từ chim Bằng và cây lớn.',
    lessons: [
      { number: 1, title: 'Giới thiệu Trang Tử: mở thêm một cách nhìn đời', reading: 'Cửa vào loạt bài' },
      { number: 2, title: 'Trang Chu và sách Trang Tử: con người, giai thoại, văn bản', reading: 'Tác giả và truyền bản' },
      { number: 3, title: 'Cánh chim Bằng và những chân trời khác nhau', reading: 'Tiêu dao du · Thiên 1' },
      { number: 4, title: 'Cây lớn không dùng được: nhìn lại chữ hữu ích', reading: 'Tiêu dao du · Thiên 1' },
    ],
  },
  {
    title: 'Nhìn lại điều mình cho là chắc chắn',
    description: 'Đi từ giới hạn của góc nhìn đến sự chú ý trong công việc và cuộc gặp.',
    lessons: [
      { number: 5, title: 'Tề vật luận: khi điều mình thấy chưa phải toàn cảnh', reading: 'Tề vật luận · Thiên 2' },
      { number: 6, title: 'Giấc mộng bướm: điều gì làm nên cái tôi?', reading: 'Tề vật luận · Thiên 2' },
      { number: 7, title: 'Người đầu bếp Đinh: làm việc bằng sự hiểu nghề', reading: 'Dưỡng sinh chủ · Thiên 3' },
      { number: 8, title: 'Tâm trai: bước vào cuộc gặp với lòng còn chỗ trống', reading: 'Nhân gian thế · Thiên 4' },
    ],
  },
  {
    title: 'Sống cùng người khác và sự đổi thay',
    description: 'Gặp con người phía sau vẻ ngoài, và xem lại cách ta giúp nhau giữa biến chuyển.',
    lessons: [
      { number: 9, title: 'Đức sung phù: gặp con người phía sau vẻ ngoài', reading: 'Đức sung phù · Thiên 5' },
      { number: 10, title: 'Đại tông sư: khi đời sống đổi hình', reading: 'Đại tông sư · Thiên 6' },
      { number: 11, title: 'Tọa vong: nới lỏng những điều ta nhận là mình', reading: 'Đại tông sư · Thiên 6' },
      { number: 12, title: 'Hỗn Độn: khi lòng tốt muốn sửa mọi thứ', reading: 'Ứng đế vương · Thiên 7' },
    ],
  },
  {
    title: 'Mang câu hỏi trở lại đời thường',
    description: 'Bước ra khỏi khoảng trời quen thuộc và chọn điều muốn tiếp tục suy ngẫm.',
    lessons: [
      { number: 13, title: 'Thu thủy: bước ra khỏi khoảng trời quen thuộc', reading: 'Thu thủy · Thiên 17' },
      { number: 14, title: 'Niềm vui của cá: ta hiểu người khác đến đâu?', reading: 'Thu thủy · Thiên 17' },
      { number: 15, title: 'Người thợ làm bánh xe: điều sách vở cần ở trải nghiệm', reading: 'Thiên đạo · Thiên 13' },
      { number: 16, title: 'Sau những trang Trang Tử, ta mang theo câu hỏi nào?', reading: 'Nhìn lại lượt đọc' },
    ],
  },
];

export const trangTuLessonCount = trangTuStages.reduce((total, stage) => total + stage.lessons.length, 0);
