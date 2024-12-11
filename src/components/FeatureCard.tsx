import * as React from "react";
import { FeatureCardProps } from "@/types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col justify-between bg-neutral-900 rounded-3xl border border-solid border-white border-opacity-20 px-6 py-8 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
      style={{
        flex: '1', // Ensures the cards stretch equally
        minHeight: '160px', // Minimum height for consistent sizing
      }}
    >
      {/* Title Section */}
      <div className="text-xl font-semibold text-white">{title}</div>

      {/* Description Section */}
      <div className="text-base leading-7 text-white mt-4">{description}</div>
    </div>
  );
};

