"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface AuctionItem {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  startingPrice: number;
  endTime: Date;
  category: string;
  seller: {
    name: string;
    rating: number;
    isVerified: boolean;
  };
  bidCount: number;
  isHot: boolean;
  watchers: number;
}

interface CategoryTab {
  id: string;
  label: string;
  emoji: string;
}

const categories: CategoryTab[] = [
  { id: "all", label: "All Items", emoji: "🔥" },
  { id: "sneakers", label: "Sneakers", emoji: "👟" },
  { id: "art", label: "Art", emoji: "🎨" },
  { id: "cars", label: "Cars & Bikes", emoji: "🚗" },
  { id: "nft", label: "NFTs", emoji: "🖼️" },
  { id: "gadgets", label: "Gadgets", emoji: "📱" },
  { id: "collectibles", label: "Collectibles", emoji: "💎" },
];

// Simulated auction data
const auctionItems: AuctionItem[] = [
  {
    id: "1",
    title: "Air Jordan 1 Retro High OG 'Chicago'",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=400&h=300&fit=crop",
    currentBid: 450,
    startingPrice: 200,
    endTime: new Date(Date.now() + 3600000 * 2), // 2 hours
    category: "sneakers",
    seller: { name: "SneakerKing", rating: 4.9, isVerified: true },
    bidCount: 23,
    isHot: true,
    watchers: 156,
  },
  {
    id: "2",
    title: "Banksy 'Girl with Balloon' Print #42/500",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=300&fit=crop",
    currentBid: 2500,
    startingPrice: 1000,
    endTime: new Date(Date.now() + 3600000 * 5), // 5 hours
    category: "art",
    seller: { name: "ArtDealer", rating: 4.8, isVerified: true },
    bidCount: 45,
    isHot: true,
    watchers: 342,
  },
  {
    id: "3",
    title: "Bored Ape Yacht Club #3421",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300&fit=crop",
    currentBid: 15000,
    startingPrice: 10000,
    endTime: new Date(Date.now() + 3600000 * 8), // 8 hours
    category: "nft",
    seller: { name: "CryptoWhale", rating: 5.0, isVerified: true },
    bidCount: 12,
    isHot: false,
    watchers: 89,
  },
  {
    id: "4",
    title: "Vintage Rolex Submariner 1968",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop",
    currentBid: 8500,
    startingPrice: 5000,
    endTime: new Date(Date.now() + 3600000 * 1), // 1 hour
    category: "collectibles",
    seller: { name: "LuxuryVault", rating: 4.7, isVerified: true },
    bidCount: 67,
    isHot: true,
    watchers: 234,
  },
  {
    id: "5",
    title: "PlayStation 5 Limited Edition Spider-Man",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    currentBid: 650,
    startingPrice: 500,
    endTime: new Date(Date.now() + 3600000 * 3), // 3 hours
    category: "gadgets",
    seller: { name: "TechDeals", rating: 4.6, isVerified: true },
    bidCount: 34,
    isHot: false,
    watchers: 178,
  },
  {
    id: "6",
    title: "1967 Ford Mustang Shelby GT500",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop",
    currentBid: 125000,
    startingPrice: 80000,
    endTime: new Date(Date.now() + 3600000 * 24), // 24 hours
    category: "cars",
    seller: { name: "ClassicAutos", rating: 4.9, isVerified: true },
    bidCount: 8,
    isHot: true,
    watchers: 567,
  },
  {
    id: "7",
    title: "Travis Scott x Nike Dunk Low",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
    currentBid: 380,
    startingPrice: 250,
    endTime: new Date(Date.now() + 3600000 * 4), // 4 hours
    category: "sneakers",
    seller: { name: "HypeDrops", rating: 4.8, isVerified: true },
    bidCount: 56,
    isHot: true,
    watchers: 445,
  },
  {
    id: "8",
    title: "Apple Vision Pro 256GB",
    image:
      "https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=400&h=300&fit=crop",
    currentBid: 2800,
    startingPrice: 2500,
    endTime: new Date(Date.now() + 3600000 * 6), // 6 hours
    category: "gadgets",
    seller: { name: "AppleFan", rating: 4.5, isVerified: false },
    bidCount: 19,
    isHot: false,
    watchers: 123,
  },
];

// Countdown Timer Hook
const useCountdown = (endTime: Date) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = endTime.getTime() - Date.now();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }, [endTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};

