"use client";
import Image from "next/image";
import { LeadingButton } from "./LeadingButton";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    label: "About us",
    href: "/#about-us",
  },
  {
    label: "Featured work",
    href: "/#featured-work",
  },
  {
    label: "What we do",
    href: "/#what-we-do",
  },
  {
    label: "Who we work with",
    href: "/#who-we-work-with",
  },
  {
    label: "As featured in",
    href: "/#as-featured-in",
  },
  {
    label: "Team",
    href: "/#team",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItemsList = menuItems.map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className="hover:text-accent transition-all duration-300"
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    <header
      className={`absolute top-0 left-0 w-full z-10 px-[32px] py-[20px] transition-all duration-300 ${
        open ? "bg-white" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Image src="/landing/logo.svg" alt="Logo" width={212} height={50} />
        </div>
        <div>
          <MenuButton open={open} setOpen={setOpen} />
        </div>
        <div className="max-md:hidden">
          <LeadingButton>Let&apos;s Talk!</LeadingButton>
        </div>
      </div>

      <div className={`${open ? "" : "hidden"} max-md:h-screen transition-all duration-300 py-[100px] max-md:px-[20px] px-[120px]`}>
        <nav>
          <ul className="flex max-lg:flex-col max-lg:gap-[20px] flex-row gap-[10px] justify-between text-[16px] uppercase font-bold">
            {menuItemsList}
          </ul>
        </nav>
      </div>
    </header>
  );
};
