import * as React from 'react';

const portfolioData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97ae75781c2f751cae24dbe6cc77ca8480f6c3e18679c7a8aff0fae4d9f85eeb?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Entrenched enterprises",
    description: "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54e00c433c1b5c359308b6dafd2a35e386897e9dd981b607fb6466462fda3ff2?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Income Generators",
    description: "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/920b85afd2714f91a4ae72908214f4bccf9cff84ba931f24c3fe7cafff91e235?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Artificial Intelligence",
    description: "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffcd92f77f68d0ac88151b1a1fa324ce45cd7f61a4651ea14276d8deb197db?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "60 40 Portfolios (ETFs)",
    description: "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors."
  }
];

import { PortfolioCard } from './PortfolioCard';

export const PortfolioGrid: React.FC = () => (
  <div className="flex flex-col">
    <div className="flex flex-col items-center px-20 pt-20 pb-36 w-full bg-zinc-950 rounded-[70px] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1433px] max-md:mb-2.5 max-md:max-w-full">
        <div className="text-5xl font-medium tracking-tighter leading-loose text-center text-cyan-400 max-md:max-w-full max-md:text-4xl">
          Nuqi Global CEP (Curated Equity Portfolios)
        </div>
        <div className="self-stretch mt-12 text-3xl font-medium tracking-tighter text-center leading-[52px] text-zinc-500 max-md:mt-10 max-md:max-w-full">
          Our Nuqi Global Basket offers a variety of curated investment themes, each catering to specific risk appetite and investment goals:
        </div>
        <div className="mt-28 max-w-full w-[1085px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {portfolioData.slice(0, 2).map((portfolio, index) => (
              <PortfolioCard key={index} {...portfolio} />
            ))}
          </div>
        </div>
        <div className="mt-14 max-w-full w-[1085px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {portfolioData.slice(2, 4).map((portfolio, index) => (
              <PortfolioCard key={index} {...portfolio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);