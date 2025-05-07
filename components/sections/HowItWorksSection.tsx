"use client";
import React, { useRef } from "react";
import HowItWorksCard from "../common/HowItWorksCard";
import { motion, useInView } from "framer-motion";
import { BidIcon, CompleteIcon, SearchIcon, WinIcon } from "@/assets/icon";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: SearchIcon,
      title: "Browse Auctions",
      description: "Explore the list of available auctions.",
    },
    {
      icon: BidIcon,
      title: "Place Your Bid",
      description: "Enter your bid amount and wait for the countdown",
    },
    {
      icon: WinIcon,
      title: "Win The Auction",
      description:
        "If you have the highest bid when the auction ends, you win!",
    },
    {
      icon: CompleteIcon,
      title: "Complete the Purchase",
      description: "Pay for your items and get it promptly.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <HowItWorksCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                className="text-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
