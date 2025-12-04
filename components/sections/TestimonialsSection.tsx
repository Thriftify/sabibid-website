"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  category: string;
  categoryEmoji: string;
  quote: string;
  rating: number;
  itemWon: string;
  savedAmount: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    role: "Sneaker Collector",
    category: "Sneakers",
    categoryEmoji: "👟",
    quote:
      "Finally, a platform where I don't have to worry about buying fake Jordans. The authentication process is legit, and I've saved over $2,000 compared to reseller prices!",
    rating: 5,
    itemWon: "Air Jordan 1 Travis Scott",
    savedAmount: "$400",
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    role: "Art Collector",
    category: "Art",
    categoryEmoji: "🎨",
    quote:
      "As an art collector, trust is everything. SabiBid's verified seller badges and transparent bidding history gave me confidence to bid on pieces I'd normally only buy in person.",
    rating: 5,
    itemWon: "Banksy Limited Print",
    savedAmount: "$1,200",
  },
  {
    id: "3",
    name: "David Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    role: "NFT Investor",
    category: "NFTs",
    categoryEmoji: "🖼️",
    quote:
      "The real-time bidding updates are game-changing. No more refreshing pages or missing out on drops. Plus, the escrow system protects both buyers and sellers perfectly.",
    rating: 5,
    itemWon: "CryptoPunk #7842",
    savedAmount: "2 ETH",
  },
  {
    id: "4",
    name: "James Mitchell",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    role: "Classic Car Enthusiast",
    category: "Cars",
    categoryEmoji: "🚗",
    quote:
      "Bought my dream '67 Mustang here. The inspection reports were thorough, and the seller verification gave me peace of mind for such a big purchase. Couldn't be happier!",
    rating: 5,
    itemWon: "1967 Ford Mustang",
    savedAmount: "$8,500",
  },
  {
    id: "5",
    name: "Emily Park",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    role: "Student & Gadget Hunter",
    category: "Gadgets",
    categoryEmoji: "📱",
    quote:
      "As a college student, I need deals. SabiBid helps me find authentic tech at prices I can actually afford. Got my MacBook Pro at 40% below retail. The fee transparency is refreshing!",
    rating: 5,
    itemWon: "MacBook Pro M2",
    savedAmount: "$650",
  },
  {
    id: "6",
    name: "Michael Torres",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    role: "Limited Edition Collector",
    category: "Collectibles",
    categoryEmoji: "💎",
    quote:
      "The instant payout feature is amazing for sellers. I've sold over 50 items, and I never have to wait weeks for my money. The 5% fee is totally worth the buyer traffic.",
    rating: 5,
    itemWon: "Supreme Box Logo Hoodie",
    savedAmount: "$180",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Loved by Collectors Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 50,000+ satisfied collectors who trust SabiBid for authentic
            auctions
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">50K+</p>
            <p className="text-gray-600 text-sm">Active Collectors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">4.9★</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              $12M+
            </p>
            <p className="text-gray-600 text-sm">Total Saved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              99.9%
            </p>
            <p className="text-gray-600 text-sm">Satisfaction Rate</p>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 h-full flex flex-col justify-between border border-gray-100">
                  {/* Quote */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">
                        {testimonials[currentIndex].categoryEmoji}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].category}
                      </span>
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Item Won Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                      <span className="text-green-600 text-sm">🏆 Won:</span>
                      <span className="text-green-700 font-medium text-sm">
                        {testimonials[currentIndex].itemWon}
                      </span>
                      <span className="text-green-600 text-sm">
                        (Saved {testimonials[currentIndex].savedAmount})
                      </span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Avatars */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="w-full text-center text-gray-500 text-sm mb-4">
            Trusted by collectors across all categories:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "👟 Sneakerheads",
              "🎨 Art Lovers",
              "🚗 Car Enthusiasts",
              "🖼️ NFT Collectors",
              "💎 Limited Edition Hunters",
              "📱 Gadget Seekers",
            ].map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
