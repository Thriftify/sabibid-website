import React from "react";

interface HowItWorksCardProps {
  title: string;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  title,
  description,
  icon: Icon,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FF70430D] p-8 rounded-lg shadow-md text-left w-full min-h-[250px] md:min-h-[300px] flex flex-col ${className}`}
    >
      {Icon && (
        <div className="mb-6 bg-[#005BB5] rounded-full p-3 w-16 h-16 flex items-center justify-center text-white self-start">
          <Icon />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-left md:mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-base md:text-lg text-left flex-grow">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCard;
