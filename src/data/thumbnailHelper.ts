// Helper xác định phong cách và dữ liệu minh họa cho bài viết (Article Thumbnail)
// Dựa trên tiêu đề, slug, chuyên mục và thẻ bài viết để chọn chủ đề và bảng màu phù hợp.

export type ThumbnailTheme =
  | 'phone'       // Màn hình, điện thoại, thông báo, khoảng ngắt
  | 'tea'         // Tách trà, sự ấm áp, uống trà, chậm lại
  | 'water'       // Dòng sông, cá, bến nước, Thu thủy, uốn lượn
  | 'bird'        // Chim Bằng, cánh chim, bầu trời, cái lớn và nhỏ
  | 'tree'        // Cây lớn, cây cong, bóng mát, rừng, rễ cây
  | 'mountain'    // Dãy núi, bậc thang, hành trình, lối mòn
  | 'meditation'  // Vòng tròn Enso, tọa thiền, hơi thở, an trú
  | 'butterfly'   // Mộng bướm, giấc mơ, cái tôi, biến hóa
  | 'craft'       // Bánh xe, người thợ, bàn giao, làm việc chung, công việc
  | 'lantern'     // Ngọn đèn, ánh sáng, soi chiếu, nhận biết, dừng lại
  | 'listening'   // Thiện hữu, đối thoại, nói rõ, lắng nghe, kết nối
  | 'home'        // Góc nhà, đồ dùng, gấp khăn, dọn dẹp, bát đĩa
  | 'lotus'       // Hoa sen, tâm từ, lòng tốt, từ bi, thiện hạnh
  | 'iching'      // Kinh Dịch, quẻ, âm dương, Đạo Đức Kinh, biến đổi
  | 'balance';    // Hai cách nhìn, lưỡng hành, cân bằng, trung đạo

export interface ThumbnailData {
  theme: ThumbnailTheme;
  title: string;
  bg: string;
  accent: string;
  primary: string;
  secondary: string;
  highlight: string;
}

// Bảng màu tao nhã, điềm tĩnh theo đúng thẩm mỹ của blog
const THEME_PALETTES: Record<ThumbnailTheme, Omit<ThumbnailData, 'theme' | 'title'>> = {
  phone: {
    bg: '#e9e1d3',
    primary: '#2d3f37',
    accent: '#b8755b',
    secondary: '#5a7167',
    highlight: '#faedd0',
  },
  tea: {
    bg: '#f3ece0',
    primary: '#385347',
    accent: '#bf7b56',
    secondary: '#8fa899',
    highlight: '#eed6a1',
  },
  water: {
    bg: '#dce8e3',
    primary: '#274742',
    accent: '#bc6c54',
    secondary: '#59847c',
    highlight: '#f5ecd3',
  },
  bird: {
    bg: '#eddccf',
    primary: '#2e4941',
    accent: '#b9654f',
    secondary: '#6c8577',
    highlight: '#f5dfab',
  },
  tree: {
    bg: '#eee7d4',
    primary: '#253e34',
    accent: '#ba6e52',
    secondary: '#5c7f6b',
    highlight: '#eed8a8',
  },
  mountain: {
    bg: '#e5ded0',
    primary: '#324a41',
    accent: '#a86550',
    secondary: '#6b8276',
    highlight: '#f4e0b0',
  },
  meditation: {
    bg: '#f3ece2',
    primary: '#31443b',
    accent: '#af6b55',
    secondary: '#738e82',
    highlight: '#eed5a4',
  },
  butterfly: {
    bg: '#eee6ec',
    primary: '#3c3647',
    accent: '#9d6786',
    secondary: '#76677f',
    highlight: '#f4e5c8',
  },
  craft: {
    bg: '#eee3d2',
    primary: '#3d2e24',
    accent: '#b56d42',
    secondary: '#557262',
    highlight: '#ebd4aa',
  },
  lantern: {
    bg: '#1f2e29',
    primary: '#e8dcce',
    accent: '#d97f50',
    secondary: '#769485',
    highlight: '#f6dc8e',
  },
  listening: {
    bg: '#f6eee2',
    primary: '#3b5448',
    accent: '#b86950',
    secondary: '#7e9c8e',
    highlight: '#eed7a4',
  },
  home: {
    bg: '#f2ece2',
    primary: '#423329',
    accent: '#b96f50',
    secondary: '#6b8577',
    highlight: '#ebd8b2',
  },
  lotus: {
    bg: '#f4ede4',
    primary: '#2c453c',
    accent: '#bb665b',
    secondary: '#6d9181',
    highlight: '#f8eed5',
  },
  iching: {
    bg: '#ece2d1',
    primary: '#2b3f37',
    accent: '#a95f48',
    secondary: '#b89458',
    highlight: '#f5ecd6',
  },
  balance: {
    bg: '#efebe1',
    primary: '#334c41',
    accent: '#b86a52',
    secondary: '#698779',
    highlight: '#ecd59f',
  },
};

