import React from "react";
import Button from "./Button";
import { LocationIcon, LoveIcon, TimeIcon } from "@/assets/icon";
import Image, { StaticImageData } from "next/image";

interface PriceCardProps {
  title: string;
  author: string;
  price: string;
  location: string;
  imageUrl: StaticImageData;
  imageAlt?: string;
  time: string;
  onBidClick?: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  author,
  price,
  location,
  imageUrl,
  imageAlt = "",
  time,
  onBidClick,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[280px] sm:w-[300px] hover:shadow-lg transition-shadow duration-300 mx-auto">
      <div className="relative w-full h-48 sm:h-52">
        <Image
          src={imageUrl}
          alt={imageAlt || title}
          fill
          className="object-cover p-2 rounded-t-xl"
          priority
          sizes="(max-width: 640px) 280px, 300px"
        />

        <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
          <LoveIcon className="w-4 h-4 text-red-500 hover:text-red-600" />
        </button>

        <div className="absolute bottom-3 right-3 bg-white/80 px-2 py-1 rounded-full flex items-center gap-1">
          <TimeIcon className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs font-medium">{time}</span>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
          {title}
        </h2>

        <p className="text-gray-600 text-xs sm:text-sm mb-2">{author}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base sm:text-lg text-gray-700">
            Base Price: <span className="font-bold">{price}</span>
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <LocationIcon className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-gray-600 text-xs sm:text-sm">{location}</span>
        </div>

        {/* Bid Button */}
        <Button
          variant="primary"
          onClick={onBidClick}
          className="w-full py-2 sm:py-2.5 rounded-lg text-sm sm:text-base"
        >
          Bid now
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
