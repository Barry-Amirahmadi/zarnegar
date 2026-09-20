"use client";

import { useEffect } from "react";
import { useShade } from "./ShadeField";
import { useInView } from "./useInView";

/**
 * A band claiming the ambient field as the reader passes through it.
 *
 * `useShadeClaim` already covers the *product* case, where several pieces are
 * on screen at once and hover has to arbitrate between them. A band is the
 * opposite problem: there is only ever one of it, it fills the viewport, and
 * nothing about it is hoverable. So the rule here is plain scroll position,
 * and the two hooks stay separate rather than growing a mode flag.
 *
 * It renders a sentinel rather than taking a ref on the section because the
 * sections are server components — a hook cannot run in one. The sentinel
 * spans its parent, so what is observed is the band's own passage and not an
 * arbitrary point inside it. `-42%` on both edges means the claim lands as the
 * band's middle reaches the middle of the screen, which is where a reader
 * actually is when they would say they are "looking at" it.
 *
 * Its parent must be positioned; every band that mounts one carries
 * `.shade-wash`, which is `position: relative`.
 */
export function ShadeClaim({ tone }: { tone: string }) {
  const claimShade = useShade();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: "-42% 0px -42% 0px",
    once: false,
  });

  useEffect(() => {
    if (inView) claimShade(tone);
  }, [inView, claimShade, tone]);

  return <div ref={ref} aria-hidden="true" className="shade-claim" />;
}
