import Link from "next/link";

export const FeaturedWork = () => {
  return (
    <section id="featured-work" className="flex flex-col gap-[16px] md:flex-row bg-background-light">
      <div
        style={{ backgroundImage: "url('/landing/featured-case-1.jpg')" }}
        className="h-[617px] bg-cover bg-center md:w-1/2 md:h-[717px] px-[16px] pt-[58px] md:px-[60px] flex flex-col justify-between pb-[20px] relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90" />
        <div className="flex justify-between items-center relative">
          <div className="font-sans text-[16px] font-black text-white bg-accent px-[8px] py-[6px] uppercase w-fit">
            featured work
          </div>
          <Link className="md:hidden" href="/blog">
            <div className="bg-button-background w-[64px] h-[64px] flex items-center justify-center hover:bg-button-background/70 transition-all duration-300 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 27 27"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[16px] relative">
          <h2 className="font-display text-[32px] font-medium leading-[1.2] text-white">
            A Massive Consumer Products Company, A Shy CEO
          </h2>
          <p className="text-[16px] font-normal leading-[1.5] text-white">
            From silent to sought-after, we brought a global battery leader into
            the spotlight. After years of avoiding the press, our work put them
            on the map, driving coverage, shaping their narrative, and turning a
            quiet industry player into a recognized voice.
          </p>
          <div className="flex flex-row gap-[16px]">
            <div className="p-[8px] border border-white text-white uppercase text-[14px] font-regular">
              Content Strategy
            </div>
            <div className="p-[8px] border border-white text-white uppercase text-[14px] font-regular">
              Analytics
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: "url('/landing/featured-case-2.jpg')" }}
        className="h-[617px] bg-cover bg-center md:w-1/2 md:h-[717px] px-[16px] pt-[58px] md:px-[60px] flex-col justify-between pb-[20px] relative hidden md:flex"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90" />
        <div className="flex justify-end items-center relative">
          <Link href="/blog">
            <div className="bg-button-background w-[64px] h-[64px] flex items-center justify-center hover:bg-button-background/70 transition-all duration-300 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 27 27"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[16px] relative">
          <h2 className="font-display text-[32px] font-medium leading-[1.2] text-white">
            From Afterthought to Power Player: A Crypto Story
          </h2>
          <p className="text-[16px] font-normal leading-[1.5] text-white">
            From unnoticed to unmissable — we helped a crypto founder grow from
            0 X followers to 120,000. They went on to achieve a massive TGE that
            dwarfed competitors.
          </p>
          <div className="flex flex-row gap-[16px]">
            <div className="p-[8px] border border-white text-white uppercase text-[14px] font-regular">
              Content Strategy
            </div>
            <div className="p-[8px] border border-white text-white uppercase text-[14px] font-regular">
              Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
