import * as React from 'react';
import { PortfolioCardProps } from '@/types';
import { LearnMoreButton } from './LearnMoreButton';

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-center px-16 pt-11 pb-20 w-full text-base text-cyan-400 border border-solid border-white border-opacity-40 rounded-[61px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={icon}
        className="object-contain max-w-full rounded-2xl aspect-[1.06] w-[100px]"
        alt={title}
      />
      <div className="mt-5 text-2xl tracking-tight leading-none text-center">
        {title}
      </div>
      <div className="self-stretch mt-7 leading-6 text-center text-white">
        {description}
      </div>
      <LearnMoreButton />
    </div>
  </div>
);