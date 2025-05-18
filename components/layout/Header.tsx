import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
            priority
          />
          <Link href="/" className="text-2xl font-bold text-[#005BB5]">
            SabiBid
          </Link>
        </div>
        <div className="flex space-x-4">
          <Button>Explore Bids</Button>
          <Button variant="secondary" className="hidden sm:block">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
