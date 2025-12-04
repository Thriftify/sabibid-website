import NewHeroSection from "@/components/sections/NewHeroSection";
import FeaturedAuctions from "@/components/sections/FeaturedAuctions";
import TrustSection from "@/components/sections/TrustSection";
import NewHowItWorksSection from "@/components/sections/NewHowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewFooter from "@/components/layout/NewFooter";
import type { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SabiBid - Authentic Auctions for Passionate Collectors",
  description:
    "Join 50,000+ collectors bidding on verified sneakers, art, NFTs, cars, and rare collectibles. Real-time bidding, transparent fees, 100% authenticity guaranteed.",
  keywords: [
    "auction",
    "sneakers",
    "art",
    "NFT",
    "collectibles",
    "verified sellers",
    "authentic",
    "bidding",
  ],
  openGraph: {
    title: "SabiBid - Authentic Auctions for Passionate Collectors",
    description:
      "Join 50,000+ collectors bidding on verified sneakers, art, NFTs, cars, and rare collectibles.",
    type: "website",
  },
};

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Trust Badges, Search, and Featured Carousel */}
      <NewHeroSection />

      {/* Featured Auctions Grid with Filters, Countdown Timers, and Live Bids */}
      <FeaturedAuctions />

      {/* Trust Section - Why Collectors Trust SabiBid */}
      <TrustSection />

      {/* How It Works - 4 Step Process */}
      <NewHowItWorksSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Footer with Newsletter, Links, and Trust Badges */}
      <NewFooter />
    </main>
  );
};

export default Home;
