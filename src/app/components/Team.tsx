"use client";
import { SectionHeader } from "./common/SectionHeader";
import { HorizontalScroller } from "./common/HorizontalScroller";
import Image from "next/image";

const teamItems = [
  {
    id: 1,
    name: "Ali Powell",
    image: "/landing/team-1.jpg",
    title: "Video and AI Creator",
    description:
      "Ali is the world’s best hybrid filmmaker after honing his skills in traditional video and expanding into AI video creation. He is an expert at remote video production, animation, and full-stack editing.",
  },
  {
    id: 2,
    name: "John Biggs",
    image: "/landing/team-2.jpg",
    title: "Founder & CEO",
    description: `Ex–TechCrunch journalist and media strategist with 20+ years in technology, marketing, and storytelling.\n\nJohn has helped grow brands from obscurity to industry authority, combining a journalist’s instinct with data-driven growth systems.`,
  },
  {
    id: 3,
    name: "Viktor Shpak",
    image: "/landing/team-3.jpg",
    title: "Technology and Design",
    description:
      "Ex–TechCrunch journalist and media strategist with 20+ years in technology, marketing, and storytelling \n\nJohn has helped grow brands from obscurity to industry authority, combining a journalist’s instinct with data-driven growth systems.",
  },
  {
    id: 4,
    name: "Carol Bush",
    image: "/landing/team-4.jpg",
    title: "Content Creator",
    description:
      "Carol excels at content creation and editing and focuses on bespoke, well-crafted writing for clients. With a background in fintech, biotech, crypto, and science, her focus has been on translating difficult ideas into entertaining and informative writing.",
  },
];

export const Team = () => {
  const getWidthByIndex = (idx: number) => {
    if (idx === 0) return "col-span-4";
    if (idx === 1) return "col-span-4";
    if (idx === 2) return "col-span-2";
    if (idx === 3) return "col-span-2";
  };

  const teamItemsList = teamItems.map((item, idx) => (
    <div
      key={item.id}
      className={`${getWidthByIndex(
        idx
      )} flex-none w-[300px] sm:w-[240px] md:w-[260px] lg:w-auto lg:min-w-0 lg:flex-initial relative`}
    >
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          width={410}
          height={410}
        />
        <div className="absolute bottom-0 left-0 bg-accent-green text-text-muted px-[8px] py-[6px] uppercase w-fit text-[14px] font-regular">
          {item.title}
        </div>
      </div>

      <h3 className="font-sans text-[24px] font-medium mt-[16px]">
        {item.name}
      </h3>
      <p className="font-sans text-[14px] font-regular leading-[1.25] mt-[10px] max-w-[310px] whitespace-pre-line">
        {item.description}
      </p>
    </div>
  ));
  return (
    <section
      id="team"
      className="py-[100px] px-0 md:px-[80px] lg:px-[120px] relative overflow-hidden"
    >
      <SectionHeader
        eyebrow="Team"
        title={
          <span className="max-w-[700px] block">
            We are a collective of content innovators and growth architects.
          </span>
        }
        right={
          <p className="font-inter text-[20px] font-regular leading-[1.4] mt-[24px] max-w-[700px]">
            <b>4 people.</b> <br /> One mission — make experts <br /> impossible to
            ignore.
          </p>
        }
      />
      <HorizontalScroller className="mt-[64px] relative z-10">
        {teamItemsList}
      </HorizontalScroller>
      <Image
        className="absolute bottom-[-160px] left-[-50px] lg:bottom-[-75px] lg:left-[80px] xl:left-[120px] w-[257px] z-0"
        src="/landing/team-artefact.png"
        width={257}
        height={257}
        alt=""
      />
    </section>
  );
};
