import * as React from "react";
import { ServiceCardProps } from "@/types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  imageAlt,
  customStyles,
}) => {
  return (
    <div className="flex flex-col h-full pt-16 max-md:ml-0 max-md:w-full">
      <div
        className={`flex flex-col items-center self-stretch w-full text-xl tracking-tight text-center bg-black rounded-2xl border border-solid border-neutral-700 max-md:px-5 max-md:mt-10 ${customStyles?.container || ""}`}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className={`object-contain w-full rounded-3xl aspect-[1.43] ${customStyles?.image || ""}`}
        />
        <div className="mt-3 font-semibold leading-tight text-cyan-400">
          {title}
        </div>
        <div className="mt-5 font-light leading-9 text-white">{description}</div>
      </div>
    </div>
  );
};
