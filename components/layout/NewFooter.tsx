"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SabiBidlogoIcon } from "@/assets/icon";

const NewFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Email validation
  useEffect(() => {
    if (typingTimeout) clearTimeout(typingTimeout);

    if (email) {
      setIsTyping(true);
      setTypingTimeout(
        setTimeout(() => {
          setIsTyping(false);
          setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        }, 500)
      );
    } else {
      setIsTyping(false);
      setIsValid(false);
    }

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [email]);

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (result.status === "success") {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    marketplace: [
      { label: "Browse Auctions", href: "/auctions" },
      { label: "Sell an Item", href: "/sell" },
      { label: "Categories", href: "/categories" },
      { label: "Featured Items", href: "/featured" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Tips", href: "/safety" },
      { label: "Buyer Protection", href: "/protection" },
      { label: "Seller Guide", href: "/seller-guide" },
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Fee Structure", href: "/fees" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "https://twitter.com/sabibid" },
    { name: "Instagram", icon: "📷", href: "https://instagram.com/sabibid" },
    { name: "Discord", icon: "💬", href: "https://discord.gg/sabibid" },
    { name: "YouTube", icon: "▶️", href: "https://youtube.com/sabibid" },
  ];

  return (
    <footer className="bg-gray-900 text-white" ref={ref}>
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  🔔 Never Miss a Drop
                </h3>
                <p className="text-blue-100">
                  Get alerts for new auctions, exclusive deals, and collector
                  insights.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                    >
                      <p className="font-bold text-lg">
                        You're on the list! 🎉
                      </p>
                      <p className="text-blue-100 text-sm mt-1">
                        Check your inbox for a confirmation email.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                          disabled={isLoading}
                        />
                        {email && !isTyping && (
                          <span
                            className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                              isValid ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {isValid ? "✓" : "✗"}
                          </span>
                        )}
                      </div>
                      <button
                        type="submit"
                        disabled={!isValid || isLoading}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          isValid && !isLoading
                            ? "bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg"
                            : "bg-white/30 text-white/70 cursor-not-allowed"
                        }`}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Subscribing...
                          </span>
                        ) : (
                          "Subscribe"
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <SabiBidlogoIcon className="w-10 h-10" />
                <span className="text-2xl font-bold">SabiBid</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                The trusted auction marketplace for sneakerheads, art lovers,
                car enthusiasts, and collectors of all kinds.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-lg transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm">Buyer Protection</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">✅</span>
              <span className="text-sm">Verified Sellers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">💳</span>
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">🏦</span>
              <span className="text-sm">Escrow Protected</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} SabiBid. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Payment Methods:</span>
            <div className="flex gap-2">
              {["💳", "🏦", "₿", "💰"].map((icon, i) => (
                <span key={i} className="text-xl">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
