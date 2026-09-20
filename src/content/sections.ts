import type {
  AboutContent,
  BandTones,
  BrandContent,
  CollectionContent,
  ContactContent,
  CtaContent,
  GalleryContent,
  EngravingContent,
  GalleryPageContent,
  HeroContent,
  InquiryContent,
  NotFoundContent,
  ProductPageContent,
  ShowcaseContent,
  StatementContent,
  ValueItem,
} from "@/types/content";

/**
 * PLACEHOLDER CONTENT.
 *
 * Every line below is a *brand position* an editor can rewrite, not a factual
 * claim. Nothing states a founding year, a hallmark, a certificate, an award or
 * a number about the atelier, because none was supplied. Read this file as the
 * copy deck. Attributes of the *pieces* live in `products.ts` and are a
 * different category — see the note at the top of that file.
 *
 * TYPING RULE: every export is annotated with an interface from
 * `@/types/content`, never left to inference. An inferred type describes the
 * literal that happens to be written here; a declared one describes what any
 * source — this file, or a CMS response — has to provide. Only the second is a
 * contract, and the second is the whole claim of the content layer.
 *
 * LINK RULE: every `href` here is written from the site root — a route as
 * `/products/`, an in-page target as `/#contact`. Bare `#contact` worked while
 * the site was a single page and silently resolves to nothing the moment the
 * same component renders on `/products/`. `next/link` applies the deployment
 * base path to a root-relative href, so this form is also the only one that
 * survives being served from a GitHub Pages project subpath.
 */

export const hero: HeroContent = {
  eyebrow: "کارگاه طلا و سنگ",
  heading: "هر قطعه، یک بار ساخته می‌شود",
  lead: "زرنگار کارگاه کوچکی است. قطعه‌ها دستی ساخته می‌شوند، پس تعدادشان کم است و هیچ‌کدام دقیقاً شبیه قبلی در نمی‌آید.",
  primary: { label: "دیدن مجموعه", href: "/#products" },
  secondary: { label: "دربارهٔ کارگاه", href: "/#brand" },
  scrollHint: "پیمایش کنید",
  image: {
    src: "/media/hero-main.svg",
    alt: "قطعه‌ای از مجموعهٔ زرنگار روی زمینهٔ تیره",
    ratio: "4/5",
  },
  inset: {
    src: "/media/hero-inset.svg",
    alt: "نمای نزدیک از نقش قلم‌زده روی طلا",
    ratio: "1/1",
  },
  insetCaption: "نقش ترنج، قلم‌زده",
};

/**
 * What colour each band of the homepage lends the page as you pass through it.
 *
 * Warm throughout and narrow on purpose. The pieces themselves supply the only
 * real departures — the green of آویشن, the blue of نیلوفر — and they earn them
 * by being the subject. If the bands ranged as widely, the page would read as a
 * colour sequence rather than as a workshop with a light in it.
 */
export const bandTones: BandTones = {
  hero: "#A8834A",
  statement: "#6E5A34",
  values: "#8A6E3C",
  gallery: "#B29A66",
  cta: "#8A6E3C",
};

export const statement: StatementContent = {
  text: "طلا را می‌شود دوباره آب کرد. کاری که رویش شده، نه. برای همین کار مهم‌تر از فلز است.",
  attribution: "زرنگار",
};

export const showcase: ShowcaseContent = {
  eyebrow: "مجموعه",
  heading: "نُه قطعه، سه دسته",
  lead: "انگشتر، گردن‌آویز و گوشواره. وزن، عیار و سنگ هر قطعه در صفحهٔ خودش نوشته شده است.",
  linkLabel: "دیدن قطعه",
  /** The homepage showcase is the narrative cut of the collection; this is the
   *  way out of it into the full collection page. */
  allLabel: "صفحهٔ مجموعه",
  allHref: "/products/",
};

/**
 * Collection page — the full catalogue.
 *
 * Deliberately a different voice from `showcase` above. The homepage sequences
 * the pieces and tells a story about how they are made; this page is the
 * register of everything that exists, so it opens by describing the collection
 * rather than by arguing for it. Nothing here counts the pieces in prose — the
 * count is rendered from the data, so it cannot go stale.
 */
export const collection: CollectionContent = {
  eyebrow: "مجموعه",
  heading: "همهٔ قطعه‌ها، کنار هم",
  lead: "برای دیدن وزن، عیار، سنگ و اندازهٔ هر قطعه، وارد صفحهٔ آن شوید.",
  /** Accessible name of the category index; it is a navigation landmark. */
  indexLabel: "دسته‌بندی قطعه‌ها",
  /** Accessible name of the list the index points into. */
  listLabel: "قطعه‌ها",
  /** Follows the piece count, e.g. «۹ قطعه». */
  countLabel: "قطعه",
  seo: {
    title: "مجموعه",
    description: "فهرست کامل قطعه‌های زرنگار، همراه با دستهٔ هر قطعه.",
  },
};

