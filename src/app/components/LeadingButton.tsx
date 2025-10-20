import Link from "next/link";
import { FC, ReactNode } from "react";

export const LeadingButton: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`bg-button-background hover:bg-button-background/70 transition-all duration-300 rounded-[50px] group ${className} w-fit`}
    >
      <Link href="mailto:john@biggs.cc">
        <div className="w-full px-[20px] md:px-[30px] py-[15px]">
          <p className="text-text-muted font-semibold text-[18px] flex items-center gap-[10px] uppercase">
            {children}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
      </Link>
    </div>
  );
};
