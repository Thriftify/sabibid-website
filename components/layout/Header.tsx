import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="SabiBid Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
            priority
          />
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            SabiBid
          </Link>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/auctions"
            className="text-white/80 hover:text-white transition-colors font-medium"
          >
            Auctions
          </Link>
          <Link
            href="/categories"
            className="text-white/80 hover:text-white transition-colors font-medium"
          >
            Categories
          </Link>
          <Link
            href="/how-it-works"
            className="text-white/80 hover:text-white transition-colors font-medium"
          >
            How It Works
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="hidden sm:block text-white/80 hover:text-white transition-colors font-medium">
            Sign In
          </button>
          <Button className="bg-white text-black hover:bg-gray-100 border-0">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
