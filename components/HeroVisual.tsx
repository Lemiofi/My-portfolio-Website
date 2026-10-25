"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 sm:mt-10 md:mt-12 px-2 sm:px-0 flex justify-center">
      {/* Background Frame with Rounded Container */}
      <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-2.5 sm:p-5 md:p-6 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden w-full max-w-xl md:max-w-2xl flex items-center justify-center">
        {/* Inner Canvas Grid Pattern - Smooth Charcoal & Slate */}
        <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-[#121317] text-neutral-200 border border-white/10 overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-10">
          
          {/* Subtle Grid Canvas Background Layer */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Central Portrait Image - Clean and pristine without badge clutter */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl group"
          >
            <Image
              src="/lemiofi.jpg"
              alt="Lemiofi Chalchisa — Software Developer"
              fill
              sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 420px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Subtle Gradient Shadow Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
