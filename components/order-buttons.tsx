"use client";

import { motion } from "motion/react";
import { siteContent } from "@/data/site-content";

type OrderButtonsProps = {
  className?: string;
  ctaClassName?: string;
};

export default function OrderButtons({ className = "", ctaClassName = "" }: OrderButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <motion.a
        href={siteContent.actions.whatsappHref}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${ctaClassName} inline-flex w-full items-center justify-center rounded-full bg-[var(--rayyan-orange)] px-6 py-3 text-sm font-extrabold text-[#2b0a05] shadow-[0_12px_30px_rgba(255,138,34,0.28)] sm:w-auto md:text-base`}
      >
        {siteContent.actions.whatsappLabel}
      </motion.a>

      <motion.a
        href={siteContent.actions.orderFormHref}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${ctaClassName} inline-flex w-full items-center justify-center rounded-full border border-[#ffd59f]/45 bg-[#3a140d]/82 px-6 py-3 text-sm font-bold text-[#ffd59f] sm:w-auto md:text-base`}
      >
        {siteContent.actions.orderNowLabel}
      </motion.a>

      <motion.a
        href={siteContent.actions.orderFormHref}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${ctaClassName} inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm sm:w-auto md:text-base`}
      >
        {siteContent.actions.startOrderLabel}
      </motion.a>
    </div>
  );
}
