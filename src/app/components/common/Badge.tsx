import { ReactNode } from "react";

const variantToClasses: Record<string, string> = {
  accent: "bg-accent text-white",
  accentGreen: "bg-accent-green text-text-muted",
  outline: "border border-white text-white",
  dark: "bg-black text-white",
};

export const Badge = ({
  children,
  variant = "accent",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof variantToClasses;
  className?: string;
}) => {
  return (
    <span
      className={`px-[8px] py-[6px] uppercase w-fit text-[14px] font-bold ${variantToClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};


