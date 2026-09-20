"use client";

import { useId, useState } from "react";
import type { ResolvedProduct } from "@/types/content";
import { engraving, inquiry } from "@/content/sections";
import { site } from "@/content/site";
import { toFa } from "@/lib/digits";
import { fillTemplate, whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The signature component of this site.
 *
 * Every derivative of this template gets exactly one piece of structure no
 * other client has, drawn from something the trade actually does. A jeweller's
 * is this: the plate is delivered with a cut border and an empty middle, and
 * the buyer supplies the line that goes in it. The site already says so three
 * times in prose. This is the same promise made operable — the reader types
 * the line and watches it cut, in the same face the border is cut in, before
 * anyone has spoken to anyone.
 *
 * What it deliberately is not:
 *
 * - **Not a configurator.** No price, no turnaround, no stock, no "order"
 *   state. It renders text in a shape and hands that text to the inquiry
 *   channel that already existed (§42). Nothing about the atelier is asserted
 *   that the atelier had not already asserted (§44.1).
 * - **Not a canvas.** The plate is an inline SVG, so the engraved line is real
 *   selectable text in the document, it inherits the display face rather than
 *   re-fetching one, and it scales without a second raster. A canvas would be
 *   an image of text, which no screen reader and no zoom would survive.
 *
 * The proportion is the piece's own: the plate is described in `details` as
 * ۲۶ in ۱۸ millimetres, and the viewBox is 260 × 180.
 */
export function EngravingPreview({ product }: { product: ResolvedProduct }) {
  const [text, setText] = useState("");
  const fieldId = useId();
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;

  const trimmed = text.trim();
  // A paste outruns `maxLength` on some mobile keyboards, so the limit is
  // enforced here too rather than trusted to the attribute alone.
  const tooLong = trimmed.length > engraving.maxLength;
  const cut = trimmed.slice(0, engraving.maxLength);

  // The plate starts empty, and that is not a placeholder state — it is the
  // product. `description` says the piece ships with a cut border and an empty
  // middle, so an empty middle is exactly what the reader should first see. A
  // sample line was tried here and rejected: it either reads as real and
  // misleads, or is faded to read as not-real and stops being legible.

  const message = trimmed
    ? fillTemplate(engraving.message, { product: product.name, text: cut })
    : fillTemplate(engraving.emptyMessage, { product: product.name });

  return (
    <Reveal as="section" aria-labelledby={`${fieldId}-heading`} className="engraving">
      <Eyebrow>{engraving.eyebrow}</Eyebrow>
      <h2 id={`${fieldId}-heading`} className="t-h3 mt-3">
        {engraving.heading}
      </h2>
      <p className="t-lead mt-3">{engraving.lead}</p>

      <div className="engraving__body">
        {/* The plate. `aria-hidden` because the engraved line is already in the
            document twice over — the reader typed it into the field above, and
            the field is what a screen reader should read back. Announcing the
            preview as well would report the same words a third time. */}
        <svg
          className="engraving__plate"
          viewBox="0 0 260 180"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="4" y="4" width="252" height="172" rx="6" className="engraving__metal" />
          <rect x="16" y="16" width="228" height="148" rx="3" className="engraving__border" />
          <rect x="22" y="22" width="216" height="136" rx="2" className="engraving__field" />
          <text
            x="130"
            y="90"
            textAnchor="middle"
            dominantBaseline="middle"
            className="engraving__cut"
          >
            {cut}
          </text>
        </svg>

        <div className="engraving__controls">
          {/* A visible label, not a placeholder standing in for one: a
              placeholder disappears the moment it is needed most, which is
              while the field has content in it. */}
          <label htmlFor={fieldId} className="t-label">
            {engraving.inputLabel}
          </label>

          <input
            id={fieldId}
            type="text"
            inputMode="text"
            className="engraving__input"
            value={text}
            maxLength={engraving.maxLength}
            onChange={(event) => setText(event.target.value)}
            aria-describedby={tooLong ? `${helpId} ${errorId}` : helpId}
            aria-invalid={tooLong || undefined}
          />

          <p id={helpId} className="t-meta engraving__help">
            {engraving.helper}{" "}
            {/* Polite, not assertive: the count changes on every keystroke and
                an assertive region would interrupt the reader typing. */}
            <span aria-live="polite" className="engraving__count">
              {toFa(cut.length)} {engraving.counterJoin} {toFa(engraving.maxLength)}
            </span>
          </p>

          {tooLong && (
            <p id={errorId} className="engraving__error t-meta">
              {engraving.tooLong}
            </p>
          )}

          <div className="engraving__actions">
            <Button href={whatsappLink(site.contact.whatsapp, message)} external>
              {engraving.submitLabel}
            </Button>
          </div>

          {/* The same screen-reader note every outbound link on the site
              carries, because this one leaves it too. */}
          <span className="sr-only">{inquiry.newWindow}</span>
        </div>
      </div>
    </Reveal>
  );
}
