import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * robots.txt — disallow everything.
 *
 * ZARNEGAR is a demonstration under Barry's own GitHub account, for a brand
 * that does not exist. A fictional Persian jewellery atelier ranking in search
 * helps nobody, and it is actively harmful once a second demo in this family
 * ships: a prospect who finds the identical layout under a different brand name
 * learns the wrong thing about the work. So the whole site is excluded, and
 * `layout.tsx` sets `robots: { index: false, follow: false }` in the root
 * metadata as well — a `<meta name="robots">` on every page is the half that a
 * crawler actually honours here, for the reason below.
 *
 * **A caveat worth knowing before reading anything into this file:** a crawler
 * only ever fetches `/robots.txt` from the *origin root*. On a GitHub Pages
 * project site the deployment owns `user.github.io/repo/`, not
 * `user.github.io/`, so the file generated here is served at
 * `/repo/robots.txt` and no crawler will look for it there — the rules that
 * actually apply come from whatever sits at the root, which this repository
 * does not control. That is exactly why the exclusion is not left to this file
 * alone.
 *
 * It is generated anyway because it is correct for the two deployments that
 * matter for a template: a custom domain, and a user or organisation site. Both
 * serve this repo from the root, and there the file lands exactly where it
 * should.
 */
/** Required under `output: "export"` — see the note in `sitemap.ts`. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
