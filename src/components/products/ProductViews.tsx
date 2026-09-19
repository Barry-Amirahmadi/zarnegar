"use client";

import { useMemo, useState } from "react";
import type { GalleryItem, MediaAsset, ResolvedProduct } from "@/types/content";
import { ui } from "@/content/ui";
import { toFa } from "@/lib/digits";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The other angles.
 *
 * A bottle of serum has one photograph worth showing. A ring does not — it is
 * a single physical object a buyer turns over in their hand, and the two
 * questions they cannot answer from the catalogue frame are "what does the
 * side look like" and "how big is the stone really". This strip is the answer
 * to both, and it is the one structural addition this trade needed.
 *
 * Enlargement reuses `GalleryLightbox` rather than reimplementing it. That
 * component already solves the modal semantics, the focus trap, the inert
 * background, Escape, and arrow keys that run the correct way in RTL — all of
 * it through a native `<dialog>`. A second implementation would be a second
 * thing to keep correct, and the first one to fall behind.
 *
 * The adapter below is the price of that reuse: the lightbox is typed against
 * `GalleryItem`, so the views are projected into that shape. Widening the
 * lightbox to accept a bare `MediaAsset[]` was the alternative and is worse —
 * it would make `title` and `category` optional for every caller, including the
 * gallery, where they are the caption the reader actually needs.
 *
 * The primary image leads the strip. It is the frame the reader arrived on, so
 * leaving it out would make the first thumbnail a picture they have not seen
 * while the one filling the screen above has no thumbnail at all.
 */
export function ProductViews({ product }: { product: ResolvedProduct }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const frames: MediaAsset[] = useMemo(
    () => [product.image, ...(product.views ?? [])],
    [product.image, product.views],
  );

  const items: GalleryItem[] = useMemo(
    () =>
      frames.map((image, index) => ({
        id: `${product.id}-view-${index}`,
        title: product.name,
        category: product.category,
        caption: image.caption,
        image,
        order: index,
      })),
    [frames, product.id, product.name, product.category],
  );

  // One frame is the primary image on its own, and a strip of one thumbnail
  // under the picture it is a thumbnail of says nothing.
  if (frames.length < 2) return null;

  return (
    <>
      <Reveal as="div" className="product-views">
        <ul className="product-views__strip" aria-label={ui.views.strip}>
          {frames.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                className="product-views__thumb"
                onClick={() => setOpenIndex(index)}
              >
                <EditorialImage media={image} sizes="(max-width: 768px) 28vw, 12vw" />
                {/* The whole accessible name. The image inside carries its own
                    alt, but a control has to say what pressing it does, and
                    «نمای ۲ از ۴» is what this one does. */}
                <span className="sr-only">
                  {ui.views.open} {toFa(index + 1)} {ui.views.of} {toFa(frames.length)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <GalleryLightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
