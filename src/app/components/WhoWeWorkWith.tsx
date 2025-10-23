"use client";
import { SectionHeader } from "./common/SectionHeader";
import { HorizontalScroller } from "./common/HorizontalScroller";
import Image from "next/image";

const whoWeWorkWithItems = [
  {
    id: 1,
    image: "/landing/who-we-work-with-1.jpg",
    title: "Tech Founders",
    description:
      "We help startup leaders get noticed by investors, partners, and customers — not just through their product, but through their own voice.",
  },
  {
    id: 2,
    image: "/landing/who-we-work-with-2.jpg",
    title: "Tech Founders",
    description:
      "We help startup leaders get noticed by investors, partners, and customers — not just through their product, but through their own voice.",
  },
  {
    id: 3,
    image: "/landing/who-we-work-with-3.jpg",
    title: "Tech Founders",
    description:
      "We help startup leaders get noticed by investors, partners, and customers — not just through their product, but through their own voice.",
  },
];

export const WhoWeWorkWith = () => {
  const whoWeWorkWithItemsList = whoWeWorkWithItems.map((item) => (
    <div
      key={item.id}
      className="col-span-4 md:h-[413px] lg:h-[450px] xl:h-[550px] bg-white flex-none w-[300px] sm:w-[240px] md:w-auto relative z-10"
    >
      <div className="flex flex-row justify-end">
        <Image
          className="w-[224px] h-[224px] object-cover xl:w-[345px] xl:h-[345px]"
          src={item.image}
          alt="Who we work with"
          width={345}
          height={345}
        />
      </div>
      <div className="flex flex-col pt-[48px] pb-[32px] px-[32px] gap-[16px]">
        <h3 className="font-sans font-medium text-[24px] leading-[1.4] text-muted">
          {item.title}
        </h3>
        <p className="font-sans font-regular text-[14px] leading-[1.25] text-muted max-w-[390px]">
          {item.description}
        </p>
      </div>
    </div>
  ));
  return (
    <section id="who-we-work-with" className="px-0 md:px-[80px] lg:px-[120px] relative">
      <SectionHeader eyebrow="Who we work with" />
      <HorizontalScroller className="mt-[32px]" snap>
        {whoWeWorkWithItemsList}
      </HorizontalScroller>
    </section>
  );
};
