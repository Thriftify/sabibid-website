import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  link,
}) => {
  const baseClasses = `px-6 py-3 rounded-full font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`;

  const variantClasses =
    variant === "primary"
      ? "bg-[#005BB5] text-white border border-[#005BB5] hover:bg-blue-700 hover:shadow-md active:bg-blue-800 active:shadow-sm"
      : "text-[#005BB5] border border-[#005BB5] bg-transparent hover:bg-gray-100 hover:shadow-md active:bg-gray-200 active:shadow-sm";

  const classNames = `${baseClasses} ${variantClasses} ${className}`;

  return link ? (
    <Link href={link} passHref legacyBehavior>
      <a onClick={onClick} className={classNames}>
        {children}
      </a>
    </Link>
  ) : (
    <button onClick={onClick} className={classNames} type="button">
      {children}
    </button>
  );
};

export default Button;
