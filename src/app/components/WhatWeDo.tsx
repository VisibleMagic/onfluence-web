import { VideoComponent } from "./common/LazyVideo";
import { Typography } from "./Typography";

const whatWeDoItems = [
  {
    id: 1,
    videoSrc: "/landing/video/4934963_Person_People_3840x2160_Compressed.mp4",
    title: "Voice x Reach — Thought Leadership Content",
    description:
      "We turn your insights into high-impact articles, posts, and videos — all in your authentic voice.",
    tag: "Your ideas, everywhere.",
  },

  {
    id: 2,
    videoSrc: "/landing/video/5369547_Coll_wavebreak_Businessman_3840x2160_Compressed.mp4",
    title: "Growth x Precision — Social Media Audience Growth",
    description:
      "+10% audience growth every month, backed by proven strategies and analytics.",
    tag: "Measurable growth, month after month.",
  },
  {
    id: 3,
    videoSrc: "/landing/video/0_Crystal_Faceted_1920x1080_Compressed.mp4",
    title: "Presence x Platform — Multi-Channel Management",
    description:
      "LinkedIn, X, YouTube, TikTok — managed end-to-end for maximum impact.",

    tag: "Own the conversation on every platform.",
  },
  {
    id: 4,
    videoSrc: "/landing/video/0_Road_Sky_720x1280_Compressed.mp4",
    title: "Story x Substance — Narrative-Driven Brand Positioning",
    description:
      "We craft stories that connect emotionally while proving your authority in your field.",
    tag: "Stories that make you unforgettable.",
  },
  {
    id: 5,
    videoSrc: "/landing/video/0_Business_Data_3840x2160_Compressed.mp4",
    title: "Data x Direction — Analytics & ROI Tracking",
    description:
      "Clear metrics that prove your influence is growing — and where to focus next.",
    tag: "Know what works — and why.",
  },
  {
    id: 6,
    videoSrc: "/landing/video/0_Robot_Construction_3840x2160_Compressed.mp4",
    title: "Engagement x Authority — Community Building",
    description:
      "Transform followers into a loyal network that advocates for you and your ideas.",
    tag: "From followers to true believers.",
  },
];

export const WhatWeDo = () => {
  const whatWeDoItemsList = whatWeDoItems.map((item) => (
    <div
      key={item.id}
      className="flex flex-col md:flex-row md:items-start border-t border-light py-[24px] md:gap-[32px] md:justify-between"
    >
      <div className="flex flex-col md:flex-row md:w-1/2 md:gap-[48px]">
        <div className="flex flex-row justify-between">
          <p className="text-[14px] font-bold text-muted">
            {String(item.id).padStart(2, "0")}
          </p>
          <VideoComponent
            src={item.videoSrc}
            alt={item.title}
            className="w-[131px] h-[86px] object-cover md:hidden"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-[32px] md:mt-0">
          <div>
            <p className="font-sans text-[20px] font-bold text-muted leading-[1.5] mt-[16px] md:mt-0">
              {item.title}
            </p>
            <span className="font-sans text-[14px] font-normal text-white bg-black py-[3px] px-[8px]">
              {item.tag}
            </span>
          </div>
          <p className="font-sans text-[14px] font-normal text-muted leading-[1.25] mt-[16px] md:hidden">
            {item.description}
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-row md:w-1/2 justify-between">
        <p className="font-sans text-[14px] font-normal text-muted leading-[1.25] mt-[16px] max-w-[371px] md:mt-0">
          {item.description}
        </p>
        <VideoComponent
          src={item.videoSrc}
          alt={item.title}
          className="w-[131px] h-[86px] object-cover hidden md:block"
        />
      </div>
    </div>
  ));
  return (
    <section
      id="what-we-do"
      className="py-[100px] md:py-[120px] px-[16px] md:px-[80px] lg:px-[120px] bg-background-light"
    >
      <div className="flex flex-col gap-[16px] mb-[64px] md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <div className="font-sans text-[16px] font-black text-white bg-accent px-[8px] py-[6px] uppercase w-fit">
            What we do
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className={`${Typography.h2} md:max-w-[744px]`}>
            We transform expertise into influence through{" "}
            <span className="font-extralight italic">
              creativity, strategy, and digital growth.
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] md:gap-[0px]">
        {whatWeDoItemsList}
      </div>
    </section>
  );
};
