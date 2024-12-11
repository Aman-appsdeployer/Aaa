import * as React from "react";

interface QRCodeProps {
  imageSrc: string;
  imageAlt: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex flex-col mt-5 items-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-[150px] h-[150px]"
      />
      <p className="text-white mt-4">Scan QR code</p>
    </div>
  );
};
