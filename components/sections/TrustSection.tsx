"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TrustFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const trustFeatures: TrustFeature[] = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Verified Authenticity",
    description:
      "Every high-value item is authenticated by our expert team. Fake items have no place on SabiBid.",
    stat: "99.9%",
    statLabel: "Authentication Rate",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Secure Escrow Payments",
    description:
      "Your money is held safely in escrow until you confirm item receipt. Protected by bank-grade encryption.",
    stat: "$50M+",
    statLabel: "Secured Transactions",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Vetted Sellers",
    description:
      "All sellers undergo identity verification. Ghost sellers and scammers are banned instantly.",
    stat: "50K+",
    statLabel: "Verified Sellers",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprise charges. Our fee structure is simple: 5% buyer premium, that's it.",
    stat: "0%",
    statLabel: "Hidden Fees",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Real-Time Bidding",
    description:
      "Live WebSocket updates ensure you never miss a bid. See all bid history for complete transparency.",
    stat: "<1s",
    statLabel: "Bid Latency",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Instant Payouts",
    description:
      "Sellers receive funds within 24 hours of confirmed delivery. No more waiting weeks for payment.",
    stat: "24h",
    statLabel: "Payout Time",
  },
];

const TrustSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Built on Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Why Collectors Trust SabiBid
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've solved the biggest pain points in online auctions. No more
            fake items, ghost sellers, hidden fees, or manipulated bids.
          </p>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-blue-600">
                  {feature.stat}
                </span>
                <span className="text-sm text-gray-500">
                  {feature.statLabel}
                </span>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Fee Breakdown Card */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                💰 Transparent Fee Breakdown
              </h3>
              <p className="text-blue-100 max-w-lg">
                We believe in complete transparency. Here's exactly what you pay
                when you win an auction.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[300px]">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="text-blue-100">Winning Bid</span>
                  <span className="font-semibold">$500.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Buyer Premium (5%)</span>
                  <span className="font-semibold">$25.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Payment Processing</span>
                  <span className="text-green-300 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Hidden Fees</span>
                  <span className="text-green-300 font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/20">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl">$525.00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🔒</div>
            <p className="text-sm text-gray-600">SSL Encrypted</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🏦</div>
            <p className="text-sm text-gray-600">Bank-Grade Security</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-sm text-gray-600">Verified Sellers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🛡️</div>
            <p className="text-sm text-gray-600">Buyer Protection</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💳</div>
            <p className="text-sm text-gray-600">PCI Compliant</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
