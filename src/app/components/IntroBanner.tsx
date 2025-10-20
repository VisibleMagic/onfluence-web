import Image from "next/image";
import { VideoComponent } from "./common/LazyVideo";

export const IntroBanner = () => {
  return (
    <section
      className="bg-black h-screen flex flex-row max-lg:flex-col-reverse items-end pl-[120px] max-md:pl-[16px] max-md:pr-[16px] max-lg:pl-[80px] max-lg:pr-[80px] justify-between"
      aria-labelledby="intro-heading"
      aria-describedby="intro-description"
    >
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <VideoComponent
          src="/landing/video/onfluence-background.mp4"
          poster="/landing/video/onfluence-background.jpg"
          alt="Diamonds Intro"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-[100px] relative">
        <h1
          id="intro-heading"
          className="text-white font-bold leading-[1.2] text-[clamp(40px,6vw,64px)]"
        >
          You’re Brilliant. <br /> Why Are You Still Invisible Online?{" "}
        </h1>
        <p
          id="intro-description"
          className="text-white font-bold max-w-[940px] mt-[24px] text-[clamp(14px,2.2vw,20px)]"
        >
          We help founders, CEOs, and industry experts turn expertise into
          influence — growing audiences by +10% every month and making sure the
          right people can’t ignore you.
        </p>
      </div>

      <div
        className="pr-[10px] pb-[20px] max-lg:absolute max-lg:top-[130px] max-lg:right-[10px] relative"
        aria-hidden="true"
      >
        <Image
          src="/landing/diamonds-intro.svg"
          alt=""
          aria-hidden
          width={277}
          height={407}
          className="max-lg:w-[200px] max-lg:h-[300px] max-md:w-[150px] max-md:h-[200px]"
        />
      </div>
    </section>
  );
};
