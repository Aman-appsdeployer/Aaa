import * as React from "react";
import { FAQCardProps } from "@/types";

export const FAQCard: React.FC<FAQCardProps> = ({
  title,
  description,
  customStyles = {},
}) => {
  const { container = "", padding = "px-12 py-10", margin = "m-4" } = customStyles;

  return (
    <div
      className={`flex overflow-hidden flex-col text-center text-white border border-solid border-white border-opacity-40 rounded-[61px] ${padding} ${margin} ${container}`}
    >
      <div className="text-2xl font-semibold leading-10 max-lg:text-xl max-md:text-lg max-md:leading-8">
        {title}
      </div>
      <div className="self-center mt-5 text-base leading-7 w-full max-lg:text-sm max-md:text-xs max-md:leading-6">
        {description}
      </div>
    </div>
  );
};
