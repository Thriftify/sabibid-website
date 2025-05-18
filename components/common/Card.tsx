import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#D9D9D91A] p-6 rounded-lg shadow-md md:text-left text-center ${className}`}
    >
      {Icon && (
        <div className="mb-4 bg-[#FF7043] rounded-full p-3 inline-flex items-center justify-center text-white mx-auto md:mx-0">
          <Icon />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
