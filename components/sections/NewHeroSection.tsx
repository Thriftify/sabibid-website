"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../layout/Header";
import useResponsive from "@/hooks/onMobile";

interface FeaturedItem {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  category: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    title: "Air Jordan 1 Retro High OG",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=400&h=300&fit=crop",
    currentBid: 450,
    category: "Sneakers",
  },
  {
    id: "2",
    title: "Banksy Limited Edition Print",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=300&fit=crop",
    currentBid: 2500,
    category: "Art",
  },
  {
    id: "3",
    title: "Bored Ape #3421",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300&fit=crop",
    currentBid: 15000,
    category: "NFT",
  },
  {
    id: "4",
    title: "Vintage Rolex Submariner",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop",
    currentBid: 8500,
    category: "Collectibles",
  },
];

const trustBadges = [
  { icon: "🛡️", label: "Verified Sellers" },
  { icon: "🔒", label: "Secure Payments" },
  { icon: "✓", label: "Authenticity Guaranteed" },
  { icon: "💰", label: "No Hidden Fees" },
];

const NewHeroSection: React.FC = () => {
  const { isMobile } = useResponsive();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />

      <div className="bloom-top"></div>
      <div className="bloom-bottom"></div>
      <div className="bloom-accent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 py-12 md:py-20 relative z-10 mx-auto">
        {/* Trust Badges Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-white/90 text-sm font-medium">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-orange-400 text-sm font-semibold">
                🔥 Live Auctions Happening Now
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Authentic Auctions for</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Passionate Collectors
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join 50,000+ collectors bidding on verified sneakers, art, NFTs,
              and rare collectibles. Real-time bidding. Transparent fees. 100%
              authenticity guaranteed.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="relative max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sneakers, art, NFTs, collectibles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pr-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-500 hover:bg-orange-600 rounded-full transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
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
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1">
                Get Started — It&apos;s Free
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-white font-semibold">2,500+</span>{" "}
                collectors joined this week
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Items Carousel */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                        🔥 HOT
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        ✓ VERIFIED
                      </span>
                    </div>

                    <div className="relative h-3/5 w-full bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src={featuredItems[currentSlide].image}
                        alt={featuredItems[currentSlide].title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-orange-400 text-sm font-medium">
                        {featuredItems[currentSlide].category}
                      </span>
                      <h3 className="text-white text-xl font-bold mt-1 mb-3">
                        {featuredItems[currentSlide].title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-400 text-sm">
                            Current Bid
                          </span>
                          <p className="text-2xl font-bold text-white">
                            $
                            {featuredItems[
                              currentSlide
                            ].currentBid.toLocaleString()}
                          </p>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
                          Place Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-orange-500"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Live Bid Notification */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:left-auto md:-right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-xs"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 animate-pulse">●</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    New bid placed!
                  </p>
                  <p className="text-gray-400 text-xs">
                    @collector_mike bid $475 on Air Jordan 1
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default NewHeroSection;
