"use client";

import { ReactNode, useEffect } from "react";
import { IconButton } from "./IconButton";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { useHorizontalScroll } from "./useHorizontalScroll";

export const HorizontalScroller = ({
  children,
  step = 280,
  className = "",
  showPrevNextOnMobile = true,
  disableGridOnLarge = false,
  snap = true,
}: {
  children: ReactNode;
  step?: number;
  className?: string;
  showPrevNextOnMobile?: boolean;
  disableGridOnLarge?: boolean;
  snap?: boolean;
}) => {
  const { ref, scrollNext, scrollPrev, canScrollLeft, canScrollRight, update } = useHorizontalScroll(step);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [ref, update]);

  return (
    <div className="relative">
      <div
        ref={ref}
        className={`w-full flex ${disableGridOnLarge ? "" : "lg:grid lg:grid-cols-12"} gap-[16px] overflow-x-auto pl-[16px] pr-[16px] md:pl-0 md:pr-0 scroll-smooth ${snap ? "snap-x snap-mandatory" : ""} ${className}`}
      >
        {children}
      </div>
      {showPrevNextOnMobile ? (
        <div className="absolute top-[-30px] right-[15px] flex gap-[8px] lg:hidden z-10">
          <IconButton className={`${canScrollLeft ? "opacity-100" : "opacity-40"}`} onClick={scrollPrev}>
            <ArrowRightIcon className="w-7 h-7 rotate-180" />
          </IconButton>
          <IconButton className={`${canScrollRight ? "opacity-100" : "opacity-40"}`} onClick={scrollNext}>
            <ArrowRightIcon className="w-7 h-7" />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};


