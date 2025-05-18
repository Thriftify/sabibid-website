"use client";
import React, { useRef } from "react";
import Card from "../common/Card";
import { motion, useInView } from "framer-motion";
import { EasyBidIcon, SecureTransacrionIcon, VarietyIcon } from "@/assets/icon";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: EasyBidIcon,
      title: "Easy Bidding Process",
      description: "Simple and intuitive bidding process to help you win.",
    },
    {
      icon: SecureTransacrionIcon,
      title: "Secure Transactions",
      description:
        "Your safety is our priority, secure and reliable payment methods.",
    },
    {
      icon: VarietyIcon,
      title: "Wear Variety of Items",
      description:
        "Bid on electronics, antiques, gadgets, collectibles, and more.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Card
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
