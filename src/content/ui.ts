import type { UiStrings } from "@/types/content";

/**
 * Interface strings — accessible names, and the few words the UI says on its
 * own behalf rather than the brand's.
 *
 * Separate from `sections.ts` because the two are edited by different people
 * for different reasons: that file is the copy deck a brand rewrites, this one
 * is what the interface is called. Neither belongs inside a component, though,
 * and until Phase 03 half of this set was hardcoded while the other half —
 * `collection.indexLabel`, `productPage.breadcrumbLabel`, `inquiry.newWindow` —
 * already sat in the copy deck. That inconsistency was the finding; this file
 * is the resolution of it.
 *
 * Most of these are read only by a screen reader. That is not a reason to leave
 * them in the markup: §28 has no exception for text a sighted reader never sees,
 * and a hardcoded string is one no editor and no translator can reach.
 */
export const ui: UiStrings = {
  skipToContent: "پرش به محتوای اصلی",

  nav: {
    primary: "پیمایش اصلی",
    footer: "پیمایش پانوشت",
    /** Follows the brand name: «زرنگار — صفحهٔ اصلی». */
    home: "صفحهٔ اصلی",
    openMenu: "گشودن فهرست",
    closeMenu: "بستن فهرست",
    menuDialog: "فهرست اصلی",
  },

  views: {
    /** Accessible name of the thumbnail strip, which is a list of controls. */
    strip: "نماهای دیگر این قطعه",
    /** Prefixes each thumbnail's accessible name: «نمای ۲ از ۳». */
    open: "نمای",
    /** Between position and total, the same word the lightbox counter uses. */
    of: "از",
  },

  gallery: {
    lightbox: "نمای بزرگ تصویر",
    close: "بستن نمای بزرگ",
    previous: "تصویر قبلی",
    next: "تصویر بعدی",
    /** Between position and total: «۳ از ۶». */
    counterJoin: "از",
  },
};
