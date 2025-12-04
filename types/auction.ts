// TypeScript interfaces for the auction platform

export interface AuctionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  currentBid: number;
  startingPrice: number;
  endTime: Date;
  category: AuctionCategory;
  seller: Seller;
  bidCount: number;
  isHot: boolean;
  isVerified: boolean;
  watchers: number;
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalSales: number;
  isVerified: boolean;
  responseRate: number;
}

export interface Bid {
  id: string;
  auctionId: string;
  bidderId: string;
  bidderName: string;
  amount: number;
  timestamp: Date;
}

export type AuctionCategory =
  | "sneakers"
  | "art"
  | "cars"
  | "bikes"
  | "nft"
  | "limited-edition"
  | "gadgets"
  | "collectibles";

export interface CategoryFilter {
  id: AuctionCategory;
  label: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  category: AuctionCategory;
  quote: string;
  rating: number;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LiveBidNotification {
  id: string;
  itemTitle: string;
  bidAmount: number;
  bidderName: string;
  timestamp: Date;
}

export interface FeeBreakdown {
  buyerPremium: number;
  platformFee: number;
  paymentProcessing: number;
  total: number;
}
