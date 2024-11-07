"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const HunzoLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 w-full h-screen flex flex-col justify-center items-center space-y-10 bg-white"
        >
          <header className="flex items-center mb-8">
            <Image
              src="/icons/Hunzo-Logo.svg"
              alt="Hunzo Logo"
              width={56}
              height={56}
              className="h-12 w-10 mr-2"
            />
            <h1 className="text-3xl font-semibold -tracking-wide text-[#073B4C] font-poppins">
              Hunzo
            </h1>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HunzoLoader;
