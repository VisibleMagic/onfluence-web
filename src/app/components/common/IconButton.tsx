import { ReactNode } from "react";

export const IconButton = ({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-button-background w-[64px] h-[64px] flex items-center justify-center hover:bg-button-background/70 transition-all duration-300 ${className}`}
      aria-label="icon button"
    >
      {children}
    </button>
  );
};


