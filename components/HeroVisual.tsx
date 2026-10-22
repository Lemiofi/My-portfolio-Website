"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StickerBadge from "./StickerBadge";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 md:mt-14">
      {/* Background Frame with Rounded Container */}
      <div className="relative rounded-[2.5rem] p-3 md:p-6 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Inner Canvas Grid Pattern - Smooth Charcoal & Slate */}
        <div className="relative rounded-[2rem] bg-[#121317] text-neutral-200 border border-white/10 overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center justify-center p-6 md:p-12">
          
          {/* Subtle Grid Canvas Background Layer */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Central Portrait Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-sm md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl group"
          >
            <Image
              src="/lemiofi.jpg"
              alt="Lemiofi Chalchisa — Software Engineer"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Subtle Gradient Shadow Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-4 left-4 right-4 text-neutral-100 font-mono text-[11px] uppercase tracking-wider flex items-center justify-between bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
              <span>Lemiofi Chalchisa</span>
              <span className="text-neutral-300 font-bold">Co-Founder: Liq Academy</span>
            </div>
          </motion.div>

          {/* Sticker Badges - Smooth Light Grey & Graphite Composition */}

          {/* Sticker 1: Software Engineering (Top Left) */}
          <div className="absolute top-6 left-4 md:top-10 md:left-8 z-20">
            <StickerBadge
              text="SOFTWARE ENGINEERING"
              icon="⚡"
              bgColor="#222328"
              textColor="#f4f4f5"
              rotation="-rotate-3"
            />
          </div>

          {/* Sticker 2: Web Development (Top Right) */}
          <div className="absolute top-8 right-4 md:top-12 md:right-10 z-20">
            <StickerBadge
              text="WEB DEVELOPMENT"
              icon="💻"
              bgColor="#e4e4e7"
              textColor="#09090b"
              rotation="rotate-6"
            />
          </div>

          {/* Sticker 3: AI & Technology (Middle Left) */}
          <div className="absolute bottom-36 left-2 md:bottom-40 md:left-6 z-20 hidden sm:block">
            <StickerBadge
              text="AI & TECHNOLOGY"
              icon="🤖"
              bgColor="#18181b"
              textColor="#e4e4e7"
              rotation="-rotate-6"
            />
          </div>

          {/* Sticker 4: Co-Founder of Liq Academy (Middle Right) */}
          <div className="absolute bottom-32 right-2 md:bottom-36 md:right-8 z-20">
            <StickerBadge
              text="CO-FOUNDER OF LIQ ACADEMY"
              icon="🎓"
              bgColor="#27272a"
              textColor="#fafafa"
              rotation="rotate-3"
            />
          </div>

          {/* Sticker 5: Tech Education (Bottom Center Left) */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-12 z-20">
            <StickerBadge
              text="TECH EDUCATION"
              icon="📈"
              bgColor="#f4f4f5"
              textColor="#18181b"
              rotation="-rotate-2"
            />
          </div>

          {/* Sticker 6: Liq Academy Brand Tag (Bottom Right) */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20">
            <StickerBadge
              text="LIQ ACADEMY ©"
              icon="✦"
              bgColor="#18181b"
              textColor="#d4d4d8"
              rotation="rotate-2"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
