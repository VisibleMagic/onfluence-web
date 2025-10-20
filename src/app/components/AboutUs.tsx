import Image from "next/image";
import { Typography } from "./Typography";
import { VideoComponent } from "./common/LazyVideo";

export const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="py-[100px] px-[16px] md:px-[80px] lg:px-[120px] bg-background-light flex flex-col xl:flex-row gap-[44px]"
    >
      <div className="flex flex-col gap-[16px] xl:w-1/2 lg:justify-between">
        <div>
          <span className="font-sans text-[16px] font-black text-white bg-accent px-[8px] py-[6px] uppercase w-fit">
            about us
          </span>

          <h2 className={`${Typography.h2} mt-[24px]`}>
            We are a specialist growth agency for C-level experts, scientists,
            and other vital creators.
          </h2>
        </div>
        <p className="text-[16px] font-normal leading-[1.5] xl:max-w-[440px]">
          A collective of journalists, content strategists, and growth marketers
          dedicated to one mission: taking brilliant people out of the shadows
          and into the spotlight. <br />
          <br /> We don’t do cookie-cutter social posts. We craft thought
          leadership content in your authentic voice — and use proven growth
          systems to make sure it reaches the right audience, sparks
          conversation, and drives measurable results
        </p>
      </div>
      <div className="xl:w-1/2 flex justify-center items-center ">
        <div className="relative">
          <VideoComponent
            src="/landing/video/0_Fountain_Night_1280x720_Compressed.mp4"
            poster="/landing/video/0_Fountain_Night_Poster.jpg"
            alt="Arrow Down"
            className="object-cover aspect-video lg:w-[489px] lg:h-[300px] xl:w-[789px] xl:h-[700px]"
          />

          <div className="flex flex-col gap-[10px] absolute bottom-[16px] left-[16px]">
            <div className="bg-accent-green text-text-muted px-[8px] py-[6px] uppercase w-fit text-[14px] font-bold">
              Founded 2023
            </div>
            <div className="bg-accent-green text-text-muted px-[8px] py-[6px] uppercase w-fit text-[14px] font-bold">
              First 2 clients doubled audience
            </div>
            <div className="bg-accent-green text-text-muted px-[8px] py-[6px] uppercase w-fit text-[14px] font-bold">
              Today: 5-person team.
            </div>

            <Image
              src="/landing/arrows.svg"
              alt="Arrow Down"
              width={125}
              height={142}
              className="absolute bottom-0 right-[-40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
