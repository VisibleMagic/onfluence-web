"use client";

import { useCallback, useRef, useState } from "react";

export const useHorizontalScroll = (step = 280) => {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  const scrollBy = useCallback(
    (delta: number) => {
      const el = ref.current;
      if (!el) return;
      el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
      // Defer update slightly to reflect new position
      window.setTimeout(update, 150);
    },
    [update]
  );

  const scrollNext = useCallback(() => scrollBy(step), [scrollBy, step]);
  const scrollPrev = useCallback(() => scrollBy(-step), [scrollBy, step]);

  return { ref, scrollNext, scrollPrev, canScrollLeft, canScrollRight, update };
};


