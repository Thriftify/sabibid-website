"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SabiBidlogoIcon } from "@/assets/icon";

const Footer: React.FC = () => {
  const rotatingTexts = [
    "Bid smart, bid fast, SabiBid!",
    "Sabi price? Sabibid!✅",
    "Your next treasure is just a bid away",
    "Discover unique deals every day🎊",
    "Your next treasure is just a bid away",
    "Join the bidding revolution",
    "Where every bid counts",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Text Side by Side */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Rotating Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <SabiBidlogoIcon className="w-14 h-14" />
          </motion.div>

          {/* Rotating Text */}
          <div className="relative h-6 w-[300px] text-lg text-gray-700 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full text-left"
              >
                {rotatingTexts[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>© {currentYear} SabiBid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
