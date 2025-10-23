"use client";
import Image from "next/image";
import Link from "next/link";

export const BlogHeader = () => {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-b border-light shadow-sm">
      <div className="mx-auto w-full max-w-[1200px] flex items-center justify-between px-[16px] md:px-[60px] py-[12px] md:py-[14px]">
        <Link href="/" className="flex items-center gap-[8px]">
          <Image src="/landing/logo.svg" alt="Onfluence" width={150} height={36} />
        </Link>
        <nav className="text-text text-[14px] md:text-[16px] font-bold uppercase">
          <ul className="flex items-center gap-[12px] md:gap-[16px]">
            <li>
              <Link className="px-[10px] py-[6px] rounded-full hover:bg-background-light hover:text-text transition-colors" href="/">Home</Link>
            </li>
            <li>
              <Link className="px-[10px] py-[6px] rounded-full hover:bg-background-light hover:text-text transition-colors" href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