// Auction Card Component
const AuctionCard: React.FC<{ item: AuctionItem; index: number }> = ({
  item,
  index,
}) => {
  const { hours, minutes, seconds, isExpired } = useCountdown(item.endTime);
  const [currentBid, setCurrentBid] = useState(item.currentBid);
  const [showBidAnimation, setShowBidAnimation] = useState(false);

  // Simulate live bid updates
  useEffect(() => {
    const randomInterval = Math.random() * 30000 + 10000; // 10-40 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const increment = Math.floor(Math.random() * 50) + 10;
        setCurrentBid((prev) => prev + increment);
        setShowBidAnimation(true);
        setTimeout(() => setShowBidAnimation(false), 2000);
      }
    }, randomInterval);
    return () => clearInterval(interval);
  }, []);

  const isUrgent = hours === 0 && minutes < 30;

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isHot && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
              🔥 Hot
            </span>
          )}
          {item.seller.isVerified && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              ✓ Verified
            </span>
          )}
        </div>

        {/* Watchers */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
          👁️ {item.watchers}
        </div>

        {/* Live Bid Animation */}
        {showBidAnimation && (
          <motion.div
            className="absolute inset-0 bg-green-500/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-white bg-green-500 px-4 py-2 rounded-full font-bold text-sm">
              New Bid! 🎉
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Seller Info */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-sm text-gray-600">{item.seller.name}</span>
            <span className="text-yellow-500 text-sm">
              ★ {item.seller.rating}
            </span>
          </div>
          <span className="text-xs text-gray-400">{item.bidCount} bids</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        {/* Price & Timer */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-xs text-gray-500">Current Bid</span>
            <motion.p
              className="text-xl font-bold text-gray-900"
              key={currentBid}
              initial={{ scale: 1.1, color: "#22c55e" }}
              animate={{ scale: 1, color: "#111827" }}
              transition={{ duration: 0.5 }}
            >
              ${currentBid.toLocaleString()}
            </motion.p>
          </div>

          <div
            className={`text-right ${
              isUrgent ? "text-red-500" : "text-gray-600"
            }`}
          >
            <span className="text-xs block mb-1">
              {isExpired ? "Ended" : isUrgent ? "⚡ Ending Soon!" : "Time Left"}
            </span>
            {!isExpired && (
              <div className="flex gap-1 font-mono text-sm font-bold">
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {String(hours).padStart(2, "0")}h
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {String(minutes).padStart(2, "0")}m
                </span>
                <span
                  className={`px-2 py-1 rounded ${
                    isUrgent ? "bg-red-100 animate-pulse" : "bg-gray-100"
                  }`}
                >
                  {String(seconds).padStart(2, "0")}s
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bid Button */}
        <button
          className={`w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
            isExpired
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25"
          }`}
          disabled={isExpired}
        >
          {isExpired ? "Auction Ended" : "Place Bid"}
        </button>

        {/* Fee Transparency */}
        <p className="text-xs text-center text-gray-400 mt-2">
          💰 5% buyer premium • No hidden fees
        </p>
      </div>
    </motion.div>
  );
};

// Live Bid Notification Component
const LiveBidNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<
    { id: number; text: string }[]
  >([]);

  useEffect(() => {
    const names = [
      "John D.",
      "Sarah M.",
      "Mike R.",
      "Emma L.",
      "Chris K.",
      "Anna P.",
    ];
    const items = [
      "Air Jordan 1",
      "Rolex Watch",
      "NFT #3421",
      "PS5",
      "Mustang GT",
    ];

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const newNotification = {
          id: Date.now(),
          text: `${
            names[Math.floor(Math.random() * names.length)]
          } just bid on ${items[Math.floor(Math.random() * items.length)]}!`,
        };
        setNotifications((prev) => [newNotification, ...prev].slice(0, 3));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notif) => (
        <motion.div
          key={notif.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3 border border-gray-200 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-700">{notif.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

const FeaturedAuctions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"hot" | "ending" | "price">("hot");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = auctionItems
    .filter(
      (item) => activeCategory === "all" || item.category === activeCategory
    )
    .sort((a, b) => {
      if (sortBy === "hot") return (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0);
      if (sortBy === "ending") return a.endTime.getTime() - b.endTime.getTime();
      if (sortBy === "price") return b.currentBid - a.currentBid;
      return 0;
    });

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Live Auctions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Auctions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover verified items from trusted sellers. Real-time bidding with
            transparent fees and authenticity guaranteed.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Sort Options */}
        <motion.div
          className="flex justify-between items-center mb-8 flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">
              {filteredItems.length}
            </span>{" "}
            items found
          </p>
          <div className="flex gap-2">
            <span className="text-gray-500 text-sm">Sort by:</span>
            {[
              { id: "hot", label: "🔥 Hot Now" },
              { id: "ending", label: "⏰ Ending Soon" },
              { id: "price", label: "💰 Highest Bid" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() =>
                  setSortBy(option.id as "hot" | "ending" | "price")
                }
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  sortBy === option.id
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <AuctionCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all">
            View All Auctions →
          </button>
        </motion.div>
      </div>

      {/* Live Bid Notifications */}
      <LiveBidNotification />
    </section>
  );
};

export default FeaturedAuctions;
