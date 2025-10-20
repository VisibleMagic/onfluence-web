import { ReactNode } from "react";
import { Typography } from "../Typography";

export const SectionHeader = ({
  eyebrow,
  title,
  right,
  containerClassName = "",
}: {
  eyebrow: string;
  title?: ReactNode;
  right?: ReactNode;
  containerClassName?: string;
}) => {
  return (
    <div className={`px-[16px] md:px-0 flex flex-col md:flex-row md:justify-between md:items-center ${containerClassName}`}>
      <div>
        <div className="font-sans text-[16px] font-black text-white bg-accent px-[8px] py-[6px] uppercase w-fit">
          {eyebrow}
        </div>
        {title ? <h2 className={`${Typography.h2} mt-[24px]`}>{title}</h2> : null}
      </div>
      {right ? <div className="md:w-1/3">{right}</div> : null}
    </div>
  );
};


