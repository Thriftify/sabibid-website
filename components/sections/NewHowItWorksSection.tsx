"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Verify & Browse",
    description:
      "Create your account with social login in seconds. Browse thousands of verified items with authenticity badges and seller ratings.",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    color: "text-blue-600",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Bid Securely",
    description:
      "Place your bid with confidence. Watch real-time updates and bid history. Our anti-manipulation system ensures fair bidding.",
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
    color: "text-orange-600",
    bgColor: "bg-orange-500",
  },
  {
    id: 3,
    title: "Win & Pay",
    description:
      "Congratulations! Your payment is held in secure escrow. Clear fee breakdown with no surprises. Pay with cards, crypto, or PayPal.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "text-green-600",
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Receive & Review",
    description:
      "Item shipped with tracking. Verify authenticity upon receipt. Release payment and leave a review to help the community.",
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    color: "text-purple-600",
    bgColor: "bg-purple-500",
  },
];

const NewHowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            How SabiBid Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From browsing to receiving your item, we've made the entire process
            transparent, secure, and hassle-free.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-500 via-orange-500 via-green-500 to-purple-500 rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>
                    <span
                      className={`text-4xl font-bold ${step.color} opacity-20 group-hover:opacity-40 transition-opacity`}
                    >
                      0{step.id}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Connection Dot - Desktop */}
                <div
                  className={`hidden lg:flex absolute top-[5.5rem] left-1/2 -translate-x-1/2 w-6 h-6 ${step.bgColor} rounded-full items-center justify-center z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Highlights */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔐</div>
            <h4 className="font-semibold text-gray-900 mb-1">Secure Escrow</h4>
            <p className="text-gray-600 text-sm">
              Payment held safely until you confirm receipt
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Real-Time Bidding
            </h4>
            <p className="text-gray-600 text-sm">
              WebSocket updates with complete bid transparency
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Verified Sellers
            </h4>
            <p className="text-gray-600 text-sm">
              Every seller is ID verified and rated
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1 mr-4">
            Start Bidding Now
          </button>
          <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
            Watch Demo Video
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHowItWorksSection;
