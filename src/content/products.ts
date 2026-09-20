import type { Product } from "@/types/content";
import { resolveProducts } from "./resolveProducts";

/**
 * PLACEHOLDER CONTENT.
 *
 * The brand is fictional, so the *pieces* carry real attributes — a metal, a
 * karat, a weight, a stone, a size — because those are properties of an object
 * the brand made up, and describing them is what a jewellery catalogue is for.
 * What is never asserted is a fact about the *atelier*: no founding year, no
 * hallmark authority, no certificate, no award, no press, no client count.
 * That distinction is §44.1's, and it is the whole of the content-honesty rule
 * on this site.
 *
 * `tone` is the one field doing design work — it is the piece's own stone and
 * metal colour, and it drives the ambient wash behind the showcase. Every seed
 * piece sets it, and `layout`, explicitly; both are optional in the type so a
 * CMS editor can omit them, and resolveProducts() fills the gap.
 *
 * **Catalogue images share one ratio — `1/1` — and only the `feature` piece
 * departs from it.** Inherited from PARNIAN, where four different ratios were
 * read as the photographs being mismatched rather than as editorial variety,
 * and the reading was right: a frame that changes per item means the item
 * changes size inside it, and nothing anchors the eye. Square is the jeweller's
 * frame in practice — a ring, a pendant and a pair of earrings have no shared
 * long axis, so any rectangle flatters one of the three and starves the others.
 * Variety belongs to how much of the row a piece takes, not to the shape of its
 * frame. The placeholder files under `public/media/` are generated onto one
 * 1200×1200 canvas with one subject geometry to match; each keeps only its own
 * tone and grain seed.
 *
 * The `feature` piece is `8/5` rather than square because its arrangement is
 * `lg:col-span-12` on both the showcase and the collection page — a full-width
 * square is roughly twice the height of the viewport it appears in, which is a
 * measurement rather than a preference. See the build report.
 *
 * `views` are the other angles, shown on the detail page only. Every listing,
 * card, related-piece and share card reads `image`, which is why that one stays
 * required and these stay optional: a piece can be published with one
 * photograph and nothing on the site breaks.
 *
 * Order is editorial, not alphabetical, and it carries two things at once: the
 * showcase rhythm — right, left, right, left, one full-width finish, and back —
 * and a three-category cycle, so each of انگشتر / گردن‌آویز / گوشواره appears
 * three times at even spacing rather than in blocks.
 */
