"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Header from "../layout/Header";
import Header1 from "../../assets/headerImage1.png";
import Header2 from "../../assets/headerImage2.png";
import Header3 from "../../assets/headerImage3.jpg";
import Header4 from "../../assets/headerImage4.png";
import PriceCard from "../common/PriceCard";
import useResponsive from "@/hooks/onMobile";

const HeroSection: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      className="relative overflow-hidden min-h-fit w-full"
      style={{
        background: `linear-gradient(
          to top right, 
          rgba(255, 112, 67, 0.15),
          rgba(0, 91, 181, 0.15)
        )`,
      }}
    >
      <Header />
      <div className="container px-4 py-16 md:py-24 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left column with animation */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-[#005BB5] -mt-6 sm:-mt-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Turn Your <br /> Extra Items Into{" "}
              <span className="text-[#FF7043]">Opportunities!</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto lg:mx-0 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              List your unused products, bid on great finds, and make a positive
              impact with every transaction!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="w-full py-3 rounded-lg px-8">
                Explore Bids
              </Button>
              {!isMobile && (
                <Button
                  variant="secondary"
                  className="w-full py-3 rounded-lg px-8"
                >
                  Place Bid
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right column with animated cards */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isMobile ? (
              <div className="relative h-[380px] w-full max-w-xs mx-auto">
                <div className="absolute top-0 -left-14 w-full transform -rotate-12 z-10">
                  <PriceCard
                    author="Afolabi Simloluwa"
                    imageUrl={Header4}
                    title="Wrist Watch"
                    price="$10"
                    time="02:34:05"
                    location="Bodija Market, Ibadan"
                  />
                </div>
                <div className="absolute top-24 -right-20 w-full transform rotate-12 z-20">
                  <PriceCard
                    author="Eniola Ademola"
                    imageUrl={Header3}
                    title="PS5 Controller"
                    price="$6"
                    time="02:34:05"
                    location="Ikeja, Lagos State"
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-md">
                <div className="relative z-10 w-full mt-8 -top-28 right-24 lg:mt-12 lg:ml-8">
                  <PriceCard
                    author="Afolabi Simloluwa"
                    imageUrl={Header2}
                    title="Luxury Table"
                    price="$21"
                    time="02:34:05"
                    location="Washington D.C, United States"
                  />
                </div>
                <div className="absolute z-20 w-full lg:top-2 lg:left-16">
                  <PriceCard
                    author="Eniola Ademola"
                    imageUrl={Header1}
                    title="Brown Baby Journal"
                    price="$10"
                    time="02:34:05"
                    location="Birmingham City, UK"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
