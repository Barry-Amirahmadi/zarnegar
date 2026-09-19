import type { GalleryItem } from "@/types/content";

/**
 * PLACEHOLDER CONTENT.
 * `category` is the axis a future gallery filter will use, so the values are
 * kept to a small controlled vocabulary rather than free text: کارگاه for the
 * making, قطعه for a finished piece, سنگ for the material before it is set,
 * جزئیات for a detail too small to read at catalogue size.
 *
 * All eight share the `4/5` frame. The catalogue is square and the gallery is
 * not, which is deliberate — they are different registers, and uniformity is
 * required *within* a register, not across the whole site. What broke PARNIAN
 * was six gallery images at six different ratios, not a gallery whose ratio
 * differs from the catalogue's.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g-01",
    title: "قلم روی صفحه",
    category: "کارگاه",
    caption: "نور از پنجرهٔ شمالی",
    image: {
      src: "/media/gallery-01.svg",
      alt: "دست در حال قلم‌زنی روی صفحهٔ طلا",
      ratio: "4/5",
    },
    order: 1,
  },
  {
    id: "g-02",
    title: "فیروزه، پیش از نشاندن",
    category: "سنگ",
    image: {
      src: "/media/gallery-02.svg",
      alt: "چند قطعه فیروزه روی پارچهٔ روشن",
      ratio: "4/5",
    },
    order: 2,
  },
  {
    id: "g-03",
    title: "ترنج، تمام‌شده",
    category: "قطعه",
    caption: "بدون اصلاح رنگ",
    image: {
      src: "/media/gallery-03.svg",
      alt: "گردن‌آویز ترنج پس از پایان کار",
      ratio: "4/5",
    },
    order: 3,
  },
  {
    id: "g-04",
    title: "لبهٔ نشستن نگین",
    category: "جزئیات",
    image: {
      src: "/media/gallery-04.svg",
      alt: "نمای بسیار نزدیک از لبهٔ پیوستهٔ یک نگین",
      ratio: "4/5",
    },
    order: 4,
  },
  {
    id: "g-05",
    title: "میز کار، اول صبح",
    category: "کارگاه",
    image: {
      src: "/media/gallery-05.svg",
      alt: "میز کار زرگری با ابزار چیده‌شده",
      ratio: "4/5",
    },
    order: 5,
  },
  {
    id: "g-06",
    title: "سنگ ماه در نور مایل",
    category: "سنگ",
    caption: "همان نوری که انگشتر در آن دیده می‌شود",
    image: {
      src: "/media/gallery-06.svg",
      alt: "سنگ ماه که در نور مایل رنگ برمی‌گرداند",
      ratio: "4/5",
    },
    order: 6,
  },
  {
    id: "g-07",
    title: "گلبرگ، پیش از خم‌شدن",
    category: "جزئیات",
    image: {
      src: "/media/gallery-07.svg",
      alt: "گلبرگ بریده‌شدهٔ گوشوارهٔ نیلوفر پیش از خم‌شدن",
      ratio: "4/5",
    },
    order: 7,
  },
  {
    id: "g-08",
    title: "مجموعه، کنار هم",
    category: "قطعه",
    image: {
      src: "/media/gallery-08.svg",
      alt: "چند قطعه از مجموعهٔ زرنگار کنار هم",
      ratio: "4/5",
    },
    order: 8,
  },
];

export const sortedGallery = [...galleryItems].sort((a, b) => a.order - b.order);
