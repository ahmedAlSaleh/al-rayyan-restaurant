"use client";

import Image from "next/image";
import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

export default function QrCodeSection() {
  return (
    <section
      id="qr-code"
      className="relative overflow-clip bg-[linear-gradient(180deg,#160603_0%,#220a06_56%,#150603_100%)] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,138,34,0.2)] blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.qr.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-[#fff1dc] md:text-5xl">{siteContent.qr.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.qr.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.qr.usageItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
                className="rounded-2xl border border-[#ffad5a]/20 bg-[#2a0f0a]/70 px-4 py-3 text-sm font-semibold text-[#ffe1be]"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <OrderButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mx-auto w-full max-w-lg rounded-[2rem] border border-[#ffb66b]/24 bg-[#2a0f0a]/80 p-6 text-center"
        >
          <div className="mx-auto w-full max-w-[19rem] overflow-hidden rounded-3xl bg-white p-4 shadow-[0_24px_50px_rgba(0,0,0,0.32)]">
            <Image
              src={siteContent.qr.image}
              alt="QR Code للطلب من مطعم الريان"
              width={900}
              height={900}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-[#ffd7ad] md:text-base">{siteContent.qr.caption}</p>

          <a
            href={siteContent.qr.image}
            download="al-rayyan-order-qr.png"
            className="mt-5 inline-flex rounded-full border border-[#ffd5a0]/35 bg-[#3a140d] px-5 py-2.5 text-sm font-bold text-[#ffd5a0]"
          >
            {siteContent.qr.downloadLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
