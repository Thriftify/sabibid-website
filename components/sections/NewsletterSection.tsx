"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "../common/Button";
import { motion, useInView } from "framer-motion";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (typingTimeout) clearTimeout(typingTimeout);

    if (email) {
      setIsTyping(true);
      setTypingTimeout(
        setTimeout(() => {
          setIsTyping(false);
          setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        }, 800)
      );
    } else {
      setIsTyping(false);
      setIsValid(false);
    }

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-12 bg-white md:py-16 text-white" ref={ref}>
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-[#005BB51A] rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#005BB5]">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-0">
              Get updates from the latest auctions and exclusive offers.
            </p>
          </motion.div>

          {/* Form Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-[#005BB5] p-4 rounded-lg shadow-lg text-center"
              >
                <p className="font-bold">{email}</p>
                <p className="text-sm mt-1">You've sabi this thing! ✨</p>
                <p className="text-xs mt-2">You're on our waitlist</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 text-sm sm:text-base rounded-lg text-gray-800 border border-gray-300 focus:border-[#005BB5] focus:ring-2 focus:ring-[#005BB5] focus:outline-none transition-all duration-300"
                  />
                  {isValid && (
                    <Button
                      variant="secondary"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition-transform duration-200"
                    >
                      Subscribe
                    </Button>
                  )}
                </div>

                {/* Validation Message */}
                {email && (
                  <div
                    className={`mt-2 text-xs sm:text-sm transition-all duration-300 ease-in-out ${
                      isTyping
                        ? "text-gray-500"
                        : isValid
                        ? "text-green-600"
                        : "text-red-600"
                    } ${isTyping ? "animate-pulse" : ""}`}
                  >
                    {isTyping
                      ? "Checking email..."
                      : isValid
                      ? "✓ Valid email - ready to submit!"
                      : "Please enter a valid email"}
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