// Chuẩn hóa chuỗi tiếng Việt để dò từ khóa
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim();
}

function hasAny(text: string, patterns: string[]): boolean {
  return patterns.some((p) => {
    const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'i').test(text);
  });
}

export function detectThumbnailTheme(
  title: string,
  slugOrId: string = '',
  category: string = '',
  tags: string[] = []
): ThumbnailTheme {
  const normalized = normalizeText(
    `${title} ${slugOrId} ${tags.join(' ')}`
  );

  // 1. Chim Bằng, cánh chim, cái lớn cái nhỏ, bầu trời, tiêu dao
  if (
    hasAny(normalized, [
      'chim bang',
      'canh chim',
      'cai lon va cai nho',
      'cai lon',
      'cai nho',
      'tieu dao',
      'bay cao',
      'bau troi',
      'chim se',
      've sau',
    ])
  ) {
    return 'bird';
  }

  // 2. Điện thoại, màn hình, công nghệ, thông báo
  if (
    hasAny(normalized, [
      'dien thoai',
      'man hinh',
      'tat man hinh',
      'hop thu',
      'tin nhan',
      'thong bao',
      'thiet bi',
      'ba phut sau khi tat man hinh',
      'tay tim dien thoai',
    ])
  ) {
    return 'phone';
  }

  // 3. Cá, sông nước, bến thuyền, Thu thủy
  if (
    hasAny(normalized, [
      'niem vui cua ca',
      'con ca',
      'thu thuy',
      'dong song',
      'ben nuoc',
      'song nuoc',
      'bien ca',
      'thuyen',
      'song hào',
    ])
  ) {
    return 'water';
  }

  // 4. Hai cách nhìn, lưỡng hành, cân bằng, góc nhìn, không giữ công
  if (
    hasAny(normalized, [
      'hai cach nhin',
      'luong hanh',
      'trieu tam mo tu',
      'goc nhin',
      'can bang',
      'te vat',
      'khong giu cong',
    ])
  ) {
    return 'balance';
  }

  // 5. Bánh xe, người thợ, bàn giao, làm việc chung, công cụ
  if (
    hasAny(normalized, [
      'banh xe',
      'ban giao',
      'nguoi sau',
      'lam viec chung',
      'nguoi tho',
      'dau bep',
      'chuyen tam',
    ])
  ) {
    return 'craft';
  }

  // 6. Lắng nghe, thiện hữu, nói rõ, không sửa lỗi, giao tiếp
  if (
    hasAny(normalized, [
      'thien huu',
      'sua loi',
      'noi ro',
      'lang nghe',
      'thau hieu',
      'giao tiep',
      'nhu cau',
      'tinh ban',
    ])
  ) {
    return 'listening';
  }

  // 7. Bướm, giấc mộng, mộng bướm, cái tôi
  if (
    hasAny(normalized, [
      'mong buom',
      'giac mong',
      'con buom',
      'canh buom',
      'cai toi',
      'ao anh',
    ])
  ) {
    return 'butterfly';
  }

  // 8. Trà, tách trà, uống trà, nước ấm
  if (
    hasAny(normalized, [
      'tach tra',
      'uong tra',
      'pha tra',
      'chen tra',
      'am tra',
      'am nuoc',
      'bot tra',
      'la tra',
      'tra hoa',
    ])
  ) {
    return 'tea';
  }

  // 9. Ngọn đèn, ánh sáng, soi chiếu, dừng lại, nhận biết
  if (
    hasAny(normalized, [
      'dung truoc',
      'dung lai',
      'phan ung voi',
      'ngon den',
      'anh sang',
      'soi chieu',
      'tinh tao',
      'khoang dung',
    ])
  ) {
    return 'lantern';
  }

  // 10. Cây cối, cây lớn, cây cong, rừng, lá, tưới cây
  if (
    hasAny(normalized, [
      'cay cong',
      'cay lon',
      'goc cay',
      'tuoi cay',
      'tan cay',
      'rung cay',
      'bong mat',
      'chiec la',
      'la cay',
    ])
  ) {
    return 'tree';
  }

  // 11. Góc nhà, dọn dẹp, ngăn kệ, khăn, đồ dùng, bữa cơm
  if (
    hasAny(normalized, [
      'cham do',
      'don goc',
      'ngan ke',
      'gap khan',
      'do dung',
      'bua com',
      'do muon',
      'tra do',
      'thu don',
    ])
  ) {
    return 'home';
  }

  // 12. Hoa sen, tâm từ, từ bi, việc tốt, động cơ
  if (
    hasAny(normalized, [
      'dong co',
      'viec tot',
      'tam tu',
      'tu bi',
      'tuy hy',
      'bo thi',
      'thien hanh',
      'hoa sen',
    ])
  ) {
    return 'lotus';
  }

  // 13. Núi non, bước chân, đi bộ, bậc đá, hành trình
  if (
    hasAny(normalized, [
      'nui',
      'di bo',
      'buoc chan',
      'tung buoc',
      'con duong',
      'loi mon',
      'bac da',
      'lui lai',
    ])
  ) {
    return 'mountain';
  }

  // 14. Kinh Dịch, quẻ, Đạo Đức Kinh, âm dương
  if (
    category === 'kinh-dich' ||
    category === 'dao-duc-kinh' ||
    hasAny(normalized, ['kinh dich', 'dao duc kinh', 'lao tu', 'am duong', 'vo vi']) ||
    normalized.startsWith('que ')
  ) {
    return 'iching';
  }

  // 15. Tọa thiền, hơi thở, an trú, tĩnh lặng, ý định
  if (
    category === 'thien-va-thuc-hanh' ||
    hasAny(normalized, [
      'thien',
      'toa thien',
      'hoi tho',
      'an tru',
      'khoang nghi',
      'y dinh',
      'co mat',
      'tinh lang',
    ])
  ) {
    return 'meditation';
  }

  // Fallback dựa trên hash để đảm bảo mỗi bài có chủ đề ổn định và khác nhau
  const themesList: ThumbnailTheme[] = [
    'mountain',
    'water',
    'tree',
    'meditation',
    'tea',
    'listening',
    'lantern',
    'balance',
  ];
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % themesList.length;
  return themesList[index];
}

export function getThumbnailData(
  title: string,
  slugOrId: string = '',
  category: string = '',
  tags: string[] = [],
  explicitTheme?: string
): ThumbnailData {
  let theme: ThumbnailTheme;
  if (explicitTheme && explicitTheme in THEME_PALETTES) {
    theme = explicitTheme as ThumbnailTheme;
  } else {
    theme = detectThumbnailTheme(title, slugOrId, category, tags);
  }

  const palette = THEME_PALETTES[theme];
  return {
    theme,
    title,
    ...palette,
  };
}
