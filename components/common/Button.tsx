import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  link?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  link,
  type = "button",
  disabled = false,
}) => {
  const baseClasses = `px-6 py-3 rounded-full font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
    disabled ? "opacity-70 cursor-not-allowed" : ""
  }`;

  const variantClasses =
    variant === "primary"
      ? `bg-[#005BB5] text-white border border-[#005BB5] ${
          disabled ? "" : "hover:bg-blue-700 hover:shadow-md active:bg-blue-800"
        }`
      : `text-[#005BB5] border border-[#005BB5] bg-transparent ${
          disabled ? "" : "hover:bg-gray-100 hover:shadow-md active:bg-gray-200"
        }`;

  const classNames = `${baseClasses} ${variantClasses} ${className}`;

  return link ? (
    <Link href={link} passHref legacyBehavior>
      <a
        onClick={disabled ? undefined : onClick}
        className={classNames}
        aria-disabled={disabled}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      onClick={disabled ? undefined : onClick}
      className={classNames}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
