"use client";

import { Dispatch, FC, SetStateAction } from "react";

export const MenuButton: FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return (
    <div>
      <button
        className="flex flex-col gap-[8px] cursor-pointer p-[20px] group z-10"
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <div
          className={
            "w-[42px] h-[2px] transition-all duration-300 group-hover:bg-accent " +
            (open ? "rotate-45 translate-y-[6px]" : "rotate-0 translate-y-0") +
            " " +
            (open ? "bg-black" : "bg-white")
          }
        ></div>
        <div
          className={
            "w-[42px] h-[2px] transition-all duration-300 group-hover:bg-accent " +
            (open
              ? "-rotate-45 translate-y-[-4px]"
              : "rotate-0 translate-y-0") +
            " " +
            (open ? "bg-black" : "bg-white")
          }
        ></div>
      </button>
    </div>
  );
};