/**
 * Piece detail page — labels and the inquiry message.
 *
 * «ادامهٔ مجموعه» rather than «قطعه‌های مرتبط»: with three pieces per category
 * a relation does exist, but it is «هم‌دسته», not «مرتبط», and a heading that
 * claims a curated relationship where the rule is really "same category, next
 * in order" is the kind of small dishonesty a reader notices.
 */
export const productPage: ProductPageContent = {
  detailsHeading: "مشخصات",
  relatedEyebrow: "ادامه",
  relatedHeading: "ادامهٔ مجموعه",
  backLabel: "بازگشت به مجموعه",
  breadcrumbHome: "صفحهٔ اصلی",
  breadcrumbCollection: "قطعه‌ها",
  breadcrumbLabel: "مسیر صفحه",
};

export const inquiry: InquiryContent = {
  label: "پرسش دربارهٔ این قطعه",
  /** `{product}` is replaced with the piece name at render time. */
  message: "سلام. دربارهٔ «{product}» سؤال داشتم.",
  /** The same channel without a piece in hand — used on the about page. */
  generalLabel: "نوشتن در واتساپ",
  generalMessage: "سلام. سؤالی دربارهٔ قطعه‌های زرنگار داشتم.",
  /** Appended for screen readers to any link that leaves the site. */
  newWindow: "در پنجرهٔ تازه باز می‌شود",
};

/**
 * Custom engraving.
 *
 * The atelier already says, in three separate places, that the buyer writes
 * the text and the atelier only supplies the border. This is that promise made
 * operable: the reader types the line and sees it cut, in the same face the
 * border is cut in, before they ever open a conversation.
 *
 * It claims nothing. There is no price, no turnaround, no "approved" state —
 * it shows a piece of text in a shape, and hands the text to the inquiry that
 * already existed.
 */
export const engraving: EngravingContent = {
  eyebrow: "سفارش اختصاصی",
  heading: "متن را بنویسید، روی صفحه ببینید",
  lead: "حاشیه ثابت است و مرکز خالی. هر چه اینجا بنویسید با همان قلمی کنده می‌شود که حاشیه کنده شده.",
  inputLabel: "متن کتیبه",
  helper: "یک نام، یک تاریخ، یا یک بیت کوتاه.",
  maxLength: 18,
  tooLong: "متن از اندازهٔ صفحه بلندتر است. کوتاهش کنید.",
  counterJoin: "از",
  submitLabel: "فرستادن این متن در واتساپ",
  message: "سلام. برای «{product}»، متن «{text}» را می‌خواستم.",
  emptyMessage: "سلام. دربارهٔ «{product}» و متن سفارشی‌اش سؤال داشتم.",
};

export const brand: BrandContent = {
  eyebrow: "دربارهٔ زرنگار",
  heading: "روش کار ما",
  lead: "چهار چیزی که در هر قطعه، از انتخاب سنگ تا آخرین پرداخت، به آن برمی‌گردیم.",
  image: {
    src: "/media/values-texture.svg",
    alt: "نمای نزدیک از سطح کارشدهٔ یکی از قطعه‌های زرنگار",
    ratio: "3/4",
  },
};

export const values: ValueItem[] = [
  {
    id: "v-1",
    title: "وزن، نوشته می‌شود",
    body: "وزن و عیار هر قطعه روی صفحهٔ خودش هست. پرسیدنش نباید لازم باشد.",
  },
  {
    id: "v-2",
    title: "کار دست، با نشانه‌هایش",
    body: "قطعهٔ دست‌ساز یکدست ماشینی نیست. این را عیب نمی‌دانیم و صافش نمی‌کنیم.",
  },
  {
    id: "v-3",
    title: "سنگ، بی‌بزرگ‌نمایی",
    body: "سنگ را همان‌طور که هست عکس می‌گیریم و همان‌طور که هست توضیح می‌دهیم.",
  },
  {
    id: "v-4",
    title: "تعمیر، تا همیشه",
    body: "قطعه‌ای که اینجا ساخته شده، اینجا هم تعمیر می‌شود؛ بدون محدودیت زمانی.",
  },
];

export const gallery: GalleryContent = {
  eyebrow: "گالری",
  heading: "کارگاه، از نزدیک",
  lead: "مرحله‌های ساخت، سنگ پیش از نشاندن، و جزئیاتی که در اندازهٔ واقعی دیده نمی‌شوند.",
  viewLabel: "بزرگ‌نمایی",
  /** The way out of the homepage band and into the full gallery. */
  allLabel: "صفحهٔ گالری",
  allHref: "/gallery/",
};

