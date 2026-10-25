"use client";

import React from "react";
import { motion } from "framer-motion";

interface StickerBadgeProps {
  text: string;
  icon?: string;
  bgColor: string;
  textColor?: string;
  rotation?: string;
  className?: string;
}

export default function StickerBadge({
  text,
  icon,
  bgColor,
  textColor = "#0a0a0c",
  rotation = "rotate-0",
  className = "",
}: StickerBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`sticker-badge inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-4 md:py-2.5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold tracking-tight text-[9px] sm:text-[10px] md:text-xs uppercase cursor-pointer select-none border border-white/20 shadow-md sm:shadow-lg backdrop-blur-md ${rotation} ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon && <span className="text-[10px] sm:text-xs md:text-sm">{icon}</span>}
      <span className="font-extrabold tracking-wide whitespace-nowrap">{text}</span>
    </motion.div>
  );
}
