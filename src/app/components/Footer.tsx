import Link from "next/link";
import { LeadingButton } from "./LeadingButton";
import Image from "next/image";
import { VideoComponent } from "./common/LazyVideo";

const links = [
  {
    label: "About us",
    href: "#about-us",
  },
  {
    label: "Featured work",
    href: "#featured-work",
  },
  {
    label: "What we do",
    href: "#what-we-do",
  },
  {
    label: "Who we work with",
    href: "#who-we-work-with",
  },
  {
    label: "As featured in",
    href: "#as-featured-in",
  },
  {
    label: "Team",
    href: "#team",
  },
];

const socialLinks = [
  {
    icon: "/landing/instagram.svg",
    href: "/",
    label: "Instagram",
  },
  {
    icon: "/landing/x.svg",
    href: "/",
    label: "X",
  },
  {
    icon: "/landing/youtube.svg",
    href: "/",
    label: "Youtube",
  },
];

export const Footer = () => {
  const linksList = links.map((link) => (
    <div key={link.label} className="">
      <Link
        className="font-sans text-white text-[16px] font-bold uppercase hover:text-accent transition-all duration-300"
        href={link.href}
      >
        {link.label}
      </Link>
    </div>
  ));

  const socialLinksList = socialLinks.map((link, idx) => (
    <Link key={idx} href={link.href}>
      <Image
        className="hover:opacity-50 transition-all duration-300"
        src={link.icon}
        alt={link.label}
        width={18}
        height={18}
      />
    </Link>
  ));

  return (
    <footer className="bg-background-dark lg:h-[850px] py-[100px] px-[16px] md:px-[80px] lg:px-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-2 order-2 lg:order-1 mt-[70px] lg:mt-0">
          <h1
            className={`font-sans font-black text-white text-[40px] md:text-[64px] leading-[1.2]`}
          >
            Your expertise <br /> deserves a bigger stage.
          </h1>

          <p className="font-sans text-white text-[16px] md:text-[20px] font-bold mt-[24px]">
            Let’s make you impossible to ignore.
          </p>

          <LeadingButton className="mt-[24px]">
            Book Your Consultation
          </LeadingButton>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] mt-[60px] md:mt-[230px] max-w-[700px]">
            {linksList}
          </div>

          <div className="flex flex-row gap-[30px] items-center mt-[30px]">
            {socialLinksList}
          </div>
        </div>

        <div className="flex justify-end items-end order-1 lg:order-2 col-span-2">
          <VideoComponent
            className="w-[188px] md:w-[360px] lg:w-[617px]"
            src="/landing/video/4673506_Iris_Blue_Eye_3840x2160_Compressed.mp4"
            alt="footer logo"
          />
        </div>
      </div>
    </footer>
  );
};