/**
 * Gallery page.
 *
 * Same eight images as the homepage band, and the difference is scale rather
 * than content: the homepage shows them as a wall of tiles, this shows them as
 * plates. The copy says so plainly instead of pretending there is more here.
 */
export const galleryPage: GalleryPageContent = {
  eyebrow: "گالری",
  heading: "تصویرها، بزرگ‌تر",
  lead: "همان تصویرها، در اندازه‌ای که جزئیات در آن دیده می‌شود. برای تمام‌صفحه، روی هر کدام بزنید.",
  seo: {
    title: "گالری",
    description: "تصویرهای کارگاه زرنگار — مرحله‌های ساخت، سنگ‌ها و جزئیات قطعه‌ها.",
  },
};

/**
 * About page.
 *
 * Short on purpose. There is no founding year, no founder, no workshop address,
 * no "since" — none of that has been supplied, and a demo that invents a
 * company history to fill an about page is making the §44.1 mistake in prose
 * instead of in data. What is written here is *position*: how the atelier
 * decides what to make, which is something a brand can assert about itself.
 *
 * It is also not a restatement of the four values on the homepage. Those say
 * what the atelier holds to; this says why the collection stays this size.
 */
export const about: AboutContent = {
  eyebrow: "دربارهٔ ما",
  heading: "چرا مجموعه کوچک می‌ماند",
  lead: "نُه قطعه، و قرار نیست هر فصل بیشتر شود. دلیلش را اینجا نوشته‌ایم.",
  body: [
    "هر قطعه با دست ساخته می‌شود، و این یعنی زمان ساخت را نمی‌شود کوتاه کرد. می‌شود به‌جایش تعداد را بالا برد و کار را سپرد، ولی آن‌وقت چیزی که تحویل می‌دهیم دیگر همان چیزی نیست که رویش اسم گذاشته‌ایم.",
    "پس مجموعه کوچک می‌ماند و به‌جای اضافه‌کردن، بازبینی می‌کنیم: هر قطعه‌ای که در مجموعه هست دوباره ساخته و دوباره سنجیده می‌شود، و اگر چیزی در آن بهتر نمی‌شود، همان‌طور می‌ماند.",
    "سفارش اختصاصی جای رشد ماست. کتیبه با متن سفارش‌دهنده کنده می‌شود و ترنج با نقش و اندازهٔ او ساخته می‌شود — همان نُه قطعه، با یک تصمیم که مال شماست.",
  ],
  image: {
    src: "/media/gallery-05.svg",
    alt: "میز کار زرگری زرنگار در نور اول صبح",
    ratio: "4/3",
  },
  seo: {
    title: "دربارهٔ ما",
    description: "چرا مجموعهٔ زرنگار کوچک می‌ماند، و چطور می‌توانید سفارش بدهید.",
  },
};

/**
 * Contact block — the inquiry architecture of §42, in full.
 *
 * WhatsApp first, Instagram second, then the direct details. No form: a form
 * needs a third-party backend to post to, and wiring a real hosted endpoint is
 * outside what a presented template needs (§51). The mechanism that exists is
 * the one the piece pages already use.
 */
export const contact: ContactContent = {
  eyebrow: "تماس",
  heading: "ساده‌ترین راه، پیام مستقیم است",
  lead: "برای پرسش دربارهٔ یک قطعه، یا برای سفارش اختصاصی، در واتساپ بنویسید.",
  instagramLabel: "اینستاگرام",
  labels: {
    city: "شهر",
    phone: "تلفن",
    email: "ایمیل",
  },
};

export const cta: CtaContent = {
  eyebrow: "سفارش اختصاصی",
  heading: "قطعه‌ای در ذهن دارید؟",
  body: "نقش، سنگ، اندازه و متن را با هم انتخاب می‌کنیم. پیش از شروع، وزن تقریبی و زمان ساخت را می‌گوییم.",
  primary: { label: "سفارش و مشاوره", href: "/about/#contact" },
  secondary: { label: "دیدن قطعه‌ها", href: "/products/" },
  image: {
    src: "/media/cta-field.svg",
    alt: "",
    ratio: "16/9",
  },
};

/**
 * The 404 page.
 *
 * Copy, like every other page's — it was written into the component itself and
 * is the last page on the site whose words a CMS could not have reached. A
 * reader arrives here having already gone wrong, so the page says what happened
 * and offers exactly one way out rather than a menu of guesses.
 */
export const notFound: NotFoundContent = {
  eyebrow: "صفحه پیدا نشد",
  heading: "این نشانی وجود ندارد",
  lead: "ممکن است نشانی تغییر کرده باشد. از صفحهٔ اصلی می‌توانید مجموعه و گالری را ببینید.",
  action: { label: "بازگشت به صفحهٔ اصلی", href: "/" },
};
