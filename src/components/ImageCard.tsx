import * as React from "react";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
    return (
      <div className="flex flex-col max-w-[124px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full shadow-sm aspect-square"
        />
      </div>
    );
  };
  