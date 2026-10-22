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
      whileHover={{ scale: 1.06, rotate: 0, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`sticker-badge inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl font-bold tracking-tight text-[11px] md:text-xs uppercase cursor-pointer select-none border border-white/20 shadow-lg backdrop-blur-md ${rotation} ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon && <span className="text-xs md:text-sm">{icon}</span>}
      <span className="font-extrabold tracking-wide">{text}</span>
    </motion.div>
  );
}
