import Image from "next/image";

export const AsFeaturedIn = () => {
  return (
    <section id="as-featured-in" className="bg-black pt-[200px] pb-[100px] mt-[-100px] relative px-[16px] md:px-[80px] xl:px-[120px]">
      <div className="flex flex-col gap-[16px] lg:flex-row lg:justify-between lg:items-center">
        <div className="font-sans text-[16px] font-black text-white bg-accent px-[8px] py-[6px] uppercase w-fit">
          As featured in
        </div>
        <div className="relative">
          <p className="font-sans text-[20px] font-regular text-white leading-[1.5] md:max-w-[640px]">
            <b>John Biggs</b> — our founder is a former TechCrunch journalist,
            featured in top-tier publications worldwide.
          </p>
          <Image className="absolute left-[-80px] top-[-60px] hidden md:block" src="/landing/lightning-small.svg" alt="" width={100} height={100}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[10px] mt-[64px] gap-y-[34px] xl:grid-cols-4 lg:mx-[-60px]">
        <div className="h-[50px] flex justify-center items-center">
          <Image src="/landing/tech-crunch.png" alt="" width={212} height={30} />
        </div>
        <div className="h-[50px] flex justify-center items-center">
          <Image src="/landing/fast-company.png" alt="" width={212} height={30} />
        </div>
        <div className="h-[50px] flex justify-center items-center">
          <Image src="/landing/business-insider.png" alt="" width={212} height={30} />
        </div>
        <div className="h-[50px] flex justify-center items-center">
          <Image src="/landing/wired.png" alt="" width={212} height={30} />
        </div>
      </div>
      <Image
        className="hidden absolute right-0 top-[-100px] z-0 w-[131px] md:block"
        src="/landing/lightning.svg"
        alt=""
        width={131}
        height={131}
      />
    </section>
  );
};
