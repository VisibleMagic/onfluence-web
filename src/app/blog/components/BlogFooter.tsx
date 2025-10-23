import Image from "next/image";

export const BlogFooter = () => {
  return (
    <footer className="bg-background-dark px-[16px] md:px-[60px] py-[40px] md:py-[60px]">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col md:flex-row md:items-center md:justify-between gap-[20px]">
        <div className="flex items-center gap-[12px]">
          <Image src="/landing/logo.svg" alt="Onfluence" width={150} height={36} />
          <span className="text-white/70 text-[14px]">© {new Date().getFullYear()} Onfluence</span>
        </div>
        <div className="text-white/70 text-[14px]">
          Crafted with care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


