import * as React from "react";
import { FAQCard } from "./FAQCard";

const faqData = [
  {
    title: "Why Invest through Nuqi?",
    description:
      "Access diverse portfolio featuring 250+ Indian stocks and 1000+ global stocks, along with ETFs, mutual funds, and sukuks. Access to global markets like US, UK, Europe and more. Access global and local ethical mutual funds for systematic investment planning and lumpsum. Pre-designed portfolios by qualified investment advisors for long term investing.",
    customStyles: {
      padding: "px-12 py-14",
      margin: "",
      container: "w-[400px] h-[450px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Does Nuqi require a minimum investment to get started?",
    description: "You can start your NUQI investment journey with USD 100 *",
    customStyles: {
      padding: "px-12 py-5",
      margin: "m-2",
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Does Nuqi offer investment options that consider social responsibility?",
    description:
      "YES, our Curated Equity Portfolios (CEP's) are based on Ethical / Social & Sustainable ESS Principles.",
    customStyles: {
      padding: "px-11 py-3",
      margin: "m-4",
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Does Nuqi require minimum investment to get started?",
    description: "You can start your investment with USD 100.",
    customStyles: {
      padding: "px-11 py-3",
      margin: "m-4",
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Why can I invest?",
    description:
      "With NUQI, now you have the option to invest in select financial products in India and in International markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile.",
    customStyles: {
      padding: "px-12 py-14",
      margin: "-mt-44", // Kept for desktop
      container: "w-[400px] h-[450px] max-lg:w-[350px] max-md:w-full max-md:h-auto max-md:-mt-4", // Mobile adjustment
    },
  },
  {
    title: "Does Nuqi require minimum investment to get started?",
    description: "You can start your investment with USD 100..",
    customStyles: {
      padding: "px-12 py-5",
      margin: "-mt-44", // Kept for desktop
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto max-md:-mt-4", // Mobile adjustment
    },
  },
  {
    title: "Can you adjust your investment plan based on changing risk tolerance?",
    description:
      "YES you have the flexibility to change your RISK profile basis any material change in your circumstances.",
    customStyles: {
      padding: "px-11 py-5",
      margin: "m-4",
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Are there live events to learn more about Nuqi's investment strategies?",
    description:
      "YES live online sessions / Global Event Participations on the cards.",
    customStyles: {
      padding: "px-11 py-3",
      margin: "m-4",
      container: "w-[370px] h-[250px] max-lg:w-[350px] max-md:w-full max-md:h-auto",
    },
  },
  {
    title: "Why Invest through Nuqi?",
    description:
      "Access diverse portfolio featuring 250+ Indian stocks and 1000+ global stocks, along with ETFs, mutual funds, and sukuks. Access to global markets like US, UK, Europe and more. Access global and local ethical mutual funds for systematic investment planning and lumpsum. Pre-designed portfolios by qualified investment advisors for long term investing.",
    customStyles: {
      padding: "px-12 py-14",
      margin: "-mt-44 ml-5", // Kept for desktop
      container: "w-[400px] h-[450px] max-lg:w-[350px] max-md:w-full max-md:h-auto max-md:-mt-4 max-md:ml-0", // Mobile adjustment
    },
  },
];

export const FAQSection: React.FC = () => {
  return (
    <div className="flex flex-col self-center mt-2 w-full max-w-[1398px] px-5">
      <div className="flex flex-wrap gap-5 justify-center max-md:flex-col max-md:items-center">
        {faqData.map((faq, index) => (
          <FAQCard
            key={index}
            title={faq.title}
            description={faq.description}
            customStyles={faq.customStyles}
          />
        ))}
      </div>
    </div>
  );
};