export const products: Product[] = [
  {
    id: "z-mahtab",
    slug: "mahtab",
    name: "انگشتر مهتاب",
    latin: "MAHTAB",
    category: "انگشتر",
    description: "نگین سنگ ماه در قابی پیوسته، روی حلقه‌ای که پشت انگشت باریک می‌شود.",
    statement: "سنگ ماه در نور مستقیم چیزی نشان نمی‌دهد. باید کمی بچرخد.",
    body: [
      "حلقه بدون بافت و بدون حکاکی ساخته می‌شود، تا تنها چیزی که نور را برمی‌گرداند خود سنگ باشد. پهنای آن پشت انگشت کم می‌شود؛ حلقه‌ای که همه‌جا یک پهنا دارد روی دست سنگین می‌نشیند و جای خودش را باز می‌کند.",
      "نگین در چنگ بسته نشده، در لبه‌ای پیوسته نشسته است. کار بیشتری می‌برد و در عوض چیزی از کنار سنگ بیرون نمی‌زند که به آستین بگیرد.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۴٫۲ گرم" },
      { label: "سنگ", value: "سنگ ماه" },
      { label: "اندازه", value: "۵۴ تا ۵۸" },
    ],
    tone: "#8C93A8",
    image: {
      src: "/media/piece-mahtab.svg",
      alt: "انگشتر مهتاب، نگین سنگ ماه در قاب پیوسته",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-mahtab-b.svg",
        alt: "انگشتر مهتاب از نیم‌رخ، جایی که حلقه پشت انگشت باریک می‌شود",
        ratio: "1/1",
      },
      {
        src: "/media/piece-mahtab-c.svg",
        alt: "لبهٔ پیوستهٔ نگین انگشتر مهتاب از نمای نزدیک",
        ratio: "1/1",
      },
    ],
    layout: "tall",
    status: "published",
  },
  {
    id: "z-shabnam",
    slug: "shabnam",
    name: "گردن‌آویز شبنم",
    latin: "SHABNAM",
    category: "گردن‌آویز",
    description: "یک قطرهٔ کوچک روی زنجیر باریک، برای پوشیدن هر روز.",
    statement: "قطعه‌ای که هر روز پوشیده می‌شود باید فراموش‌شدنی باشد.",
    body: [
      "آویز به اندازه‌ای کوچک است که زیر یقه بماند و به اندازه‌ای سنگین که وسط بنشیند و نچرخد. این دو خواسته با هم جمع نمی‌شوند مگر اینکه بدنه توپر باشد، و هست.",
      "زنجیر جدا فروخته نمی‌شود. طول و ضخامتش با وزن آویز انتخاب شده، و زنجیر نازک‌تر آویز را به چرخیدن می‌اندازد.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۲٫۶ گرم با زنجیر" },
      { label: "سنگ", value: "بدون نگین" },
      { label: "اندازه", value: "زنجیر ۴۲ سانتی‌متر" },
    ],
    tone: "#A9AEB0",
    image: {
      src: "/media/piece-shabnam.svg",
      alt: "گردن‌آویز شبنم، آویز قطره‌ای روی زنجیر باریک",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-shabnam-b.svg",
        alt: "آویز شبنم از پشت، محل اتصال به زنجیر",
        ratio: "1/1",
      },
    ],
    layout: "wide",
    status: "published",
  },
  {
    id: "z-avishan",
    slug: "avishan",
    name: "گوشوارهٔ آویشن",
    latin: "AVISHAN",
    category: "گوشواره",
    description: "دو ساقهٔ باریک با برگ‌های ریز، ریخته‌گری‌شده از یک قالب.",
    statement: "برگ‌ها یکسان نیستند. قالب از یک شاخهٔ واقعی گرفته شده است.",
    body: [
      "هر جفت از یک قالب بیرون می‌آید، پس دو گوشواره قرینهٔ هم‌اند و هیچ جفتی دقیقاً شبیه جفت دیگر نیست. ریزی برگ‌ها جایی است که بیشترین کار می‌رود: بعد از ریخته‌گری، لبه‌ها دستی باز می‌شوند.",
      "قلاب پشت گوش می‌نشیند و وزن را از سوراخ گوش برمی‌دارد. برای همین ساقه می‌تواند بلند باشد بدون اینکه لالهٔ گوش را بکشد.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۳٫۱ گرم، جفت" },
      { label: "سنگ", value: "بدون نگین" },
      { label: "اندازه", value: "بلندی ۳۸ میلی‌متر" },
    ],
    tone: "#5E7356",
    image: {
      src: "/media/piece-avishan.svg",
      alt: "گوشوارهٔ آویشن، دو ساقهٔ باریک با برگ‌های ریز",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-avishan-b.svg",
        alt: "برگ‌های گوشوارهٔ آویشن از نمای نزدیک",
        ratio: "1/1",
      },
      {
        src: "/media/piece-avishan-c.svg",
        alt: "قلاب پشت‌گوشی گوشوارهٔ آویشن",
        ratio: "1/1",
      },
    ],
    layout: "tall",
    status: "published",
  },
  {
    id: "z-khara",
    slug: "khara",
    name: "انگشتر خارا",
    latin: "KHARA",
    category: "انگشتر",
    description: "حلقه‌ای پهن با رویهٔ چکش‌خورده، بدون نگین.",
    statement: "سطحی که چکش خورده، خط نمی‌افتد. خط‌ها از قبل آنجا هستند.",
    body: [
      "رویه با چکش کار شده، نه با قالب. هر فرورفتگی جای یک ضربه است، و به همین دلیل انگشتر با استفاده کدر نمی‌شود؛ خش تازه میان خش‌های موجود گم می‌شود.",
      "پهنا در تمام دور حلقه یکسان است. این یکی برخلاف مهتاب برای دیده‌شدن ساخته شده و باریک‌شدن پشت انگشت، خط بیرونی‌اش را می‌شکست.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۶٫۸ گرم" },
      { label: "سنگ", value: "بدون نگین" },
      { label: "اندازه", value: "۵۶ تا ۶۴" },
    ],
    tone: "#4A4741",
    image: {
      src: "/media/piece-khara.svg",
      alt: "انگشتر خارا، حلقهٔ پهن با رویهٔ چکش‌خورده",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-khara-b.svg",
        alt: "رویهٔ چکش‌خوردهٔ انگشتر خارا در نور مایل",
        ratio: "1/1",
      },
      {
        src: "/media/piece-khara-c.svg",
        alt: "انگشتر خارا از نیم‌رخ، پهنای یکسان در تمام دور حلقه",
        ratio: "1/1",
      },
    ],
    layout: "compact",
    status: "published",
  },
  {
    id: "z-toranj",
    slug: "toranj",
    name: "گردن‌آویز ترنج",
    latin: "TORANJ",
    category: "گردن‌آویز",
    description: "نقش ترنج، قلم‌زده روی صفحه‌ای گرد، با نگین فیروزه در مرکز.",
    statement: "ترنج نقش وسط فرش است. اینجا همان کار را روی سینه می‌کند.",
    body: [
      "نقش با قلم روی صفحه کنده شده، نه با اسید و نه با دستگاه. خطوط در عمق یکسان نیستند و همین است که نقش را در نور زنده نگه می‌دارد؛ حکاکی یکنواخت از یک قدم دورتر صاف دیده می‌شود.",
      "فیروزه در مرکز نشسته چون ترنج همیشه یک مرکز دارد. اندازه‌اش عمداً کوچک است: نگین بزرگ‌تر نقش را به حاشیه می‌راند و آن‌وقت این دیگر ترنج نیست، یک قاب است دور یک سنگ.",
      "این بزرگ‌ترین قطعهٔ مجموعه است و تنها قطعه‌ای که سفارشی ساخته می‌شود. نقش، قطر صفحه و رنگ فیروزه با سفارش‌دهنده انتخاب می‌شود.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۱۱٫۴ گرم با زنجیر" },
      { label: "سنگ", value: "فیروزه" },
      { label: "اندازه", value: "قطر صفحه ۳۲ میلی‌متر" },
    ],
    tone: "#A8834A",
    image: {
      src: "/media/piece-toranj.svg",
      alt: "گردن‌آویز ترنج، نقش قلم‌زده روی صفحهٔ گرد با نگین فیروزه",
      ratio: "8/5",
    },
    views: [
      {
        src: "/media/piece-toranj-b.svg",
        alt: "نقش قلم‌زدهٔ ترنج از نمای نزدیک",
        ratio: "8/5",
      },
      {
        src: "/media/piece-toranj-c.svg",
        alt: "نگین فیروزهٔ مرکز ترنج",
        ratio: "8/5",
      },
      {
        src: "/media/piece-toranj-d.svg",
        alt: "پشت صفحهٔ ترنج و حلقهٔ اتصال زنجیر",
        ratio: "8/5",
      },
    ],
    layout: "feature",
    status: "published",
  },
  {
    id: "z-ghatreh",
    slug: "ghatreh",
    name: "گوشوارهٔ قطره",
    latin: "GHATREH",
    category: "گوشواره",
    description: "دو قطرهٔ عقیق زرد، آویخته از میخی کوتاه.",
    statement: "عقیق را می‌شود صیقل داد تا برق بزند. این یکی مات مانده است.",
    body: [
      "سنگ بدون پرداخت آینه‌ای کار شده، پس رنگ را نگه می‌دارد به‌جای اینکه نور اتاق را برگرداند. کنار طلای زرد، سنگ براق و فلز براق با هم رقابت می‌کنند و هر دو می‌بازند.",
      "میخ کوتاه است و قطره درست زیر لالهٔ گوش می‌ایستد. بلندتر که باشد با حرکت سر می‌چرخد و پشت سنگ دیده می‌شود، که جای تماشایی نیست.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۴٫۵ گرم، جفت" },
      { label: "سنگ", value: "عقیق زرد" },
      { label: "اندازه", value: "بلندی ۲۲ میلی‌متر" },
    ],
    tone: "#9A6B33",
    image: {
      src: "/media/piece-ghatreh.svg",
      alt: "گوشوارهٔ قطره، دو عقیق زرد آویخته از میخ کوتاه",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-ghatreh-b.svg",
        alt: "سطح مات عقیق زرد گوشوارهٔ قطره از نزدیک",
        ratio: "1/1",
      },
    ],
    layout: "wide",
    status: "published",
  },
  {
    id: "z-partow",
    slug: "partow",
    name: "انگشتر پرتو",
    latin: "PARTOW",
    category: "انگشتر",
    description: "نگین سیترین در تراش پله‌ای، روی حلقه‌ای باریک.",
    statement: "تراش پله‌ای رنگ را نشان می‌دهد. تراش درخشان نور را.",
    body: [
      "سیترین در تراش پله‌ای کم‌درخشش‌تر است و در عوض رنگش یکدست می‌ماند. برای سنگی که تمام ارزشش رنگ اوست، این معامله به‌صرفه است.",
      "حلقه عمداً باریک است تا سنگ عریض‌تر از بستر خودش دیده شود. اگر حلقه هم‌پهنای نگین بود، این انگشتر یک نوار طلا می‌شد با یک لکهٔ زرد وسطش.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۳٫۴ گرم" },
      { label: "سنگ", value: "سیترین" },
      { label: "اندازه", value: "۵۲ تا ۵۸" },
    ],
    tone: "#A88B45",
    image: {
      src: "/media/piece-partow.svg",
      alt: "انگشتر پرتو، نگین سیترین در تراش پله‌ای",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-partow-b.svg",
        alt: "پله‌های تراش سیترین انگشتر پرتو از بالا",
        ratio: "1/1",
      },
      {
        src: "/media/piece-partow-c.svg",
        alt: "انگشتر پرتو از نیم‌رخ، باریکی حلقه زیر نگین",
        ratio: "1/1",
      },
    ],
    layout: "tall",
    status: "published",
  },
  {
    id: "z-katibeh",
    slug: "katibeh",
    name: "گردن‌آویز کتیبه",
    latin: "KATIBEH",
    category: "گردن‌آویز",
    description: "صفحه‌ای مستطیل با حاشیهٔ کنده‌کاری‌شده و متن سفارشی.",
    statement: "متن را سفارش‌دهنده می‌نویسد. ما فقط حاشیه را داریم.",
    body: [
      "حاشیه ثابت است و مرکز خالی تحویل داده می‌شود. هر چه در آن نوشته شود — یک نام، یک تاریخ، یک بیت — با همان قلمی کنده می‌شود که حاشیه کنده شده، تا متن مهمان صفحه نباشد.",
      "صفحه مستطیل است و ایستاده، به نسبت کتیبه‌های سنگی که نامش از آن‌ها آمده. این شکل برای خط فارسی جا دارد؛ صفحهٔ گرد، خط را به قوس می‌اندازد.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۷٫۹ گرم با زنجیر" },
      { label: "سنگ", value: "بدون نگین" },
      { label: "اندازه", value: "۲۶ در ۱۸ میلی‌متر" },
    ],
    engravable: true,
    tone: "#6E5A34",
    image: {
      src: "/media/piece-katibeh.svg",
      alt: "گردن‌آویز کتیبه، صفحهٔ مستطیل با حاشیهٔ کنده‌کاری‌شده",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-katibeh-b.svg",
        alt: "حاشیهٔ کنده‌کاری‌شدهٔ کتیبه از نمای نزدیک",
        ratio: "1/1",
      },
      {
        src: "/media/piece-katibeh-c.svg",
        alt: "مرکز خالی صفحهٔ کتیبه، پیش از نوشتن متن",
        ratio: "1/1",
      },
    ],
    layout: "compact",
    status: "published",
  },
  {
    id: "z-nilufar",
    slug: "nilufar",
    name: "گوشوارهٔ نیلوفر",
    latin: "NILUFAR",
    category: "گوشواره",
    description: "گلبرگ‌های باز حلقه‌شده، با مغز لاجورد.",
    statement: "گل نیلوفر بسته ساخته می‌شود و بعد باز می‌شود. اینجا هم همین‌طور.",
    body: [
      "گلبرگ‌ها جدا بریده و بعد یکی‌یکی خم می‌شوند. برای همین زاویهٔ هیچ دو گلبرگی یکی نیست و گل از هر طرف شکل دیگری دارد.",
      "لاجورد مرکز کوچک است و رنگش تنها چیز سرد این مجموعه است. در طلای زرد، آبی گرم دیده نمی‌شود؛ باید به اندازهٔ کافی سیر باشد که در کنارش بایستد.",
    ],
    details: [
      { label: "جنس فلز", value: "طلای زرد" },
      { label: "عیار", value: "۱۸" },
      { label: "وزن", value: "۵٫۲ گرم، جفت" },
      { label: "سنگ", value: "لاجورد" },
      { label: "اندازه", value: "قطر ۱۶ میلی‌متر" },
    ],
    tone: "#3F5D70",
    image: {
      src: "/media/piece-nilufar.svg",
      alt: "گوشوارهٔ نیلوفر، گلبرگ‌های باز با مغز لاجورد",
      ratio: "1/1",
    },
    views: [
      {
        src: "/media/piece-nilufar-b.svg",
        alt: "گلبرگ‌های گوشوارهٔ نیلوفر از زاویهٔ مایل",
        ratio: "1/1",
      },
      {
        src: "/media/piece-nilufar-c.svg",
        alt: "مغز لاجورد گوشوارهٔ نیلوفر",
        ratio: "1/1",
      },
    ],
    layout: "tall",
    status: "published",
  },
];

/**
 * What the showcase renders: drafts filtered out, exactly as a CMS would, then
 * resolved so every piece has a `tone` and a `layout`.
 *
 * Filter before resolve, never after — the `layout` fallback is positional, so
 * resolving a list that still contains drafts would shift the arrangements of
 * everything after the first hidden piece.
 */
export const publishedProducts = resolveProducts(
  products.filter((p) => p.status === "published"),
);
