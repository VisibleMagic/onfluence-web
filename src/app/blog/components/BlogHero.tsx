import { Typography } from "@/app/components/Typography";

export const BlogHero = ({
  title = "Blog",
  imageSrc = "/landing/video/onfluence-background.jpg",
}: {
  title?: string;
  imageSrc?: string;
}) => {
  return (
    <section
      className="relative h-[320px] md:h-[420px] bg-center bg-cover"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
      <div className="relative h-full flex items-end px-[16px] md:px-[60px] pb-[32px]">
        <h1 className={`${Typography.h1} text-white`}>{title}</h1>
      </div>
    </section>
  );
};


